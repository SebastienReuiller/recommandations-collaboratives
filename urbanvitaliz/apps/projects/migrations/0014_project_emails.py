# Generated by Django 3.2.6 on 2021-08-30 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("projects", "0013_auto_20210720_1232"),
    ]

    operations = [
        migrations.AddField(
            model_name="project",
            name="emails",
            field=models.JSONField(default=list),
        ),
    ]
