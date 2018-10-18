from django import template
from django.conf import settings


register = template.Library()


@register.simple_tag
def is_debug_mode():
    return settings.DEBUG


@register.simple_tag(takes_context=True)
def section_name(context):
    """ Finds the section name for a given url """

    url_name = context['request'].resolver_match.url_name

    if url_name.startswith("taskboard"):
        return 'taskboard'

    if url_name.startswith("timesheet"):
        return 'timesheet'

    if url_name.startswith(("client", "job", "task")):
        return 'client'
