from rest_framework import serializers

from tests.test_case import AppTestCase
from authentication.models import User
from authentication.serializers import UserSerializer


class TestSerializer(AppTestCase):

    def test_subclass(self):
        self.assertTrue(issubclass(UserSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(UserSerializer.Meta.model, User)

    def test_fields(self):
        self.assertEqual(
            UserSerializer.Meta.fields,
            [
                'id',
                'full_name',
                'initials'
            ]
        )

    def test_serialized_data(self):
        instance = self.create_user()
        serializer = UserSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'full_name': instance.get_full_name(),
                'initials': instance.get_initials()
            }
        )
