from mock import Mock, patch
import requests

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from tests.test_case import AppTestCase


class TestView(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def setUp(self):
        self.user = self.create_user()
        self.client = APIClient()
        self.client.force_login(self.user)
        self.base_url = reverse('api:makecall-call')

    def test_post__missing_gradwell_token(self):
        data = {'telephone_number': '11111 111111'}
        response = self.client.post(self.base_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, {'status': 'error', 'message': 'You are missing your gradwell details'})

    @patch.object(requests, 'post')
    def test_post__valid_gradwell_response(self, mock_post):
        mock_response = Mock()
        mock_response.json.return_value = {"status": "ok"}
        mock_response.status_code = 200

        mock_post.return_value = mock_response

        self.user.gradwell_token = 'xxxxx'
        self.user.gradwell_extension = 12345
        self.user.save()

        response = self.client.post(self.base_url, {'telephone_number': '11111 111111'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {'status': 'ok', 'message': 'We are calling you now on ext 12345'})

    @patch.object(requests, 'post')
    def test_post__invalid_gradwell_response(self, mock_post):
        mock_response = Mock()
        mock_response.json.return_value = {"status": "poo"}
        mock_response.status_code = 400

        mock_post.return_value = mock_response

        self.user.gradwell_token = 'xxxxx'
        self.user.gradwell_extension = 12345
        self.user.save()

        response = self.client.post(self.base_url, {'telephone_number': '11111 111111'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, {'status': 'error', 'message': 'Something went wrong'})
