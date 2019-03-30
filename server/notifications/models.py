from django.db import models

# Create your models here.
class Notification(models.Model):
    description = models.TextField()
    read = models.BooleanField(default = 'True')
