from django.conf import settings as base_settings

from storages.backends.s3boto3 import S3Boto3Storage


# Storage classes - see http://snippets.accentdesign.co.uk/pages/django-s3-private-and-public-images/


class S3PrivateStorage(S3Boto3Storage):
    """
    A storage class that forcefully removes the custom domain

    This will force the class to revert back to the default s3 way of generating the urls
    with the querystring auth.

    default_acl='private' will mark the files as private when saving meaning
    the they will return an AccessDenied without the querystring auth.
    """

    def __init__(self, **settings):
        settings.update({
            'custom_domain': None,
            'default_acl': 'private',
        })
        super().__init__(**settings)


class S3PublicStorage(S3Boto3Storage):
    """ Just subclass or use original class """

    def __init__(self, **settings):
        settings.update({
            'querystring_auth': False,
            'default_acl': 'public-read',
        })
        super().__init__(**settings)


class S3StaticStorage(S3Boto3Storage):
    """ Stores files with the path prefix STATICFILES_LOCATION """

    def __init__(self, **settings):
        settings.update({
            'querystring_auth': False,
            'location': base_settings.STATICFILES_LOCATION,
            'default_acl': 'public-read',
        })
        super().__init__(**settings)
