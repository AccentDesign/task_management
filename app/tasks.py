from django.core.mail import EmailMessage


HOST = 'https://wip.accentdesign.co.uk'


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

    send_email(task, to, None, notify_job_relationships, notify_task_assignees)


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
