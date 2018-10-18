from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import Task
from wip.serializers import TaskSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(TaskSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(TaskSerializer.Meta.model, Task)

    def test_fields(self):
        self.assertEqual(
            TaskSerializer.Meta.fields,
            [
                'id',
                'title',
                'description',
                'created_at',
                'job',
                'status',
                'target_date',
                'closed',
                'not_chargeable',
                'time_spent_hours',
                'allocated_hours',
                'is_overdue',
                'order',
                'tags'
            ]
        )

    def test_serialized_data(self):
        instance = Task.objects.first()
        serializer = TaskSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'title': instance.title,
                'description': instance.description,
                'created_at': instance.created_at.isoformat()[:-6] + 'Z',
                'job': instance.job.pk,
                'status': instance.status.pk,
                'target_date': instance.target_date.isoformat(),
                'closed': instance.closed,
                'not_chargeable': instance.not_chargeable,
                'time_spent_hours': str(instance.time_spent_hours),
                'allocated_hours': str(instance.allocated_hours),
                'is_overdue': instance.is_overdue,
                'order': instance.order,
                'tags': [str(t) for t in instance.tags.all()]
            }
        )
