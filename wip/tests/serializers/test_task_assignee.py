from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import TaskAssignee
from wip.serializers import TaskAssigneeSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(TaskAssigneeSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(TaskAssigneeSerializer.Meta.model, TaskAssignee)

    def test_fields(self):
        self.assertEqual(
            TaskAssigneeSerializer.Meta.fields,
            [
                'id',
                'task',
                'user',
                'allocated_hours',
                'order'
            ]
        )

    def test_serialized_data(self):
        instance = TaskAssignee.objects.first()
        serializer = TaskAssigneeSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'task': instance.task.pk,
                'user': instance.user.pk,
                'allocated_hours': str(instance.allocated_hours),
                'order': instance.order
            }
        )
