from rest_framework import serializers

from wip.models import TaskAssignee


class UserTaskAssigneeSortSerializer(serializers.ModelSerializer):
    assigned_tasks = serializers.PrimaryKeyRelatedField(
        queryset=TaskAssignee.objects.all(),
        allow_empty=False,
        many=True
    )

    class Meta:
        model = TaskAssignee
        fields = [
            'assigned_tasks'
        ]
