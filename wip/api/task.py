from django.db.models import Q

from django_filters import CharFilter, FilterSet, ModelChoiceFilter
from rest_framework import viewsets

from authentication.models import User
from wip.models import Task
from wip.serializers import TaskSerializer


class TaskFilter(FilterSet):
    search = CharFilter(method='search_filter')
    user = ModelChoiceFilter(field_name='assignees__user', queryset=User.objects.all())

    def search_filter(self, queryset, name, value):
        all_filters = Q()
        for term in value.split():
            or_lookup = (
                Q(title__icontains=term) |
                Q(job__title__icontains=term) |
                Q(job__client__name__icontains=term)
            )
            all_filters = all_filters & or_lookup
        return queryset.filter(all_filters).distinct()


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.filter(closed=False)
    serializer_class = TaskSerializer
    filter_class = TaskFilter
