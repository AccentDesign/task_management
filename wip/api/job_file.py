from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets

from wip.models import Job, JobFile
from wip.serializers import JobFileSerializer


class JobFileFilter(FilterSet):
    job = filters.ModelChoiceFilter(field_name='job', queryset=Job.objects.all())


class JobFileViewSet(viewsets.ModelViewSet):
    queryset = JobFile.objects.all()
    serializer_class = JobFileSerializer
    filter_class = JobFileFilter
