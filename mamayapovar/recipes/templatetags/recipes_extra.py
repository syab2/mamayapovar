from django import template
from recipes.models import Bookmark

register = template.Library()


@register.simple_tag
def get_bookmark_status(id_):
    try:
        return True if Bookmark.objects.get(book_post_id=id_) else False
    except:
        return False
