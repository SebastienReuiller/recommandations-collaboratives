# Generated by Django 3.2.15 on 2022-09-27 10:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0061_alter_project_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='project',
            options={'permissions': (('view_synopsis', 'Can view the synopsis'), ('change_synopsis', 'Can change the synopsis'), ('use_private_notes', 'Can use the private notes (internal)'), ('use_public_notes', 'Can use the public notes (conversations)'), ('view_public_notes', 'Can read the public notes (conversations)'), ('view_private_notes', 'Can read the private notes (internal)'), ('view_tasks', 'Can view and list tasks'), ('view_draft_tasks', 'Can view and list draft tasks'), ('use_tasks', 'Can use tasks'), ('manage_tasks', 'Can manage tasks'), ('can_invite', 'Can manage tasks')), 'verbose_name': 'project', 'verbose_name_plural': 'projects'},
        ),
    ]
