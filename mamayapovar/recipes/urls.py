from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import *

urlpatterns = [
    path('', index),
    path('postindex/', postindex, name='registration'),
    path('postlogin/', postlogin, name='login'),
    path('postlogout/', postlogout, name='logout'),
    path('new-recipe/', new_recipe, name='new_recipe'),
    path('new-recipe/new-recipe-post/', new_recipe_post, name='new_recipe_post')
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
