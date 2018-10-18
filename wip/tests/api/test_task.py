from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from tests.test_case import AppTestCase
from wip.api import TaskViewSet
from wip.api.task import TaskFilter
from wip.models import Task
from wip.serializers import TaskSerializer


class TestAPI(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def setUp(self):
        self.user = self.create_user()
        self.client = APIClient()
        self.client.force_login(self.user)
        self.base_url = reverse('api:task-list')
        self._create_test_object()

    def _create_test_object(self):
        self.test_object = Task.objects.first()
        self.test_object_data = TaskSerializer(instance=self.test_object).data
        self.test_object_url = self.base_url + str(self.test_object.pk) + '/'

    def test_filter_class(self):
        self.assertEqual(TaskViewSet.filter_class, TaskFilter)

    def test_list(self):
        response = self.client.get(self.base_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), [self.test_object_data])

    def test_post(self):
        del self.test_object_data['id']
        del self.test_object_data['created_at']
        del self.test_object_data['time_spent_hours']
        del self.test_object_data['allocated_hours']
        del self.test_object_data['is_overdue']
        self.test_object_data['title'] = 'some title'
        self.test_object_data['tags'] = ['tag1']
        response = self.client.post(self.base_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.test_object_data['job_id'] = self.test_object_data.pop('job')
        del self.test_object_data['tags']  # delete tags as cannot get this way
        Task.objects.get(**self.test_object_data, tags__name='tag1')

    def test_detail(self):
        response = self.client.get(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), self.test_object_data)

    def test_put(self):
        del self.test_object_data['created_at']
        del self.test_object_data['time_spent_hours']
        del self.test_object_data['allocated_hours']
        del self.test_object_data['is_overdue']
        self.test_object_data['title'] = 'some title'
        self.test_object_data['tags'] = ['tag1']
        response = self.client.put(self.test_object_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.test_object_data['job_id'] = self.test_object_data.pop('job')
        del self.test_object_data['tags']  # delete tags as cannot get this way
        Task.objects.get(**self.test_object_data, tags__name='tag1')

    def test_delete(self):
        response = self.client.delete(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        with self.assertRaises(Task.DoesNotExist):
            Task.objects.get(pk=self.test_object.pk)
