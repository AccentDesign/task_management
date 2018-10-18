from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import RecurringCostType
from wip.serializers import RecurringCostTypeSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(RecurringCostTypeSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(RecurringCostTypeSerializer.Meta.model, RecurringCostType)

    def test_fields(self):
        self.assertEqual(
            RecurringCostTypeSerializer.Meta.fields,
            [
                'id',
                'title'
            ]
        )

    def test_serialized_data(self):
        instance = RecurringCostType.objects.first()
        serializer = RecurringCostTypeSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'title': instance.title
            }
        )
