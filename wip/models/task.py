from django.conf import settings
from django.db import models, transaction
from django.db.models.manager import BaseManager
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone

from taggit.managers import TaggableManager

from app.tasks import notify_status_change


class TaskQueryset(models.QuerySet):
    """ Custom queryset """

    def open(self):
        return self.filter(closed=False)

    def closed(self):
        return self.filter(closed=True)


class TaskManager(BaseManager.from_queryset(TaskQueryset)):
    """ Custom manager from queryset """

    pass


class Task(models.Model):
    title = models.CharField(
        max_length=255
    )
    description = models.TextField(
        null=True,
        blank=True
    )
    current_status = models.TextField(
        null=True,
        blank=True
    )
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True
    )
    job = models.ForeignKey(
        'wip.Job',
        on_delete=models.CASCADE,
        related_name='tasks'
    )
    status = models.ForeignKey(
        'wip.TaskStatus',
        on_delete=models.PROTECT,
        related_name='tasks'
    )
    target_date = models.DateField(
        null=True,
        blank=True
    )
    closed = models.BooleanField(
        default=False
    )
    closed_date = models.DateTimeField(
        null=True,
        blank=True,
        editable=False
    )
    not_chargeable = models.BooleanField(
        default=False
    )
    order = models.FloatField(
        default=16384
    )

    objects = TaskManager()
    tags = TaggableManager(blank=True)

    class Meta:
        ordering = ['order']

    __original_status = None

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # set initial data so we can check it after saving
        self.__original_status_id = self.status_id

    def __str__(self):
        return self.title

    def save(self, **kwargs):
        # update closed date
        if self.closed and not self.closed_date:
            self.closed_date = timezone.now()
        elif not self.closed:
            self.closed_date = None

        # save
        super().save(**kwargs)

        # check for the status changing to notify.
        if self.status_id != self.__original_status_id:
            notify_status_change(self)

        # reset the original data incase a second save is called
        self.__original_status_id = self.status_id

    @property
    def is_overdue(self):
        """ if the task is not closed, flag if the target date has past """

        if self.target_date and not self.closed:
            return self.target_date < timezone.now().date()
        return False


@receiver(post_save, sender=Task)
def add_timing(instance, **kwargs):
    def do():
        from wip.models import TaskTiming
        TaskTiming.objects.get_or_create(task=instance)

    transaction.on_commit(do)
