from django import template
from recipes.models import Bookmark, UserProfile

register = template.Library()


@register.simple_tag
def get_bookmark_status(id_):
    try:
        return True if Bookmark.objects.get(book_post_id=id_) else False
    except:
        return False


@register.simple_tag
def is_avatar(id_):
    try:
        return True if UserProfile.objects.get(user=id_) else False
    except:
        return False


@register.simple_tag
def get_avatar_url(id_):
    return UserProfile.objects.get(user=id_).avatar.url