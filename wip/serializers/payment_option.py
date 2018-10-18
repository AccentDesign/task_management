from rest_framework import serializers

from wip.models import PaymentOption


class PaymentOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = PaymentOption
        fields = [
            'id',
            'title'
        ]
