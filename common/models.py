from django.core.cache import cache
from django.db import models


class SingletonModel(models.Model):

    class Meta:
        abstract = True

    def set_cache(self):
        cache.set(self.__class__.__name__, self)

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)
        self.set_cache()

    def delete(self, *args, **kwargs):
        pass

    @classmethod
    def load(cls):
        if cache.get(cls.__name__) is None:
            obj, created = cls.objects.get_or_create(pk=1)
            if not created:
                obj.set_cache()
        return cache.get(cls.__name__)


class WIPSettings(SingletonModel):
    """ class for storing WIP settings """

    slack_authentication_token = models.CharField(
        max_length=255,
        help_text='Use the OAuth Access Token found in the Slack integration.'
    )
    timesheet_check_range = models.PositiveIntegerField(
        default=7,
        help_text='Specifies the number of days to check for missing past timesheet entries.'
    )

    class Meta:
        verbose_name_plural = 'WIP settings'
