from django.utils.timezone import localtime

from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import TaskFile, Task
from wip.serializers import TaskFileSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(TaskFileSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(TaskFileSerializer.Meta.model, TaskFile)

    def test_fields(self):
        self.assertEqual(
            TaskFileSerializer.Meta.fields,
            [
                'id',
                'task',
                'name',
                'file',
                'size_mb',
                'uploaded_by',
                'uploaded_on'
            ]
        )

    def test_serialized_data(self):
        self.skipTest('')
        user = self.create_user()
        task = Task.objects.first()
        instance = TaskFile.objects.create(
            task=task,
            file=self.get_temporary_image(),
            uploaded_by=user
        )
        serializer = TaskFileSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'task': instance.task.pk,
                'name': instance.name,
                'file': instance.file.url,
                'size_mb': instance.size_mb,
                'uploaded_by': instance.uploaded_by.pk,
                'uploaded_on': localtime(instance.uploaded_on).isoformat()
            }
        )
