from django.urls import reverse

from tests.test_case import AppTestCase
from wip.models import Client


class TestView(AppTestCase):

    def setUp(self):
        self.url = reverse('wip:client-create')
        self.user = self.create_user()

    def test_login_required(self):
        response = self.client.get(self.url)
        expected_url = '{}?next={}'.format(reverse('login'), self.url)
        self.assertRedirects(response, expected_url, 302, 200)

    def test_logged_in_grants_access(self):
        self.client.force_login(self.user)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)

    def test_can_create(self):
        self.client.force_login(self.user)

        data = {
            'name': 'Test Client',
            'colour': '#000000'
        }
        response = self.client.post(self.url, data)

        # test redirected after
        self.assertRedirects(response, reverse('wip:client-list'), 302, 200)

        # test exists
        Client.objects.get(**data)

    def test_success_message_in_response(self):
        self.client.force_login(self.user)

        data = {
            'name': 'Test Client',
            'colour': '#000000'
        }
        content = self.client.post(self.url, data, follow=True).content

        self.assertIn('toastr["success"]("Created successfully", "Success");', str(content))
