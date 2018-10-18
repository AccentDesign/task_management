from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import TaskNote
from wip.serializers import TaskNoteSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(TaskNoteSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(TaskNoteSerializer.Meta.model, TaskNote)

    def test_fields(self):
        self.assertEqual(
            TaskNoteSerializer.Meta.fields,
            [
                'id',
                'task',
                'note',
                'user',
                'created_at',
                'updated_at'
            ]
        )

    def test_serialized_data(self):
        instance = TaskNote.objects.first()
        serializer = TaskNoteSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'task': instance.task.pk,
                'note': instance.note,
                'user': instance.user.pk,
                'created_at': instance.created_at.isoformat()[:-6] + 'Z',
                'updated_at': instance.updated_at.isoformat()[:-6] + 'Z'
            }
        )
