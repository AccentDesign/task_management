from django_filters import FilterSet
from rest_framework import viewsets

from wip.models import Job
from wip.serializers import JobSerializer


class JobFilter(FilterSet):
    pass


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    filter_class = JobFilter
