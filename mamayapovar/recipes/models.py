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
    cat = models.ForeignKey('Category', on_delete=models.PROTECT)
    author_id = models.IntegerField(null=True)
    ingredients = models.TextField(blank=True)
    steps = models.TextField(blank=True)
    folder_id = models.CharField(max_length=7, blank=True)

    def get_beautiful_ingredients(self):
        ings = len(self.ingredients)
        return f"{ings} {morph.parse('ингредиент')[0].make_agree_with_number(ings).word}"

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-time_create']


class StepImages(models.Model):
    recipe = models.ForeignKey('Recipe', default=None, on_delete=models.PROTECT)
    image = models.ImageField(null=True, blank=True, verbose_name='Image')


class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name


class Bookmark(models.Model):
    class Meta:
        db_table = 'bookmarks'
        ordering = ['-time_created']

    book_post = models.ForeignKey('Recipe', on_delete=models.DO_NOTHING)
    book_user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    time_created = models.DateTimeField(auto_now_add=True, null=True)
