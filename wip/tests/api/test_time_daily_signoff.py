import datetime

from django.urls import reverse

from rest_framework import status
from rest_framework.test import APIClient

from tests.test_case import AppTestCase
from wip.api import TimeDailySignoffViewSet
from wip.api.time_daily_signoff import TimeDailySignoffFilter
from wip.models import TimeDailySignoff
from wip.serializers import TimeDailySignoffSerializer


class TestAPI(AppTestCase):

    def setUp(self):
        self.user = self.create_user()
        self.client = APIClient()
        self.client.force_login(self.user)
        self.base_url = reverse('api:timedailysignoff-list')
        self._create_test_object()

    def _create_test_object(self):
        self.test_object = TimeDailySignoff.objects.create(
            date=datetime.date(2018, 1, 1),
            user=self.user,
            completed=True
        )
        self.test_object_data = TimeDailySignoffSerializer(instance=self.test_object).data
        self.test_object_url = self.base_url + str(self.test_object.pk) + '/'

    def test_filter_class(self):
        self.assertEqual(TimeDailySignoffViewSet.filter_class, TimeDailySignoffFilter)

    def test_list(self):
        response = self.client.get(self.base_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), [self.test_object_data])

    def test_post(self):
        del self.test_object_data['id']
        self.test_object_data['date'] = datetime.date(2018, 1, 2)
        response = self.client.post(self.base_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        TimeDailySignoff.objects.get(**self.test_object_data)

    def test_post__will_also_update_for_same_user_and_date_combination(self):
        del self.test_object_data['id']
        self.test_object_data['completed'] = False
        response = self.client.post(self.base_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        TimeDailySignoff.objects.get(pk=self.test_object.pk, **self.test_object_data)

    def test_detail(self):
        response = self.client.get(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), self.test_object_data)

    def test_put(self):
        self.test_object_data['completed'] = False
        response = self.client.put(self.test_object_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        TimeDailySignoff.objects.get(**self.test_object_data)

    def test_put__validates_unique_correctly(self):
        TimeDailySignoff.objects.create(date=datetime.date(2018, 1, 2), user=self.user)
        self.test_object_data['date'] = datetime.date(2018, 1, 2)
        response = self.client.put(self.test_object_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_delete(self):
        response = self.client.delete(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        with self.assertRaises(TimeDailySignoff.DoesNotExist):
            TimeDailySignoff.objects.get(pk=self.test_object.pk)
