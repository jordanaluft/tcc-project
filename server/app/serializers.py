from rest_framework import serializers
from .models import Lampada

class LampadaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lampada
        fields = (
            'id',
            'intensity',
            'last_ping',
            'status',
            'latitude',
            'longitude')
