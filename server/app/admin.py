from django.contrib import admin
from .models import Lampada

@admin.register(Lampada)
class LampadaAdmin(admin.ModelAdmin):
    readonly_fields = (
        'id',
        'intensity',
        'last_ping',
        'status',
        'latitude',
        'longitude',
        )
