from django.urls import reverse
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APIClient

from tests.test_case import AppTestCase
from wip.api import TimeEntryViewSet
from wip.api.time_entry import TimeEntryFilter
from wip.models import Job, TimeEntry
from wip.serializers import TimeEntrySerializer


class TestAPI(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def setUp(self):
        self.user = self.create_user()
        self.client = APIClient()
        self.client.force_login(self.user)
        self.base_url = reverse('api:timeentry-list')
        self._create_test_object()

    def _create_test_object(self):
        job = Job.objects.first()
        self.test_object = TimeEntry.objects.create(
            task=job.tasks.first(),
            started_at=timezone.datetime(2018, 1, 1, 9, 0, 0),
            ended_at=timezone.datetime(2018, 1, 1, 9, 15, 0),
            user=self.user,
            comments='some comments'
        )
        self.test_object_data = TimeEntrySerializer(instance=self.test_object).data
        self.test_object_url = self.base_url + str(self.test_object.pk) + '/'

    def test_filter_class(self):
        self.assertEqual(TimeEntryViewSet.filter_class, TimeEntryFilter)

    def test_list(self):
        response = self.client.get(self.base_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), [self.test_object_data])

    def test_post(self):
        del self.test_object_data['id']
        del self.test_object_data['title']
        del self.test_object_data['colour']
        del self.test_object_data['duration']
        self.test_object_data['comments'] = 'some edited comments'
        response = self.client.post(self.base_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        TimeEntry.objects.get(**self.test_object_data)

    def test_detail(self):
        response = self.client.get(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), self.test_object_data)

    def test_put(self):
        self.test_object_data['comments'] = 'some edited comments'
        response = self.client.put(self.test_object_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        del self.test_object_data['title']
        del self.test_object_data['colour']
        del self.test_object_data['duration']
        TimeEntry.objects.get(**self.test_object_data)

    def test_delete(self):
        response = self.client.delete(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        with self.assertRaises(TimeEntry.DoesNotExist):
            TimeEntry.objects.get(pk=self.test_object.pk)
