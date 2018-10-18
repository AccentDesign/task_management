from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from tests.test_case import AppTestCase
from wip.api import JobRelationshipViewSet
from wip.api.job_relationship import JobRelationshipFilter
from wip.models import JobRelationship
from wip.serializers import JobRelationshipSerializer


class TestAPI(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def setUp(self):
        self.user = self.create_user()
        self.client = APIClient()
        self.client.force_login(self.user)
        self.base_url = reverse('api:jobrelationship-list')
        self._create_test_object()

    def _create_test_object(self):
        self.test_object = JobRelationship.objects.first()
        self.test_object_data = JobRelationshipSerializer(instance=self.test_object).data
        self.test_object_url = self.base_url + str(self.test_object.pk) + '/'

    def test_filter_class(self):
        self.assertEqual(JobRelationshipViewSet.filter_class, JobRelationshipFilter)

    def test_list(self):
        response = self.client.get(self.base_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), [self.test_object_data])

    def test_post(self):
        del self.test_object_data['id']
        self.test_object_data['user'] = self.user.pk
        response = self.client.post(self.base_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.test_object_data['user_id'] = self.test_object_data.pop('user')
        self.test_object_data['relationship_id'] = self.test_object_data.pop('relationship')
        JobRelationship.objects.get(**self.test_object_data)

    def test_detail(self):
        response = self.client.get(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), self.test_object_data)

    def test_put(self):
        self.test_object_data['user'] = self.user.pk
        response = self.client.put(self.test_object_url, self.test_object_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.test_object_data['user_id'] = self.test_object_data.pop('user')
        self.test_object_data['relationship_id'] = self.test_object_data.pop('relationship')
        JobRelationship.objects.get(**self.test_object_data)

    def test_delete(self):
        response = self.client.delete(self.test_object_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        with self.assertRaises(JobRelationship.DoesNotExist):
            JobRelationship.objects.get(pk=self.test_object.pk)
