from django.contrib import admin

from wip.models import *


class JobRelationshipAdmin(admin.TabularInline):
    model = JobRelationship
    extra = 0
    verbose_name = 'relationship'
    verbose_name_plural = 'relationships'


class JobAdmin(admin.ModelAdmin):
    inlines = [JobRelationshipAdmin]


admin.site.register(Job, JobAdmin)
admin.site.register(JobStatus)
admin.site.register(JobType)
admin.site.register(Relationship)