from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import TaskStatus
from wip.serializers import TaskStatusSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(TaskStatusSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(TaskStatusSerializer.Meta.model, TaskStatus)

    def test_fields(self):
        self.assertEqual(
            TaskStatusSerializer.Meta.fields,
            [
                'id',
                'title',
                'order'
            ]
        )

    def test_serialized_data(self):
        instance = TaskStatus.objects.first()
        serializer = TaskStatusSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'title': instance.title,
                'order': instance.order
            }
        )
