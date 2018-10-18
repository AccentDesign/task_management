from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets

from wip.models import PaymentOption
from wip.serializers import PaymentOptionSerializer


class PaymentOptionFilter(FilterSet):
    pass


class PaymentOptionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PaymentOption.objects.all()
    serializer_class = PaymentOptionSerializer
    filter_class = PaymentOptionFilter
