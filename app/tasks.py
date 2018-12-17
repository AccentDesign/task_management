from django.core.mail import EmailMessage
from django.db import models

from huey import crontab
from huey.contrib.djhuey import db_task, task


HOST = 'https://wip.accentdesign.co.uk'


@task(retries=3, retry_delay=60)
def send_email(subject, body, to, reply_to):
    """ Send an email. """

    email = EmailMessage(subject=subject, body=body, to=to, reply_to=reply_to)
    email.send()


@db_task()
def notify_status_change(task, to=None):
    """
    Email task status changes.
    The task status should be set to notify.
    An email can be passed in the override where its being sent to.
    """

    to_addresses = []
    if to:
        to_addresses.append(to)

    notify_job_relationships = task.status.notify_job_relationships
    notify_task_assignees = task.status.notify_task_assignees

    # if the task doesnt notify anyone quit early
    if not any([notify_job_relationships, notify_task_assignees]):
        return

    # setup the email content
    subject = f'WIP - Task "{task.status}" for "{task.job}"'
    url = f'{HOST}/clients/{task.job.client_id}/jobs/{task.job_id}?task={task.id}'
    body = f'Task "{task.status}" for "{task.job}".\n\n{task.title}\n\n{url}'

    # if to_addresses was not set find out who wants the email
    if not to_addresses:
        if notify_job_relationships:
            to_addresses += [r.user.email for r in task.job.relationships.filter(user__is_active=True)]
        if notify_task_assignees:
            to_addresses += [r.user.email for r in task.assignees.filter(user__is_active=True)]

    # make the to addresses unique
    to_addresses = list(set(to_addresses))

    send_email(subject, body, to_addresses, None)
