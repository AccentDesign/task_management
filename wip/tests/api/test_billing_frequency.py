from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from tests.test_case import AppTestCase
from wip.models import JobRecurringCost


class TestAPI(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def setUp(self):
        self.user = self.create_user()
        self.client = APIClient()
        self.client.force_login(self.user)
        self.base_url = reverse('api:billingfrequency-list')

    def test_list(self):
        choices = JobRecurringCost._meta.get_field('billing_frequency').choices
        data = [{'id': c[0], 'title': c[1]} for c in choices]
        sorted_data = sorted(data, key=lambda d: d['id'])
        response = self.client.get(self.base_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), sorted_data)
