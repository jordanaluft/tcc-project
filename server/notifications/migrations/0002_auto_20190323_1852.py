# Generated by Django 2.0.13 on 2019-03-23 21:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Notifications',
            new_name='Notification',
        ),
    ]
