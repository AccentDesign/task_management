from rest_framework import serializers

from wip.models import Relationship


class RelationshipSerializer(serializers.ModelSerializer):

    class Meta:
        model = Relationship
        fields = [
            'id',
            'title'
        ]
