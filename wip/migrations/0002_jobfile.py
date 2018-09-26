# Generated by Django 2.1.1 on 2018-09-25 08:25

import authentication.middleware.current_user
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import wip.models.job_file


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('wip', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to=wip.models.job_file.get_upload_path)),
                ('uploaded_on', models.DateTimeField(auto_now_add=True)),
                ('job', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='files', to='wip.Job')),
                ('uploaded_by', models.ForeignKey(default=authentication.middleware.current_user.get_current_user, editable=False, on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['file'],
            },
        ),
    ]