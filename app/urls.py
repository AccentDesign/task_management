from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from rest_framework.documentation import include_docs_urls
from rest_framework.renderers import JSONOpenAPIRenderer
from rest_framework.schemas import get_schema_view

from app import routers
from app.views import Home
from authentication.urls import router as auth_router
from wip.urls import router as wip_router


# api
API_TITLE = 'WIP API'

# api schemas
schema_view = get_schema_view(
    title=API_TITLE,
    renderer_classes=[JSONOpenAPIRenderer]
)

# api router
router = routers.DefaultRouter()
router.extend(auth_router)
router.extend(wip_router)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((router.urls, 'api'))),
    path('api/docs/', include_docs_urls(title=API_TITLE)),
    path('api/schema.json', schema_view),
    path('auth/', include('authentication.urls')),
    path('reporting/', include('reporting.urls')),
]

if settings.DEBUG:  # pragma: no cover
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    urlpatterns += [
        path('__404/', TemplateView.as_view(template_name='404.html')),
        path('__500/', TemplateView.as_view(template_name='500.html')),
    ]

urlpatterns += [
    # catch all angular path and root app
    re_path(r'^(?P<path>.*)/$', Home.as_view()),
    path('', Home.as_view(), name='home')
]

handler404 = 'app.views.error404'
handler500 = 'app.views.error500'
