from django.urls import reverse

from tests.test_case import AppTestCase
from wip.models import Job, JobFile


class TestView(AppTestCase):
    fixtures = ['wip/tests/fixtures/test.yaml']

    def setUp(self):
        self.job = Job.objects.first()
        self.url = reverse('wip:jobfile-upload', kwargs={'pk': self.job.pk})
        self.user = self.create_user()

    def test_login_required(self):
        response = self.client.get(self.url)
        expected_url = '{}?next={}'.format(reverse('login'), self.url)
        self.assertRedirects(response, expected_url, 302, 200)

    def test_login_grants_access_but_no_get(self):
        self.client.force_login(self.user)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 405)

    def test_can_upload(self):
        self.client.force_login(self.user)

        data = {
            'file': self.get_temporary_image()
        }
        response = self.client.post(self.url, data)

        # was created
        file = JobFile.objects.get(job=self.job)

        # ensure correct response
        response_dict = {
            'pk': file.pk,
            'name': str(file),
            'url': file.file.url,
            'size_mb': file.size_mb
        }

        self.assertJSONEqual(response.content, response_dict)