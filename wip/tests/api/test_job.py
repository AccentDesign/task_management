from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from tests.test_case import AppTestCase
from wip.api import JobViewSet
from wip.api.job import JobFilter
from wip.models import Job, Task
from wip.serializers import JobSerializer


class TestAPI(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def setUp(self):
        self.user = self.create_user()
        self.client = APIClient()
        self.client.force_login(self.user)
        self.base_url = reverse('api:job-list')
        self._create_test_object()

    def _create_test_object(self):
        self.test_object = Job.objects.first()
        self.test_object_data = JobSerializer(instance=self.test_object).data
        self.test_object_url = self.base_url + str(self.test_object.pk) + '/'

    def test_filter_class(self):
        self.assertEqual(JobViewSet.filter_class, JobFilter)

    def test_list(self):
        response = self.client.get(self.base_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), [self.test_object_data])

    def test_post(self):
        del self.test_object_data['id']
        del self.test_object_data['created_at']
        del self.test_object_data['allocated_hours']
        del self.test_object_data['time_spent_hours']
        self.test_object_data['title'] = 'some title'
        response = self.client.post(self.base_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.test_object_data['client_id'] = self.test_object_data.pop('client')
        self.test_object_data['type_id'] = self.test_object_data.pop('type')
        self.test_object_data['status_id'] = self.test_object_data.pop('status')
        Job.objects.get(**self.test_object_data)

    def test_detail(self):
        response = self.client.get(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), self.test_object_data)

    def test_put(self):
        self.test_object_data['title'] = 'some title'
        del self.test_object_data['created_at']
        del self.test_object_data['allocated_hours']
        del self.test_object_data['time_spent_hours']
        response = self.client.put(self.test_object_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.test_object_data['client_id'] = self.test_object_data.pop('client')
        self.test_object_data['type_id'] = self.test_object_data.pop('type')
        self.test_object_data['status_id'] = self.test_object_data.pop('status')
        Job.objects.get(**self.test_object_data)

    def test_delete(self):
        response = self.client.delete(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        with self.assertRaises(Job.DoesNotExist):
            Job.objects.get(pk=self.test_object.pk)

    def test_sort(self):
        task1 = self.test_object.tasks.first()
        task2 = Task.objects.create(
            job=self.test_object,
            title='task 2',
            status_id=1,
            order=0
        )
        task3 = Task.objects.create(
            job=self.test_object,
            title='task 3',
            status_id=1,
            order=0
        )

        data = {'tasks': [task2.pk, task1.pk, task3.pk]}
        response = self.client.post(self.test_object_url + 'sort-tasks/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        task1.refresh_from_db()
        task2.refresh_from_db()
        task3.refresh_from_db()

        self.assertEqual(task1.order, 1)
        self.assertEqual(task2.order, 0)
        self.assertEqual(task3.order, 2)
