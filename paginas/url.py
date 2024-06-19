from django.urls import path, include
from .views import IndexView
from .. import paginas

urlpatterns = [
    path('inicio/',IndexView.as_view(), name='inicio'),
     path('parahyba/', include(paginas.url)),
]