from rest_framework import serializers

from wip.models import JobNote


class JobNoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobNote
        fields = [
            'id',
            'job',
            'note',
            'user',
            'created_at',
            'updated_at'
        ]
