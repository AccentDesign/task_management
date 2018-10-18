from django.db import models
from django.urls import reverse_lazy
from django.utils import timezone

from taggit.managers import TaggableManager

from wip.utils import seconds_to_decimal_hrs
from .time_entry import TimeEntry
from .task_assignee import TaskAssignee


class TaskManager(models.Manager):
    def get_queryset(self):
        """ Returns the base queryset with additional properties """

        qs = super().get_queryset()

        allocated_hours_subquery = (
            TaskAssignee.objects
            .filter(task_id=models.OuterRef('pk'))
            .values('task_id')
            .annotate(total=models.Sum('allocated_hours'))
            .order_by('task_id')
            .values('total')
        )

        time_spent_subquery = (
            TimeEntry.objects
            .filter(task_id=models.OuterRef('pk'))
            .values('task_id')
            .annotate(
                total=models.Sum(
                    models.ExpressionWrapper(
                        models.F('ended_at') - models.F('started_at'),
                        output_field=models.fields.DurationField()
                    )
                )
            )
            .order_by('task_id')
            .values('total')
        )

        qs = qs.annotate(
            qs_allocated_hours=models.Subquery(allocated_hours_subquery),
            qs_time_spent=models.Subquery(time_spent_subquery)
        )

        return qs


class Task(models.Model):
    title = models.CharField(
        max_length=255
    )
    description = models.TextField(
        null=True,
        blank=True
    )
    created_at = models.DateTimeField(
        auto_now_add=True
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
    not_chargeable = models.BooleanField(
        default=False
    )
    order = models.PositiveIntegerField(
        default=0
    )

    objects = TaskManager()
    tags = TaggableManager(blank=True)

    class Meta:
        base_manager_name = 'objects'
        ordering = ['order']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse_lazy('wip:task-detail', kwargs={'pk': self.pk})

    def get_update_url(self):
        return reverse_lazy('wip:task-update', kwargs={'pk': self.pk})

    @property
    def allocated_hours(self):
        """ returns the sum of the allocated hours for all assignees """

        if hasattr(self, 'qs_allocated_hours'):
            return getattr(self, 'qs_allocated_hours')
        return 0

    @property
    def time_spent_hours(self):
        """ returns the sum of the total time entries on the task """

        seconds = 0
        if hasattr(self, 'qs_time_spent') and getattr(self, 'qs_time_spent'):
            seconds = getattr(self, 'qs_time_spent').seconds
        return seconds_to_decimal_hrs(seconds)

    @property
    def is_overdue(self):
        """ if the task is not closed, flag if the target date has past """

        if self.target_date and not self.closed:
            return self.target_date < timezone.now().date()
        return False
