# Generated by Django 2.1.1 on 2018-10-03 14:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wip', '0010_jobstatus_show_on_clock'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='timedailysignoff',
            options={'ordering': ['date'], 'permissions': (('manage_time_daily_signoff', 'Can manage other peoples time daily signoffs'),)},
        ),
        migrations.AlterModelOptions(
            name='timeentry',
            options={'ordering': ['started_at'], 'permissions': (('manage_time_entry', 'Can manage other peoples time entries'),), 'verbose_name_plural': 'time entries'},
        ),
    ]