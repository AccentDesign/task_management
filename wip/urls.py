from django.urls import path

from app import routers
from wip import api, views


# API
router = routers.DefaultRouter()
router.register(r'billing-frequencies', api.BillingFrequencyViewSet, base_name='billingfrequency')
router.register(r'clients', api.ClientViewSet)
router.register(r'client-contacts', api.ClientContactViewSet)
router.register(r'jobs', api.JobViewSet)
router.register(r'job-files', api.JobFileViewSet)
router.register(r'job-notes', api.JobNoteViewSet)
router.register(r'job-recurring-costs', api.JobRecurringCostViewSet)
router.register(r'job-relationships', api.JobRelationshipViewSet)
router.register(r'job-statuses', api.JobStatusViewSet)
router.register(r'job-types', api.JobTypeViewSet)
router.register(r'make-call', api.MakeCallViewSet, base_name='makecall')
router.register(r'payment-options', api.PaymentOptionViewSet)
router.register(r'positions', api.PositionViewSet)
router.register(r'recurring-cost-type', api.RecurringCostTypeViewSet)
router.register(r'relationships', api.RelationshipViewSet)
router.register(r'tasks', api.TaskViewSet)
router.register(r'task-assignees', api.TaskAssigneeViewSet)
router.register(r'task-notes', api.TaskNoteViewSet)
router.register(r'task-statuses', api.TaskStatusViewSet)
router.register(r'users', api.UserViewSet)
router.register(r'time-daily-signoff', api.TimeDailySignoffViewSet)
router.register(r'time-entries', api.TimeEntryViewSet)

# DESKTOP
app_name = 'wip'
urlpatterns = [
    path('clients/', views.ClientList.as_view(), name='client-list'),
    path('clients/<int:pk>/', views.ClientDetail.as_view(), name='client-detail'),
    path('clients/create/', views.ClientCreate.as_view(), name='client-create'),
    path('clients/<int:pk>/update/', views.ClientUpdate.as_view(), name='client-update'),
    path('clients/<int:pk>/delete/', views.ClientDelete.as_view(), name='client-delete'),
    path('clients/<int:pk>/contacts/create/', views.ClientContactCreate.as_view(), name='clientcontact-create'),
    path('clients/<int:pk>/jobs/create/', views.JobCreate.as_view(), name='job-create'),
    path('client-contacts/<int:pk>/update/', views.ClientContactUpdate.as_view(), name='clientcontact-update'),
    path('client-contacts/<int:pk>/delete/', views.ClientContactDelete.as_view(), name='clientcontact-delete'),
    path('jobs/<int:pk>/', views.JobDetail.as_view(), name='job-detail'),
    path('jobs/<int:pk>/update/', views.JobUpdate.as_view(), name='job-update'),
    path('jobs/<int:pk>/delete/', views.JobDelete.as_view(), name='job-delete'),
    path('jobs/<int:pk>/files/upload/', views.JobFileUpload.as_view(), name='jobfile-upload'),
    path('jobs/<int:pk>/notes/create/', views.JobNoteCreate.as_view(), name='jobnote-create'),
    path('jobs/<int:pk>/tasks/create/', views.TaskCreate.as_view(), name='task-create'),
    path('jobs/<int:pk>/recurring-costs/update/',
         views.JobRecurringCostUpdate.as_view(),
         name='jobrecurringcost-update'),
    path('jobs/<int:pk>/relationships/update/', views.JobRelationshipUpdate.as_view(), name='jobrelationship-update'),
    path('job-files/<int:pk>/delete/', views.JobFileDelete.as_view(), name='jobfile-delete'),
    path('job-notes/<int:pk>/update/', views.JobNoteUpdate.as_view(), name='jobnote-update'),
    path('job-notes/<int:pk>/delete/', views.JobNoteDelete.as_view(), name='jobnote-delete'),
    path('tags/autocomplete/', views.TagsAutocomplete.as_view(), name='tag-autocomplete'),
    path('tasks/<int:pk>/', views.TaskDetail.as_view(), name='task-detail'),
    path('tasks/<int:pk>/update/', views.TaskUpdate.as_view(), name='task-update'),
    path('tasks/<int:pk>/delete/', views.TaskDelete.as_view(), name='task-delete'),
    path('tasks/<int:pk>/assignees/update/', views.TaskAssigneeUpdate.as_view(), name='taskassignee-update'),
    path('tasks/<int:pk>/notes/create/', views.TaskNoteCreate.as_view(), name='tasknote-create'),
    path('task-notes/<int:pk>/update/', views.TaskNoteUpdate.as_view(), name='tasknote-update'),
    path('task-notes/<int:pk>/delete/', views.TaskNoteDelete.as_view(), name='tasknote-delete'),
    path('taskboard/', views.TaskBoard.as_view(), name='taskboard'),
    path('timesheet/', views.Timesheet.as_view(), name='timesheet'),
]
