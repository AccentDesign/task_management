from django.core.validators import RegexValidator
from django.utils.translation import ugettext_lazy as _

from rest_framework import serializers
from rest_framework.fields import CharField


class TelephoneField(CharField):
    default_error_messages = {
        'invalid': _('Please enter a valid phone number (numbers and spaces only).')
    }

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        validator = RegexValidator('^[0-9 ]+$', message=self.error_messages['invalid'])
        self.validators.append(validator)


class MakeCallSerializer(serializers.Serializer):
    telephone_number = TelephoneField()

    def create(self, validated_data):
        pass  # just stub out

    def update(self, instance, validated_data):
        pass  # just stub out
