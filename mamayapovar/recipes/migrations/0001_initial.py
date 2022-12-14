# Generated by Django 4.1.3 on 2022-11-20 09:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('time_create', models.DateTimeField(auto_now_add=True)),
                ('cooking_time', models.CharField(max_length=20)),
                ('persons', models.IntegerField()),
                ('cat', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='recipes.category')),
            ],
        ),
    ]
