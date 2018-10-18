from rest_framework import serializers

from wip.models import TaskAssignee


class TaskAssigneeSerializer(serializers.ModelSerializer):

    class Meta:
        model = TaskAssignee
        fields = [
            'id',
            'task',
            'user',
            'allocated_hours',
            'order'
        ]
