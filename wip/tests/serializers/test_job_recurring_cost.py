from rest_framework import serializers

from tests.test_case import AppTestCase
from wip.models import JobRecurringCost
from wip.serializers import JobRecurringCostSerializer


class TestSerializer(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def test_subclass(self):
        self.assertTrue(issubclass(JobRecurringCostSerializer, serializers.ModelSerializer))

    def test_model(self):
        self.assertEqual(JobRecurringCostSerializer.Meta.model, JobRecurringCost)

    def test_fields(self):
        self.assertEqual(
            JobRecurringCostSerializer.Meta.fields,
            [
                'id',
                'job',
                'type',
                'last_invoiced_date',
                'billing_interval',
                'billing_frequency',
                'payment_option'
            ]
        )

    def test_serialized_data(self):
        instance = JobRecurringCost.objects.first()
        serializer = JobRecurringCostSerializer(instance=instance)
        self.assertEqual(
            serializer.data,
            {
                'id': instance.pk,
                'job': instance.job.pk,
                'type': instance.type.pk,
                'last_invoiced_date': instance.last_invoiced_date.isoformat(),
                'billing_interval': instance.billing_interval,
                'billing_frequency': instance.billing_frequency,
                'payment_option': instance.payment_option.pk
            }
        )
