from rest_framework import serializers

from wip.models import RecurringCostType


class RecurringCostTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = RecurringCostType
        fields = [
            'id',
            'title'
        ]
