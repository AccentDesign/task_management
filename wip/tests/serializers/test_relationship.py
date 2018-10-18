from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import Relationship
from wip.serializers import RelationshipSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(RelationshipSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(RelationshipSerializer.Meta.model, Relationship)

    def test_fields(self):
        self.assertEqual(
            RelationshipSerializer.Meta.fields,
            [
                'id',
                'title'
            ]
        )

    def test_serialized_data(self):
        instance = Relationship.objects.first()
        serializer = RelationshipSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'title': instance.title
            }
        )
