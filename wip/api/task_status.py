from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets

from wip.models import TaskStatus
from wip.serializers import TaskStatusSerializer


class TaskStatusFilter(FilterSet):
    pass


class TaskStatusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TaskStatus.objects.all()
    serializer_class = TaskStatusSerializer
    filter_class = TaskStatusFilter
