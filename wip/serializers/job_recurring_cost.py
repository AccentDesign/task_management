from rest_framework import serializers

from wip.models import JobRecurringCost


class JobRecurringCostSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobRecurringCost
        fields = [
            'id',
            'job',
            'type',
            'last_invoiced_date',
            'billing_interval',
            'billing_frequency',
            'payment_option'
        ]
