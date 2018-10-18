from django.utils.timezone import localtime

from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import JobFile, Job
from wip.serializers import JobFileSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(JobFileSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(JobFileSerializer.Meta.model, JobFile)

    def test_fields(self):
        self.assertEqual(
            JobFileSerializer.Meta.fields,
            [
                'id',
                'job',
                'file',
                'uploaded_by',
                'uploaded_on'
            ]
        )

    def test_serialized_data(self):
        user = self.create_user()
        job = Job.objects.first()
        instance = JobFile.objects.create(
            job=job,
            file=self.get_temporary_image(),
            uploaded_by=user
        )
        serializer = JobFileSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'job': instance.job.pk,
                'file': instance.file.url,
                'uploaded_by': instance.uploaded_by.pk,
                'uploaded_on': localtime(instance.uploaded_on).isoformat()
            }
        )
