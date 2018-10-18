from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import ClientContact
from wip.serializers import ClientContactSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(ClientContactSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(ClientContactSerializer.Meta.model, ClientContact)

    def test_fields(self):
        self.assertEqual(
            ClientContactSerializer.Meta.fields,
            [
                'id',
                'client',
                'first_name',
                'last_name',
                'phone_number',
                'mobile_number',
                'email_address',
                'address',
                'position',
                'notes'
            ]
        )

    def test_serialized_data(self):
        instance = ClientContact.objects.first()
        serializer = ClientContactSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'client': instance.client.pk,
                'first_name': instance.first_name,
                'last_name': instance.last_name,
                'phone_number': instance.phone_number,
                'mobile_number': instance.mobile_number,
                'email_address': instance.email_address,
                'address': instance.address,
                'position': instance.position.pk,
                'notes': instance.notes
            }
        )
