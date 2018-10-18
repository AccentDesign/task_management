from django.conf import settings
from django.db import models


class TaskAssignee(models.Model):
    task = models.ForeignKey(
        'wip.Task',
        on_delete=models.CASCADE,
        related_name='assignees'
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='assigned_tasks'
    )
    allocated_hours = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )
    order = models.PositiveIntegerField(
        default=0
    )

    class Meta:
        ordering = ['order']
