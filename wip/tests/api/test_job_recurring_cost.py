from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from tests.test_case import AppTestCase
from wip.api import JobRecurringCostViewSet
from wip.api.job_recurring_cost import JobRecurringCostFilter
from wip.models import JobRecurringCost
from wip.serializers import JobRecurringCostSerializer


class TestAPI(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def setUp(self):
        self.user = self.create_user()
        self.client = APIClient()
        self.client.force_login(self.user)
        self.base_url = reverse('api:jobrecurringcost-list')
        self._create_test_object()

    def _create_test_object(self):
        self.test_object = JobRecurringCost.objects.first()
        self.test_object_data = JobRecurringCostSerializer(instance=self.test_object).data
        self.test_object_url = self.base_url + str(self.test_object.pk) + '/'

    def test_filter_class(self):
        self.assertEqual(JobRecurringCostViewSet.filter_class, JobRecurringCostFilter)

    def test_list(self):
        response = self.client.get(self.base_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), [self.test_object_data])

    def test_post(self):
        del self.test_object_data['id']
        self.test_object_data['billing_interval'] = 5
        response = self.client.post(self.base_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.test_object_data['type_id'] = self.test_object_data.pop('type')
        self.test_object_data['payment_option_id'] = self.test_object_data.pop('payment_option')
        JobRecurringCost.objects.get(**self.test_object_data)

    def test_detail(self):
        response = self.client.get(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), self.test_object_data)

    def test_put(self):
        self.test_object_data['billing_interval'] = 5
        response = self.client.put(self.test_object_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.test_object_data['type_id'] = self.test_object_data.pop('type')
        self.test_object_data['payment_option_id'] = self.test_object_data.pop('payment_option')
        JobRecurringCost.objects.get(**self.test_object_data)

    def test_delete(self):
        response = self.client.delete(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        with self.assertRaises(JobRecurringCost.DoesNotExist):
            JobRecurringCost.objects.get(pk=self.test_object.pk)
