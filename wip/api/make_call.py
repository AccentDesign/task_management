import coreapi
import coreschema
import requests

from django.conf import settings
from django.utils.translation import ugettext_lazy as _

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.schemas import ManualSchema

from wip.serializers import MakeCallSerializer


class MakeCallViewSet(viewsets.ViewSet):
    schema = ManualSchema(
        fields=[
            coreapi.Field(
                'telephone_number',
                required=True,
                location='form',
                schema=coreschema.String()
            ),
        ],
        description='Make a call using the gradwell api.'
    )
    serializer_class = MakeCallSerializer
    error_messages = {
        'api_error': _('Something went wrong'),
        'missing_token': _('You are missing your gradwell details')
    }
    success_message = _('We are calling you now on ext {}')

    def make_call(self, serializer):
        token = self.request.user.gradwell_token
        ext = self.request.user.gradwell_extension
        telephone_number = serializer.validated_data['telephone_number'].replace(' ', '')

        if token and ext:
            url = settings.GRADWELL_API_URL.format(token, ext, telephone_number)
            response = requests.post(url, verify=False)
            if response.status_code == 200:
                data = {'status': 'ok', 'message': self.success_message.format(ext)}
                return Response(data, status=status.HTTP_200_OK)
            else:
                data = {'status': 'error', 'message': self.error_messages['api_error']}
                return Response(data, status=status.HTTP_400_BAD_REQUEST)
        else:
            data = {'status': 'error', 'message': self.error_messages['missing_token']}
            return Response(data, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def call(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return self.make_call(serializer)
