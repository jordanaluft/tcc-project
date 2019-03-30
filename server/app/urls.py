from django.urls import path
from .views import LampadaList


urlpatterns = [
    path('lampadas', LampadaList.as_view())
]
