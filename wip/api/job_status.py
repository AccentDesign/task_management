from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets

from wip.models import JobStatus
from wip.serializers import JobStatusSerializer


class JobStatusFilter(FilterSet):
    pass


class JobStatusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = JobStatus.objects.all()
    serializer_class = JobStatusSerializer
    filter_class = JobStatusFilter
