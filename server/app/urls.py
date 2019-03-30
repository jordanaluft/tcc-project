from django.urls import path
from .views import LampadaList, LampadaDetails


urlpatterns = [
    path('lampadas', LampadaList.as_view()),
    path('lampadas/<pk>', LampadaDetails.as_view()),
]
