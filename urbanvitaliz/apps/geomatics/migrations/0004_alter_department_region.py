# Generated by Django 3.2.18 on 2023-05-22 09:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("geomatics", "0003_alter_department_code"),
    ]

    operations = [
        migrations.AlterField(
            model_name="department",
            name="region",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="departments",
                to="geomatics.region",
            ),
        ),
    ]
