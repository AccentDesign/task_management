from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets

from wip.models import JobType
from wip.serializers import JobTypeSerializer


class JobTypeFilter(FilterSet):
    pass


class JobTypeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = JobType.objects.all()
    serializer_class = JobTypeSerializer
    filter_class = JobTypeFilter
