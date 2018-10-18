from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets

from wip.models import Relationship
from wip.serializers import RelationshipSerializer


class RelationshipFilter(FilterSet):
    pass


class RelationshipViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Relationship.objects.all()
    serializer_class = RelationshipSerializer
    filter_class = RelationshipFilter
