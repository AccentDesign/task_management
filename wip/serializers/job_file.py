from rest_framework import serializers

from wip.models import JobFile


class JobFileSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobFile
        fields = [
            'id',
            'job',
            'file',
            'uploaded_by',
            'uploaded_on'
        ]
