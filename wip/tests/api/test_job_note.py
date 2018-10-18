from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from tests.test_case import AppTestCase
from wip.api import JobNoteViewSet
from wip.api.job_note import JobNoteFilter
from wip.models import JobNote
from wip.serializers import JobNoteSerializer


class TestAPI(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def setUp(self):
        self.user = self.create_user()
        self.client = APIClient()
        self.client.force_login(self.user)
        self.base_url = reverse('api:jobnote-list')
        self._create_test_object()

    def _create_test_object(self):
        self.test_object = JobNote.objects.first()
        self.test_object_data = JobNoteSerializer(instance=self.test_object).data
        self.test_object_url = self.base_url + str(self.test_object.pk) + '/'

    def test_filter_class(self):
        self.assertEqual(JobNoteViewSet.filter_class, JobNoteFilter)

    def test_list(self):
        response = self.client.get(self.base_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), [self.test_object_data])

    def test_post(self):
        del self.test_object_data['id']
        del self.test_object_data['user']
        del self.test_object_data['created_at']
        del self.test_object_data['updated_at']
        self.test_object_data['note'] = 'some note'
        response = self.client.post(self.base_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.test_object_data['job_id'] = self.test_object_data.pop('job')
        JobNote.objects.get(**self.test_object_data)

    def test_detail(self):
        response = self.client.get(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), self.test_object_data)

    def test_put(self):
        self.test_object_data['note'] = 'some edited note'
        del self.test_object_data['user']
        del self.test_object_data['created_at']
        del self.test_object_data['updated_at']
        response = self.client.put(self.test_object_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.test_object_data['job_id'] = self.test_object_data.pop('job')
        JobNote.objects.get(**self.test_object_data)

    def test_delete(self):
        response = self.client.delete(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        with self.assertRaises(JobNote.DoesNotExist):
            JobNote.objects.get(pk=self.test_object.pk)
