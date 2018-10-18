from rest_framework import serializers

from wip.models import ClientContact


class ClientContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = ClientContact
        fields = [
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
