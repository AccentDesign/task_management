from django.urls import reverse

from tests.test_case import AppTestCase


class ViewTests(AppTestCase):

    def setUp(self):
        self.url = reverse('home')

    def test_login_required(self):
        expected_url = '{}?next={}'.format(reverse('login'), self.url)
        response = self.client.get(self.url)
        self.assertRedirects(response, expected_url, 302, 200)

    def test_login_grants_access__but_redirects_to_taskboard(self):
        expected_url = reverse('wip:taskboard')
        user = self.create_user()
        self.client.force_login(user)
        response = self.client.get(self.url)
        self.assertRedirects(response, expected_url, 301, 200)
