from os import environ
from os.path import join

from django.urls import reverse_lazy

from .helpers import BASE_DIR, huey_eager


# Security
SECRET_KEY = environ.get('SECRET_KEY')

DEBUG = False

ALLOWED_HOSTS = [] + environ.get('ALLOWED_HOSTS', '').split(',')


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'common',

    'app',
    'authentication',
    'reporting',
    'wip',

    'channels',
    'dal',
    'dal_select2',
    'django_filters',
    'huey.contrib.djhuey',
    'rest_framework',
    'reversion',
    'storages',
    'taggit',
    'taggit_serializer',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    'reversion.middleware.RevisionMiddleware',

    'authentication.middleware.current_user.CurrentUserMiddleware',
]

ROOT_URLCONF = 'app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [join(BASE_DIR, 'templates'), ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'app.wsgi.application'


# Database

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'HOST': environ.get('RDS_HOSTNAME'),
        'PORT': environ.get('RDS_PORT'),
        'NAME': environ.get('RDS_DB_NAME'),
        'USER': environ.get('RDS_USERNAME'),
        'PASSWORD': environ.get('RDS_PASSWORD'),
    }
}


# Email

DEFAULT_FROM_EMAIL = 'Wip <wip@accentdesign.co.uk>'
EMAIL_HOST = environ.get('EMAIL_HOST')
EMAIL_PORT = environ.get('EMAIL_PORT')
EMAIL_HOST_USER = environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = environ.get('EMAIL_HOST_PASSWORD')
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False


# Authentication

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

AUTH_USER_MODEL = 'authentication.User'

LOGIN_URL = reverse_lazy('login')
LOGIN_REDIRECT_URL = LOGOUT_REDIRECT_URL = '/'


# Internationalization

LANGUAGE_CODE = 'en'
LANGUAGES = [
    ('en', 'English'),
]

TIME_ZONE = 'Europe/London'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Channels

ASGI_APPLICATION = "app.routing.application"

CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [(environ.get('REDIS_HOST', 'localhost'), 6379)],
        },
    },
}


# Static files (CSS, JavaScript, Images)

STATICFILES_STORAGE = 'app.storages.S3StaticStorage'
STATICFILES_LOCATION = 'static'
STATICFILES_DIRS = [
    join(BASE_DIR, "static"),
]
STATIC_ROOT = join(BASE_DIR, "public/static")
STATIC_URL = "/static/"

MEDIA_ROOT = join(BASE_DIR, "public/media")
MEDIA_URL = "/media/"


# File Storage

DEFAULT_FILE_STORAGE = 'app.storages.S3PrivateStorage'
FILE_UPLOAD_MAX_MEMORY_SIZE = 5242880  # 5MB - Cloudflare limit on existing plan is 100MB
AWS_ACCESS_KEY_ID = environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = environ.get('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = environ.get('AWS_STORAGE_BUCKET_NAME')
AWS_S3_REGION_NAME = environ.get('AWS_S3_REGION_NAME')
AWS_S3_CUSTOM_DOMAIN = None  # Add for cloudfront etc
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}
AWS_QUERYSTRING_AUTH = True
AWS_QUERYSTRING_EXPIRE = 600  # 10 minutes
AWS_S3_FILE_OVERWRITE = False
AWS_IS_GZIPPED = True
AWS_AUTO_CREATE_BUCKET = True


# Rest framework

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
    ),
    'DEFAULT_METADATA_CLASS': 'rest_framework.metadata.SimpleMetadata',
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.MultiPartParser',
        'rest_framework.parsers.FileUploadParser',
    ),
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    )
}


# huey

HUEY = {
    'name': 'task-management',
    'result_store': True,
    'events': True,
    'store_none': False,
    'always_eager': huey_eager(),
    'store_errors': True,
    'blocking': False,
    'backend_class': 'huey.RedisHuey',
    'connection': {
        'host': environ.get('REDIS_HOST', 'localhost'),
        'port': 6379,
        'db': 0,
        'connection_pool': None,
        'read_timeout': 1,
        'max_errors': 1000,
        'url': None,
    },
    'consumer': {
        'workers': 1,
        'worker_type': 'thread',
        'initial_delay': 0.1,
        'backoff': 1.15,
        'max_delay': 10.0,
        'utc': True,
        'scheduler_interval': 1,
        'periodic': True,
        'check_worker_health': True,
        'health_check_interval': 1,
    },
}


# Gradwell

GRADWELL_API_URL = 'https://call-api.gradwell.com/0.9.3/call?auth={}&extension={}&destination={}'


# Sentry - if its installed and we have a dsn in the environment

try:
    if environ.get('SENTRY_DSN'):

        import sentry_sdk
        from sentry_sdk.integrations.django import DjangoIntegration

        sentry_sdk.init(dsn=environ.get('SENTRY_DSN'), integrations=[DjangoIntegration()])

except ImportError:
    pass
