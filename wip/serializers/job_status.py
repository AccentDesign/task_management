from rest_framework import serializers

from wip.models import JobStatus


class JobStatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobStatus
        fields = [
            'id',
            'title',
            'allow_new_timesheet_entries',
            'order'
        ]
