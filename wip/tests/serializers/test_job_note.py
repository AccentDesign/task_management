from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import JobNote
from wip.serializers import JobNoteSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(JobNoteSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(JobNoteSerializer.Meta.model, JobNote)

    def test_fields(self):
        self.assertEqual(
            JobNoteSerializer.Meta.fields,
            [
                'id',
                'job',
                'note',
                'user',
                'created_at',
                'updated_at'
            ]
        )

    def test_serialized_data(self):
        instance = JobNote.objects.first()
        serializer = JobNoteSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'job': instance.job.pk,
                'note': instance.note,
                'user': instance.user.pk,
                'created_at': instance.created_at.isoformat()[:-6] + 'Z',
                'updated_at': instance.updated_at.isoformat()[:-6] + 'Z'
            }
        )
