from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from authentication.models import User
from tests.test_case import AppTestCase
from wip.models import Task, TaskAssignee


class TestAPI(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def setUp(self):
        self.user = User.objects.first()
        self.client = APIClient()
        self.client.force_login(self.user)

    def test_sort(self):
        task1 = self.user.assigned_tasks.first().task
        task2 = Task.objects.create(
            job=task1.job,
            title='task 2',
            status_id=1,
            order=0
        )
        task3 = Task.objects.create(
            job=task1.job,
            title='task 3',
            status_id=1,
            order=0
        )
        assigned_task1 = self.user.assigned_tasks.first()
        assigned_task2 = TaskAssignee.objects.create(
            task=task2,
            user=self.user,
            allocated_hours='10.00',
            order=0
        )
        assigned_task3 = TaskAssignee.objects.create(
            task=task3,
            user=self.user,
            allocated_hours='10.00',
            order=0
        )

        data = {'assigned_tasks': [assigned_task2.pk, assigned_task1.pk, assigned_task3.pk]}
        url = reverse('api:user-sort-assigned-tasks', kwargs={'pk': self.user.pk})
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        assigned_task1.refresh_from_db()
        assigned_task2.refresh_from_db()
        assigned_task3.refresh_from_db()

        self.assertEqual(assigned_task1.order, 1)
        self.assertEqual(assigned_task2.order, 0)
        self.assertEqual(assigned_task3.order, 2)
