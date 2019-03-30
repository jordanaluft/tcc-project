from django.db import models
from django.utils import timezone

# Create your models here.
class Lampada(models.Model):
    location = models.DecimalField(max_digits = 20, decimal_places = 1)
    ping = models.DateTimeField(default = timezone.now)

    choices_status = (
            ("Funcionando", "Funcionando"),
            ("Lâmpada Queimada", "Lâmpada Queimada"),
            ("Sistema indisponível", "Sistema Indisponível"))
    status = models.CharField(max_length = 30, choices = choices_status)

    intensity = models.PositiveSmallIntegerField()
