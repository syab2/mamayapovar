from django.urls import path

from .views import *

urlpatterns = [
    path('', index),
    path('postindex/', postindex),
    path('postlogin/', postlogin)
]
