from django.urls import path

from channels.auth import AuthMiddlewareStack
from channels.routing import URLRouter, ProtocolTypeRouter

from app.consumers import ModelBindingConsumer


application = ProtocolTypeRouter({
    "websocket": AuthMiddlewareStack(
        URLRouter([
            path("data/stream/", ModelBindingConsumer.as_asgi()),
        ]),
    ),
})
