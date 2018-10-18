from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets

from wip.models import Position
from wip.serializers import PositionSerializer


class PositionFilter(FilterSet):
    pass


class PositionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Position.objects.all()
    serializer_class = PositionSerializer
    filter_class = PositionFilter
