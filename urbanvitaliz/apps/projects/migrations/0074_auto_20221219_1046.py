# Generated by Django 3.2.16 on 2022-12-19 09:46

import django.db.models.deletion
import urbanvitaliz.apps.projects.models
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("sites", "0002_alter_domain_unique"),
        ("projects", "0073_auto_20221201_1106"),
    ]

    operations = [
        migrations.RenameField(
            model_name="project", old_name="synopsis", new_name="advisors_note"
        ),
        migrations.RenameField(
            model_name="project", old_name="synopsis_by", new_name="advisors_note_by"
        ),
        migrations.RenameField(
            model_name="project",
            old_name="synopsis_on",
            new_name="advisors_note_on",
        ),
        migrations.CreateModel(
            name="ProjectTopic",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("label", models.CharField(max_length=255)),
                (
                    "project",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="topics_on_site",
                        to="projects.project",
                    ),
                ),
                (
                    "site",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="sites.site"
                    ),
                ),
            ],
            managers=[
                (
                    "objects",
                    urbanvitaliz.apps.projects.models.ProjectTopicOnSiteManager(),
                ),
            ],
        ),
    ]
