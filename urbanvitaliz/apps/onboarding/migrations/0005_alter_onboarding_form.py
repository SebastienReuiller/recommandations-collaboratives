# Generated by Django 3.2.16 on 2023-02-14 15:25

from django.db import migrations
import dynamic_forms.models


class Migration(migrations.Migration):

    dependencies = [
        ("onboarding", "0004_onboardingresponse_project"),
    ]

    operations = [
        migrations.AlterField(
            model_name="onboarding",
            name="form",
            field=dynamic_forms.models.FormField(
                default=[
                    {
                        "className": "form-control",
                        "label": "Vide",
                        "name": "text-0000000000000-0",
                        "required": False,
                        "subtype": "text",
                        "type": "text",
                    }
                ]
            ),
        ),
    ]
