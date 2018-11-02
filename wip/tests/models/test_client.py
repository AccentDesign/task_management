from django.core.validators import RegexValidator
from django.db import models

from tests.test_case import AppTestCase
from wip.fields import ColorField
from wip.models import Client


class ModelTests(AppTestCase):

    # manager

    def test_search(self):
        c1 = Client.objects.create(name='Foo', email_address='foo@mail.com')
        c2 = Client.objects.create(name='Some Client', website='http://some.com')

        search = Client.objects.search(query_args=[], empty_query_args_returns_none=False)
        self.assertEqual(search.count(), 2)

        search = Client.objects.search(query_args=[], empty_query_args_returns_none=True)
        self.assertEqual(search.count(), 0)

        search = Client.objects.search(query_args=['Foo'])
        self.assertEqual(search.count(), 1)
        self.assertEqual(search[0], c1)

        search = Client.objects.search(query_args=['.com'])
        self.assertEqual(search.count(), 2)

        search = Client.objects.search(query_args=['Client', '.com'])
        self.assertEqual(search.count(), 1)
        self.assertEqual(search[0], c2)

    # fields

    def test_name(self):
        field = Client._meta.get_field('name')
        self.assertModelField(field, models.CharField)
        self.assertEqual(field.max_length, 255)
        self.assertTrue(field.unique)

    def test_colour(self):
        field = Client._meta.get_field('colour')
        self.assertModelField(field, ColorField)

    def test_phone_number(self):
        field = Client._meta.get_field('phone_number')
        self.assertModelField(field, models.CharField, null=True, blank=True)
        self.assertEqual(field.max_length, 50)
        self.assertIn(RegexValidator('^[0-9 ]+$'), field.validators)

    def test_email_address(self):
        field = Client._meta.get_field('email_address')
        self.assertModelField(field, models.EmailField, null=True, blank=True)

    def test_website(self):
        field = Client._meta.get_field('website')
        self.assertModelField(field, models.URLField, null=True, blank=True)

    def test_address(self):
        field = Client._meta.get_field('address')
        self.assertModelField(field, models.TextField, null=True, blank=True)

    def test_notes(self):
        field = Client._meta.get_field('notes')
        self.assertModelField(field, models.TextField, null=True, blank=True)

    # meta

    def test_ordering(self):
        self.assertEqual(Client._meta.ordering, ['name'])

    # properties

    def test_str(self):
        self.assertEqual(str(Client(name='Foo')), 'Foo')
