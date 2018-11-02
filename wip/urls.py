from app import routers
from wip import api


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
router.register(r'task-files', api.TaskFileViewSet)
router.register(r'task-notes', api.TaskNoteViewSet)
router.register(r'task-statuses', api.TaskStatusViewSet)
router.register(r'time-daily-signoff', api.TimeDailySignoffViewSet)
router.register(r'time-entries', api.TimeEntryViewSet)

# DESKTOP
app_name = 'wip'
urlpatterns = []
