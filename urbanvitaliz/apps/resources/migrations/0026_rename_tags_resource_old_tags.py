# Generated by Django 3.2.15 on 2022-10-11 09:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("resources", "0025_auto_20220504_1538"),
    ]

    operations = [
        migrations.RenameField(
            model_name="resource",
            old_name="tags",
            new_name="old_tags",
        ),
    ]
