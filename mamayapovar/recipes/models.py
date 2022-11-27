from django.db import models


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
    photos_of_steps = models.TextField(blank=True)
    folder_id = models.CharField(max_length=7, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-time_create']


class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name
