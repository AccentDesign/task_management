from django.conf import settings
from django.db import models
from django.urls import reverse_lazy

from authentication.middleware.current_user import get_current_user


class TaskNote(models.Model):
    task = models.ForeignKey(
        'wip.Task',
        on_delete=models.CASCADE,
        related_name='notes'
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        editable=False,
        default=get_current_user
    )
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    updated_at = models.DateTimeField(
        auto_now=True
    )
    note = models.TextField()

    class Meta:
        ordering = ['-updated_at']

    def get_update_url(self):
        return reverse_lazy('wip:tasknote-update', kwargs={'pk': self.pk})
