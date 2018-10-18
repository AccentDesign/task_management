from rest_framework import serializers

from authentication.models import User


class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.ReadOnlyField(source='get_full_name')
    initials = serializers.ReadOnlyField(source='get_initials')

    class Meta:
        model = User
        fields = [
            'id',
            'full_name',
            'initials'
        ]
