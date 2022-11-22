import datetime

from django.shortcuts import render

from .models import Recipe


def index(request):
    recipes = Recipe.objects.all()
    for recipe in recipes:
        recipe.ingredients = len(recipe.ingredients.split(';'))
    content = {
        'recipes': recipes
    }
    return render(request, 'recipes/index.html', content)
