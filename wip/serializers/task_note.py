from rest_framework import serializers

from wip.models import TaskNote


class TaskNoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = TaskNote
        fields = [
            'id',
            'task',
            'note',
            'user',
            'created_at',
            'updated_at'
        ]
