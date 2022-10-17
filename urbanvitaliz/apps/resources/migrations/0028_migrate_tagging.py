# Generated by Django 3.2.15 on 2022-10-11 09:21

from django.db import migrations


def migrate_tagging_to_taggit(apps, schema_editor):
    Resource = apps.get_model("resources", "Resource")
    Tag = apps.get_model("taggit", "Tag")
    TaggedItem = apps.get_model("taggit", "TaggedItem")
    ContentType = apps.get_model("contenttypes", "ContentType")
    ct = ContentType.objects.get_for_model(Resource)

    db_alias = schema_editor.connection.alias

    for resource in Resource.objects.using(db_alias).all():
        words = resource.old_tags.split(" ")
        for word in words:
            if word != "":
                word = word.rstrip(",")
                t, created = Tag.objects.get_or_create(
                    name=word.lower(), slug=word.lower()
                )
                tagged_items, created = TaggedItem.objects.get_or_create(
                    content_type_id=ct.id, object_id=resource.id, tag=t
                )


class Migration(migrations.Migration):

    dependencies = [
        ("resources", "0027_resource_tags"),
    ]

    operations = [
        migrations.RunPython(migrate_tagging_to_taggit, lambda x, y: None),
    ]
