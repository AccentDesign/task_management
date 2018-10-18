import coreapi
import coreschema
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.schemas import ManualSchema

from authentication.models import User
from authentication.serializers import UserSerializer
from wip.models import TaskAssignee
from wip.serializers import UserTaskAssigneeSortSerializer


sort_schema = ManualSchema(
    fields=[
        coreapi.Field(
            "id",
            required=True,
            location="path",
            schema=coreschema.Integer(
                title="ID",
                description="User ID",
            )
        ),
        coreapi.Field(
            "assigned_tasks",
            required=True,
            location='form',
            schema=coreschema.Array(
                title="Task Assignee ID's",
                description="List of Task Assignee ID's",
                items=coreschema.Integer()
            )
        ),
    ],
    description="Sort assigned tasks for a user.",
)


class UserViewSet(viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=True, methods=['post'], url_path='sort-assigned-tasks', schema=sort_schema)
    def sort_assigned_tasks(self, request, pk=None):
        serializer = UserTaskAssigneeSortSerializer(data=request.data)
        if serializer.is_valid():
            for index, pk in enumerate(serializer.data['assigned_tasks']):
                obj = TaskAssignee.objects.get(pk=pk)
                obj.order = index
                obj.save()
            return Response({'status': 'ok'}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
