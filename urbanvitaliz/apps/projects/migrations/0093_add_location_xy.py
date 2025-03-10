# Generated by Django 3.2.18 on 2023-11-08 08:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("projects", "0092_add_permission_change_location"),
    ]

    operations = [
        migrations.AddField(
            model_name="project",
            name="location_x",
            field=models.FloatField(
                blank=True, null=True, verbose_name="Coordonnées géographiques (X)"
            ),
        ),
        migrations.AddField(
            model_name="project",
            name="location_y",
            field=models.FloatField(
                blank=True, null=True, verbose_name="Coordonnées géographiques (Y)"
            ),
        ),
    ]
