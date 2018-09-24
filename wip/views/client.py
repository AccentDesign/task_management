from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import Prefetch
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView

from wip.models import Client, Job
from wip.views.mixins import ProtectedDeleteMixin


class ClientCreate(LoginRequiredMixin, CreateView):
    fields = '__all__'
    model = Client
    success_url = reverse_lazy('wip:client-list')
    template_name = 'wip/client_add.html'


class ClientDelete(LoginRequiredMixin, ProtectedDeleteMixin, DeleteView):
    model = Client
    success_url = reverse_lazy('wip:client-list')


class ClientDetail(LoginRequiredMixin, DetailView):
    model = Client

    def get_queryset(self):
        return (
            super().get_queryset()
            .prefetch_related(
                Prefetch(
                    'jobs',
                    Job.objects.select_related('status')
                )
            )
        )


class ClientList(LoginRequiredMixin, ListView):
    model = Client


class ClientUpdate(LoginRequiredMixin, UpdateView):
    fields = '__all__'
    model = Client
    template_name = 'wip/client_update.html'