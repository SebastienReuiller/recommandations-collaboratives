# Generated by Django 3.2.15 on 2022-10-11 09:01

from django.db import migrations
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ("taggit", "0005_auto_20220424_2025"),
        ("projects", "0060_auto_20221011_1018"),
    ]

    operations = [
        migrations.AlterField(
            model_name="project",
            name="tags",
            field=taggit.managers.TaggableManager(
                blank=True,
                help_text="A comma-separated list of tags.",
                through="taggit.TaggedItem",
                to="taggit.Tag",
                verbose_name="Tags",
            ),
        ),
    ]
