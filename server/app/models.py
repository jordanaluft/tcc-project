import uuid
from django.db import models

STATUS_CHOICES = (
    ("working", "Funcionando"),
    ("broken", "Lâmpada Queimada"),
    ("unavailable", "Sistema Indisponível"))

class Lampada(models.Model):
    id = models.UUIDField(
        primary_key=True)
    status = models.CharField(max_length=30, choices=STATUS_CHOICES)
    intensity = models.PositiveSmallIntegerField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    last_ping = models.DateTimeField()

    class Meta:
        verbose_name = "lâmpada"
        verbose_name_plural = "lâmpadas"
        ordering = ['id']
