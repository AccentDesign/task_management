from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets

from wip.models import Job, JobRecurringCost
from wip.serializers import JobRecurringCostSerializer


class JobRecurringCostFilter(FilterSet):
    job = filters.ModelChoiceFilter(field_name='job', queryset=Job.objects.all())


class JobRecurringCostViewSet(viewsets.ModelViewSet):
    queryset = JobRecurringCost.objects.all()
    serializer_class = JobRecurringCostSerializer
    filter_class = JobRecurringCostFilter
