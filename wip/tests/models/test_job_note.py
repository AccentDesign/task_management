from django.db import models
from django.urls import reverse

from authentication.middleware.current_user import get_current_user
from authentication.models import User
from tests.test_case import AppTestCase
from wip.models import Job, JobNote


class ModelTests(AppTestCase):

    # fields

    def test_job(self):
        field = JobNote._meta.get_field('job')
        self.assertModelPKField(field, Job, on_delete=models.CASCADE)

    def test_user(self):
        field = JobNote._meta.get_field('user')
        self.assertModelPKField(field, User, on_delete=models.PROTECT)
        self.assertFalse(field.editable)
        self.assertEqual(field.default, get_current_user)

    def test_created_at(self):
        field = JobNote._meta.get_field('created_at')
        self.assertModelField(field, models.DateTimeField, blank=True)
        self.assertTrue(field.auto_now_add)

    def test_updated_at(self):
        field = JobNote._meta.get_field('updated_at')
        self.assertModelField(field, models.DateTimeField, blank=True)
        self.assertTrue(field.auto_now)

    def test_note(self):
        field = JobNote._meta.get_field('note')
        self.assertModelField(field, models.TextField)

    # meta

    def test_ordering(self):
        self.assertEqual(JobNote._meta.ordering, ['-updated_at'])

    # properties

    def test_get_update_url(self):
        obj = JobNote(pk=10)
        expected_url = reverse('wip:jobnote-update', kwargs={'pk': obj.pk})
        self.assertEqual(obj.get_update_url(), expected_url)
