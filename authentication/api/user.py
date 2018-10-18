from django.shortcuts import get_object_or_404

from rest_framework import generics, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from authentication.models import User
from authentication.serializers import UserSerializer


class UserViewSet(viewsets.ViewSetMixin, generics.ListAPIView, generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False)
    def me(self, request, *args, **kwargs):
        self.object = get_object_or_404(User, pk=request.user.id)
        serializer = self.get_serializer(self.object)
        return Response(serializer.data)
