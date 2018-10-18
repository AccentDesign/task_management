from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets

from wip.models import Client, ClientContact
from wip.serializers import ClientContactSerializer


class ClientContactFilter(FilterSet):
    client = filters.ModelChoiceFilter(field_name='client', queryset=Client.objects.all())


class ClientContactViewSet(viewsets.ModelViewSet):
    queryset = ClientContact.objects.all()
    serializer_class = ClientContactSerializer
    filter_class = ClientContactFilter
