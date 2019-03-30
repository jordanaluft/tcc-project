from .models import Lampada
from .serializers import LampadaSerializer
from rest_framework import generics


class LampadaList(generics.ListCreateAPIView):
    queryset = Lampada.objects.all()
    serializer_class = LampadaSerializer

class LampadaDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lampada.objects.all()
    serializer_class = LampadaSerializer
