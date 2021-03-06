# Generated by Django 2.1.3 on 2018-11-06 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wip', '0018_auto_20181105_1609'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='allocated_hours',
            field=models.DecimalField(decimal_places=2, default='0.00', editable=False, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='task',
            name='time_spent_hours',
            field=models.DecimalField(decimal_places=2, default='0.00', editable=False, max_digits=10, null=True),
        ),
    ]
