# Generated by Django 2.1.1 on 2018-10-05 09:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wip', '0011_auto_20181003_1559'),
    ]

    operations = [
        migrations.RenameField(
            model_name='jobstatus',
            old_name='allow_new_clock_entries',
            new_name='allow_new_timesheet_entries',
        ),
    ]
