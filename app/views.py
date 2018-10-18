from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.template import loader
from django.views.generic import RedirectView


class Home(LoginRequiredMixin, RedirectView):
    pattern_name = 'wip:taskboard'
    permanent = True


def error404(request, exception):
    template = loader.get_template('404.html')
    context = {'request': request}
    return HttpResponse(content=template.render(context), content_type='text/html; charset=utf-8', status=404)


def error500(request):
    template = loader.get_template('500.html')
    context = {'request': request}
    return HttpResponse(content=template.render(context), content_type='text/html; charset=utf-8', status=500)
