from rest_framework import serializers

from wip.models import JobType


class JobTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobType
        fields = [
            'id',
            'title'
        ]
