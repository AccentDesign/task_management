from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import Position
from wip.serializers import PositionSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(PositionSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(PositionSerializer.Meta.model, Position)

    def test_fields(self):
        self.assertEqual(
            PositionSerializer.Meta.fields,
            [
                'id',
                'title'
            ]
        )

    def test_serialized_data(self):
        instance = Position.objects.first()
        serializer = PositionSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'title': instance.title
            }
        )
