from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view

from app import routers
from app.views import Home
from authentication.urls import router as auth_router
from wip.urls import router as wip_router


# api
API_TITLE = 'WIP API'

# api schemas
schema_view = get_schema_view(title=API_TITLE)

# api router
router = routers.DefaultRouter()
router.extend(auth_router)
router.extend(wip_router)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((router.urls, 'api'))),
    path('api/docs/', include_docs_urls(title=API_TITLE)),
    path('auth/', include('authentication.urls')),
    path('wip/', include('wip.urls')),
    path('', Home.as_view(), name='home')
]

if settings.DEBUG:  # pragma: no cover
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    urlpatterns += [
        path('__404/', TemplateView.as_view(template_name='404.html')),
        path('__500/', TemplateView.as_view(template_name='500.html')),
    ]

    import debug_toolbar

    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]

handler404 = 'app.views.error404'
handler500 = 'app.views.error500'
