from django.utils.timezone import localtime
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
                'current_status',
                'created_at',
                'created_by',
                'job',
                'status',
                'target_date',
                'closed',
                'closed_date',
                'not_chargeable',
                'is_overdue',
                'order'
            ]
        )

    def test_readonly_fields(self):
        self.assertEqual(
            TaskSerializer.Meta.read_only_fields,
            ('created_by',)
        )

    def test_serialized_data(self):
        self.skipTest('')
        instance = Task.objects.first()
        instance.closed = True
        instance.save()
        serializer = TaskSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'title': instance.title,
                'description': instance.description,
                'created_at': localtime(instance.created_at).isoformat(),
                'current_status': instance.current_status,
                'created_by': instance.created_by.pk,
                'job': instance.job.pk,
                'status': instance.status.pk,
                'target_date': instance.target_date.isoformat(),
                'closed': instance.closed,
                'closed_date': localtime(instance.closed_date).isoformat(),
                'not_chargeable': instance.not_chargeable,
                'is_overdue': instance.is_overdue,
                'order': instance.order
            }
        )
