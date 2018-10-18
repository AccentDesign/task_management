import coreapi
import coreschema
from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.schemas import ManualSchema

from wip.models import Job, Task, Client
from wip.serializers import JobSerializer, JobTaskSortSerializer


class JobFilter(FilterSet):
    client = filters.ModelChoiceFilter(field_name='client', queryset=Client.objects.all())
    for_timesheet = filters.BooleanFilter(field_name='status__allow_new_timesheet_entries')


sort_schema = ManualSchema(
    fields=[
        coreapi.Field(
            "id",
            required=True,
            location="path",
            schema=coreschema.Integer(
                title="ID",
                description="Job ID",
            )
        ),
        coreapi.Field(
            "tasks",
            required=True,
            location='form',
            schema=coreschema.Array(
                title="Task ID's",
                description="List of Task ID's",
                items=coreschema.Integer()
            )
        ),
    ],
    description="Sort tasks for a job.",
)


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    filter_class = JobFilter

    @action(detail=True, methods=['post'], url_path='sort-tasks', schema=sort_schema)
    def sort_tasks(self, request, pk=None):
        serializer = JobTaskSortSerializer(data=request.data)
        if serializer.is_valid():
            for index, pk in enumerate(serializer.data['tasks']):
                obj = Task.objects.get(pk=pk)
                obj.order = index
                obj.save()
            return Response({'status': 'ok'}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
