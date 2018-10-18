from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets

from wip.models import Task, TaskAssignee
from wip.serializers import TaskAssigneeSerializer


class TaskAssigneeFilter(FilterSet):
    task = filters.ModelChoiceFilter(field_name='task', queryset=Task.objects.all())


class TaskAssigneeViewSet(viewsets.ModelViewSet):
    queryset = TaskAssignee.objects.all()
    serializer_class = TaskAssigneeSerializer
    filter_class = TaskAssigneeFilter
