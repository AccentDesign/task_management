from rest_framework import viewsets
from rest_framework.response import Response

from wip.models import JobRecurringCost


class BillingFrequencyViewSet(viewsets.ViewSet):
    """
    View to list all billing frequencies in the system.
    """
    def list(self, request, *args, **kwargs):
        choices = JobRecurringCost._meta.get_field('billing_frequency').choices
        data = [{'id': c[0], 'title': c[1]} for c in choices]
        sorted_data = sorted(data, key=lambda d: d['id'])
        return Response(sorted_data)
