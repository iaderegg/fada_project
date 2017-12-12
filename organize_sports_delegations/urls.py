from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('server_processing/', views.server_processing, name='server_processing')
]