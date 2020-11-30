from app import routers
from wip import api


# API
router = routers.DefaultRouter()
router.register(r'billing-frequencies', api.BillingFrequencyViewSet, basename='billingfrequency')
router.register(r'clients', api.ClientViewSet)
router.register(r'client-contacts', api.ClientContactViewSet)
router.register(r'client-contact-tags', api.ClientContactTagViewSet, basename='clientcontacttag')
router.register(r'jobs', api.JobViewSet)
router.register(r'job-files', api.JobFileViewSet)
router.register(r'job-notes', api.JobNoteViewSet)
router.register(r'job-recurring-costs', api.JobRecurringCostViewSet)
router.register(r'job-relationships', api.JobRelationshipViewSet)
router.register(r'job-statuses', api.JobStatusViewSet)
router.register(r'job-timings', api.JobTimingViewSet)
router.register(r'job-types', api.JobTypeViewSet)
router.register(r'make-call', api.MakeCallViewSet, basename='makecall')
router.register(r'payment-options', api.PaymentOptionViewSet)
router.register(r'positions', api.PositionViewSet)
router.register(r'protected', api.ProtectedViewSet, basename='protected')
router.register(r'recurring-cost-types', api.RecurringCostTypeViewSet)
router.register(r'relationships', api.RelationshipViewSet)
router.register(r'tags', api.TagViewSet)
router.register(r'tasks', api.TaskViewSet)
router.register(r'task-assignees', api.TaskAssigneeViewSet)
router.register(r'task-files', api.TaskFileViewSet)
router.register(r'task-notes', api.TaskNoteViewSet)
router.register(r'task-statuses', api.TaskStatusViewSet)
router.register(r'task-tags', api.TaskTagViewSet, basename='tasktag')
router.register(r'task-timings', api.TaskTimingViewSet)
router.register(r'time-entries', api.TimeEntryViewSet)
router.register(r'time-entry-signoff', api.TimeEntrySignoffViewSet, basename='timeentrysignoff')

# DESKTOP
app_name = 'wip'
urlpatterns = []
