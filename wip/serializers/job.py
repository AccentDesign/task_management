from rest_framework import serializers

from wip.models import Job, Task


class JobSerializer(serializers.ModelSerializer):
    allocated_hours = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
        read_only=True
    )
    time_spent_hours = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
        read_only=True
    )

    class Meta:
        model = Job
        fields = [
            'id',
            'title',
            'description',
            'created_at',
            'client',
            'type',
            'estimated_hours',
            'colour',
            'status',
            'billed_to',
            'allocated_hours',
            'time_spent_hours'
        ]


class JobTaskSortSerializer(serializers.ModelSerializer):
    tasks = serializers.PrimaryKeyRelatedField(
        queryset=Task.objects.all(),
        allow_empty=False,
        many=True
    )

    class Meta:
        model = Job
        fields = [
            'tasks'
        ]
