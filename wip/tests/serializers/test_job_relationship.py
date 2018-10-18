from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import JobRelationship
from wip.serializers import JobRelationshipSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(JobRelationshipSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(JobRelationshipSerializer.Meta.model, JobRelationship)

    def test_fields(self):
        self.assertEqual(
            JobRelationshipSerializer.Meta.fields,
            [
                'id',
                'job',
                'user',
                'relationship'
            ]
        )

    def test_serialized_data(self):
        instance = JobRelationship.objects.first()
        serializer = JobRelationshipSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'job': instance.job.pk,
                'user': instance.user.pk,
                'relationship': instance.relationship.pk
            }
        )
