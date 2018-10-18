from rest_framework import serializers

from wip.models import JobRelationship


class JobRelationshipSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobRelationship
        fields = [
            'id',
            'job',
            'user',
            'relationship'
        ]
