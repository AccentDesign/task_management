from rest_framework import serializers
from taggit_serializer import serializers as taggit_serializers

from wip.models import Task


class TaskSerializer(taggit_serializers.TaggitSerializer, serializers.ModelSerializer):
    tags = taggit_serializers.TagListSerializerField(
        required=False
    )
    time_spent_hours = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
        read_only=True
    )
    allocated_hours = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
        read_only=True
    )

    class Meta:
        model = Task
        fields = [
            'id',
            'title',
            'description',
            'created_at',
            'job',
            'status',
            'target_date',
            'closed',
            'not_chargeable',
            'time_spent_hours',
            'allocated_hours',
            'is_overdue',
            'order',
            'tags'
        ]
