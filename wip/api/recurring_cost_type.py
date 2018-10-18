from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets

from wip.models import RecurringCostType
from wip.serializers import RecurringCostTypeSerializer


class RecurringCostTypeFilter(FilterSet):
    pass


class RecurringCostTypeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = RecurringCostType.objects.all()
    serializer_class = RecurringCostTypeSerializer
    filter_class = RecurringCostTypeFilter
