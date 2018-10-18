from rest_framework import serializers

from wip.models import Position


class PositionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Position
        fields = [
            'id',
            'title'
        ]
