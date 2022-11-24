from django.urls import path

from .views import *

urlpatterns = [
    path('', index),
    path('postindex/', postindex, name='registration'),
    path('postlogin/', postlogin, name='login'),
    path('postlogout/', postlogout, name='logout'),
    path('new-recipe/', new_recipe, name='new_recipe')
]
