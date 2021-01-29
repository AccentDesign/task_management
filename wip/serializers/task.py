from rest_framework import serializers
from taggit_serializer import serializers as taggit_serializers

from wip.models import Task


class TaskSerializer(taggit_serializers.TaggitSerializer, serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = [
            'id',
            'title',
            'description',
            'current_status',
            'created_at',
            'created_by',
            'job',
            'status',
            'target_date',
            'closed',
            'closed_date',
            'not_chargeable',
            'is_overdue',
            'order'
        ]
        read_only_fields = ('created_by',)

    def create(self, validated_data):
        validated_data['created_by'] = self.context['request'].user
        return super().create(validated_data)
