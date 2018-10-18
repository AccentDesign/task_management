from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import JobType
from wip.serializers import JobTypeSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(JobTypeSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(JobTypeSerializer.Meta.model, JobType)

    def test_fields(self):
        self.assertEqual(
            JobTypeSerializer.Meta.fields,
            [
                'id',
                'title'
            ]
        )

    def test_serialized_data(self):
        instance = JobType.objects.first()
        serializer = JobTypeSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'title': instance.title
            }
        )
