from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.serializers import MakeCallSerializer


class TestSerializer(AppTestCase):

    def test_subclass(self):
        self.assertTrue(issubclass(MakeCallSerializer, serializers.Serializer))
