# Generated by Django 2.1.1 on 2018-09-20 08:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wip', '0006_timedailysignoff'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobRecurringCost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_invoiced_date', models.DateField(blank=True, null=True)),
                ('billing_interval', models.PositiveIntegerField()),
                ('billing_frequency', models.IntegerField(choices=[(3, 'Day(s)'), (2, 'Week(s)'), (1, 'Month(s)'), (0, 'Year(s)')])),
                ('job', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recurring_costs', to='wip.Job')),
            ],
            options={
                'ordering': ['type'],
            },
        ),
        migrations.CreateModel(
            name='PaymentOption',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, unique=True)),
            ],
            options={
                'ordering': ['title'],
            },
        ),
        migrations.CreateModel(
            name='RecurringCostType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, unique=True)),
            ],
            options={
                'ordering': ['title'],
            },
        ),
        migrations.AddField(
            model_name='jobrecurringcost',
            name='payment_option',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='wip.PaymentOption'),
        ),
        migrations.AddField(
            model_name='jobrecurringcost',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='wip.RecurringCostType'),
        ),
    ]
