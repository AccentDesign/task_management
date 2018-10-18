from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import JobStatus
from wip.serializers import JobStatusSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(JobStatusSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(JobStatusSerializer.Meta.model, JobStatus)

    def test_fields(self):
        self.assertEqual(
            JobStatusSerializer.Meta.fields,
            [
                'id',
                'title',
                'allow_new_timesheet_entries',
                'order'
            ]
        )

    def test_serialized_data(self):
        instance = JobStatus.objects.first()
        serializer = JobStatusSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'title': instance.title,
                'allow_new_timesheet_entries': instance.allow_new_timesheet_entries,
                'order': instance.order
            }
        )
