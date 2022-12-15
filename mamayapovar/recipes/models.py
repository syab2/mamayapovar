import pymorphy2
from django.contrib.auth.models import User
from django.db import models

morph = pymorphy2.MorphAnalyzer()


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    time_create = models.DateTimeField(auto_now_add=True)
    cooking_time = models.CharField(max_length=20)
    persons = models.CharField(max_length=20)
    photo = models.ImageField(upload_to='', null=True, blank=True, verbose_name='Изображение')
    cat = models.ForeignKey('Category', on_delete=models.DO_NOTHING)
    author_id = models.IntegerField(null=True)
    ingredients = models.TextField(blank=True)
    steps = models.TextField(blank=True)
    folder_id = models.CharField(max_length=7, blank=True)

    def get_beautiful_ingredients(self):
        ings = len(self.ingredients)
        return f"{ings} {morph.parse('ингредиент')[0].make_agree_with_number(ings).word}"

    def get_formatted_time(self):
        return f"{self.time_create.strftime('%d.%m.%Y')}"

    def get_formatted_time_full(self):
        return f"{self.time_create.strftime('%Y-%m-%d %H:%M')}"

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-time_create']


class StepImages(models.Model):
    recipe = models.ForeignKey('Recipe', default=None, on_delete=models.DO_NOTHING)
    image = models.ImageField(null=True, blank=True, verbose_name='Image')


class Category(models.Model):
    name = models.CharField(max_length=50, db_index=True)
    description = models.TextField(max_length=100, blank=True)

    def __str__(self):
        return self.name


class Bookmark(models.Model):
    class Meta:
        db_table = 'bookmarks'
        ordering = ['-time_created']

    book_post = models.ForeignKey('Recipe', on_delete=models.DO_NOTHING)
    book_user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    time_created = models.DateTimeField(auto_now_add=True, null=True)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.DO_NOTHING)
    description = models.TextField(blank=True)
    posts = models.IntegerField()
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    def __unicode__(self):
        return self.user


class Like(models.Model):
    class Meta:
        db_table = 'likes'

    likes = models.IntegerField(default=0)
    like_post = models.ForeignKey('Recipe', on_delete=models.DO_NOTHING)
    like_user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    status = models.BooleanField(default=False)


class Subscribe(models.Model):
    class Meta:
        db_table = 'subscribe'
        ordering = ['-time_created']

    subscribe_from = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='subscribe_from')
    subscribe_to = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='subscribe_to')
    time_created = models.DateTimeField(auto_now_add=True)

