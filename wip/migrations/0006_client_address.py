# Generated by Django 2.1.1 on 2018-09-26 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wip', '0005_auto_20180926_1353'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='address',
            field=models.TextField(blank=True, null=True),
        ),
    ]
