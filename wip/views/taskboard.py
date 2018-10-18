from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView

from wip.models import TaskStatus


class TaskBoard(LoginRequiredMixin, TemplateView):
    template_name = 'wip/taskboard.html'

    def get_assigned_tasks(self):
        return (
            self.request.user.assigned_tasks.all()
        )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'statuses': TaskStatus.objects.all(),
            'assigned_tasks': self.get_assigned_tasks()
        })
        return context
