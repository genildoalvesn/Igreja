from django.urls import path, include
from .views import IndexView
from django.views.generic import TemplateView

urlpatterns = [
    path('inicio/',IndexView.as_view(), name='inicio'),
    path('', TemplateView.as_view(template_name='index.html')),
]