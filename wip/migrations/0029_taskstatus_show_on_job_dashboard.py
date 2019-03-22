# Generated by Django 2.1.5 on 2019-03-22 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wip', '0028_job_slack_channel_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='taskstatus',
            name='show_on_job_dashboard',
            field=models.BooleanField(default=True, help_text='Designates whether this status should be displayed on the job dashboard'),
        ),
    ]
