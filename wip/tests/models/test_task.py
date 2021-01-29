from datetime import timedelta

from django.db import models
from django.utils import timezone

from taggit.managers import TaggableManager

from authentication.models import User
from tests.test_case import AppTestCase
from wip.models import Job, Task, TaskStatus
from wip.models.task import TaskManager


class TestModel(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    # fields

    def test_title(self):
        field = Task._meta.get_field('title')
        self.assertModelField(field, models.CharField)
        self.assertEqual(field.max_length, 255)

    def test_description(self):
        field = Task._meta.get_field('description')
        self.assertModelField(field, models.TextField, null=True, blank=True)

    def test_current_status(self):
        field = Task._meta.get_field('current_status')
        self.assertModelField(field, models.TextField, null=True, blank=True)

    def test_created_at(self):
        field = Task._meta.get_field('created_at')
        self.assertModelField(field, models.DateTimeField, blank=True)
        self.assertTrue(field.auto_now_add)

    def test_created_by(self):
        field = Task._meta.get_field('created_by')
        self.assertModelPKField(
            field,
            User,
            on_delete=models.SET_NULL,
            null=True
        )

    def test_job(self):
        field = Task._meta.get_field('job')
        self.assertModelPKField(field, Job, on_delete=models.CASCADE, related_name='tasks')

    def test_status(self):
        field = Task._meta.get_field('status')
        self.assertModelPKField(field, TaskStatus, on_delete=models.PROTECT, related_name='tasks')

    def test_target_date(self):
        field = Task._meta.get_field('target_date')
        self.assertModelField(field, models.DateField, null=True, blank=True)

    def test_closed(self):
        field = Task._meta.get_field('closed')
        self.assertModelField(field, models.BooleanField)
        self.assertFalse(field.default)

    def test_closed_date(self):
        field = Task._meta.get_field('closed_date')
        self.assertModelField(field, models.DateTimeField, null=True, blank=True)
        self.assertFalse(field.editable)

    def test_not_chargeable(self):
        field = Task._meta.get_field('not_chargeable')
        self.assertModelField(field, models.BooleanField)
        self.assertFalse(field.default)

    def test_order(self):
        field = Task._meta.get_field('order')
        self.assertModelField(field, models.FloatField)
        self.assertEqual(field.default, 16384)

    def test_tags(self):
        field = Task._meta.get_field('tags')
        self.assertTrue(isinstance(field, TaggableManager))

    # manager
    def test_default_manager(self):
        self.assertTrue(isinstance(Task._default_manager, TaskManager))

    # meta

    def test_ordering(self):
        self.assertEqual(Task._meta.ordering, ['order'])

    # properties

    def test_str(self):
        self.assertEqual(str(Task(title='Foo')), 'Foo')

    def test_is_overdue(self):
        task = Task()
        self.assertFalse(task.is_overdue)

        task = Task(target_date=timezone.now().date())
        self.assertFalse(task.is_overdue)

        task = Task(target_date=timezone.now().date() - timedelta(days=1), closed=True)
        self.assertFalse(task.is_overdue)

        task = Task(target_date=timezone.now().date() - timedelta(days=1))
        self.assertTrue(task.is_overdue)
