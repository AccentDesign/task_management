from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import PaymentOption
from wip.serializers import PaymentOptionSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(PaymentOptionSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(PaymentOptionSerializer.Meta.model, PaymentOption)

    def test_fields(self):
        self.assertEqual(
            PaymentOptionSerializer.Meta.fields,
            [
                'id',
                'title'
            ]
        )

    def test_serialized_data(self):
        instance = PaymentOption.objects.first()
        serializer = PaymentOptionSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'title': instance.title
            }
        )
