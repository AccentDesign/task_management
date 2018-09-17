from django.db import models

from wip.models import Relationship
from tests.test_case import AppTestCase


class ModelTests(AppTestCase):

    # fields

    def test_title(self):
        field = Relationship._meta.get_field('title')
        self.assertModelField(field, models.CharField)
        self.assertEqual(field.max_length, 50)
        self.assertTrue(field.unique)

    # meta

    def test_ordering(self):
        self.assertEqual(Relationship._meta.ordering, ['title'])

    # properties

    def test_str(self):
        self.assertEqual(str(Relationship(title='Foo')), 'Foo')
