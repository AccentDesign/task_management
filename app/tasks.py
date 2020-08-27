from datetime import datetime, timedelta

from django.core.mail import EmailMessage
from django.db import models
from huey import crontab
from huey.contrib.djhuey import db_task, db_periodic_task, task
import requests

from common.models import WIPSettings
from authentication.models import User


HOST = 'https://wip.accentdesign.co.uk'


@db_task()
def notify_status_change(task, to=None):
    """
    Broadcast task status changes.
    The task status should be set to notify.
    An email can be passed in the override where its being sent to.
    """

    notify_job_relationships = task.status.notify_job_relationships
    notify_task_assignees = task.status.notify_task_assignees

    # if the task doesnt notify anyone quit early
    if not any([notify_job_relationships, notify_task_assignees]):
        return

    if task.job.slack_channel_id:
        send_task_slack_notification(task)

    send_email(task, to, None, notify_job_relationships, notify_task_assignees)


@task(retries=3, retry_delay=60)
def send_email(task, to, reply_to, notify_relationships, notify_assignees):
    """ Send an email. """

    # setup the email content
    subject = f'WIP - Task "{task.status}" for "{task.job.client} - {task.job}"'
    url = f'{HOST}/clients/{task.job.client_id}/jobs/{task.job_id}?task={task.id}'
    body = f'Task "{task.status}" for "{task.job.client} - {task.job}".\n\n{task.title}\n\n{url}'

    to_addresses = []
    if to:
        to_addresses.append(to)

    # if to_addresses was not set find out who wants the email
    if not to_addresses:
        if notify_relationships:
            to_addresses += [r.user.email for r in task.job.relationships.filter(user__is_active=True)]
        if notify_assignees:
            to_addresses += [r.user.email for r in task.assignees.filter(user__is_active=True)]

    # make the to addresses unique
    to_addresses = list(set(to_addresses))

    email = EmailMessage(subject=subject, body=body, to=to_addresses, reply_to=reply_to)
    email.send()


@task(retries=3, retry_delay=60)
def send_task_slack_notification(task):
    """ Send a Slack notification. """

    client_name = task.job.client.name
    job_title = task.job.title
    client_link = f'{HOST}/clients/{task.job.client_id}'
    job_link = f'{HOST}/clients/{task.job.client_id}/jobs/{task.job_id}'
    title_link = f'{job_link}?task={task.id}'
    footer = f'<{client_link}|{client_name}> - <{job_link}|{job_title}>'

    post_slack_message({
        "channel": task.job.slack_channel_id,
        "attachments": [
            {
                "fallback": f'Task updated: {task.title}',
                "color": task.job.client.colour,
                "pretext": 'Task updated',
                "title": task.title,
                "title_link": title_link,
                "text": task.description,
                "fields": [
                    {
                        "title": "Status",
                        "value": str(task.status),
                        "short": False
                    }
                ],
                "footer": footer,
                "ts": datetime.now().timestamp()
            }
        ]
    })


@db_periodic_task(crontab(minute='0', hour='8,10,12,14,16', day_of_week='1,2,3,4,5'))
def check_timesheets():
    """ Check timesheet entries for all active users. """
    # TODO: The time schedule above is UTC, this needs changing in future

    from wip.models import TimeEntry
    settings = WIPSettings.load()

    working_week_days = 5
    yesterday = datetime.today() - timedelta(days=1)
    cutoff = yesterday - timedelta(days=settings.timesheet_check_range)

    eligible_users_to_remind = User.objects.filter(
        is_active=True,
        slack_id__isnull=False,
        requires_timesheet_reminders=True
    )

    for user in eligible_users_to_remind:
        channel = user.slack_id
        if not channel:
            continue

        incomplete_time_entries = (
            TimeEntry.objects
            .filter(
                user_id=user.pk,
                ended_at__date__range=(cutoff, yesterday),
                signed_off=False
            )
            .values('id')[:1]
        )

        # If there's a single timesheet entry not signed off
        # just warn the user.
        if incomplete_time_entries:
            timesheet_reminder(
                user.slack_id, user.get_full_name(), settings.timesheet_check_range
            )
            continue

        # If the user has signed off timesheet entries, check
        # if there are 5 days' worth of them.
        completed_time_entries = (
            TimeEntry.objects
            .values('ended_at__date')
            .filter(
                user_id=user.pk,
                ended_at__date__range=(cutoff, yesterday),
                signed_off=True
            )
            .order_by('ended_at__date')
        ).distinct()

        finished_days = len(completed_time_entries)
        if finished_days >= working_week_days:
            continue

        timesheet_reminder(
            user.slack_id, user.get_full_name(), settings.timesheet_check_range
        )


def timesheet_reminder(channel, name, check_range):
    post_slack_message.schedule(
        args=({
            "channel": channel,
            "attachments": [
                {
                    "fallback": "Timesheet Reminder",
                    "color": "#ff4757",
                    "pretext": "Timesheet Reminder",
                    "title": "Your timesheet is incomplete",
                    "text": f"You haven't signed off all your timesheet entries for the past {check_range} days.",
                    "footer": f"<http://wip.accentdesign.co.uk/timesheets|WIP Timesheet - {name}> ",
                    "ts": datetime.now().timestamp()
                }
            ]
        },),
        delay=2
    )


@task(retries=3, retry_delay=10)
def post_slack_message(payload):
    settings = WIPSettings.load()
    requests.post(
        f'https://slack.com/api/chat.postMessage',
        json=payload,
        headers={'Authorization': f'Bearer {settings.slack_authentication_token}'})
