# Generated by Django 2.1.1 on 2018-09-27 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_user_ordering'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='gradwell_extension',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='gradwell_token',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
