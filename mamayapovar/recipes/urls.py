from django.urls import path, re_path
from django.conf.urls.static import static

from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('postindex/', postindex, name='registration'),
    path('postlogin/', postlogin, name='login'),
    path('postlogout/', postlogout, name='logout'),
    path('new-recipe/', new_recipe, name='new_recipe'),
    path('new-recipe/new-recipe-post/', new_recipe_post, name='new_recipe_post'),
    path('recipe/<int:recipe_id>/', recipe, name='recipe'),
    re_path(r'^recipe/(?P<pk>\d+)/bookmark/$', bookmark_post, name='bookmark_post'),
    path('bookmarks/', bookmarks, name='bookmarks'),
    path('user/<int:id>/', user_profile, name='user_profile'),
    path('user/change_profile_picture', change_profile_picture, name='change_profile_picture'),
    re_path(r'^recipe/(?P<pk>\d+)/like/$', like_post, name='like_post'),
    re_path(r'^recipe/(?P<pk>\d+)/subscribe/$', subscribe_post, name='subscribe')
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
