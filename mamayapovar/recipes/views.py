import pymorphy2
from django.contrib import messages
from django.contrib.auth import models
from django.contrib.auth.forms import AuthenticationForm
from django.http import HttpResponseRedirect
from django.contrib.auth import login, authenticate
from django.shortcuts import render

from .models import Recipe

morph = pymorphy2.MorphAnalyzer()


def index(request):
    recipes = Recipe.objects.all()
    for recipe in recipes:
        # ingredients
        ings = len(recipe.ingredients.split(';'))
        recipe.ingredients = f"{ings} {morph.parse('ингредиент')[0].make_agree_with_number(ings).word}"

        # persons
        pers = int(recipe.persons)
        recipe.persons = f"{pers} {morph.parse('порция')[0].make_agree_with_number(pers).word}"

        # cooking_time
        if recipe.cooking_time.split(':')[0] == '24':
            recipe.cooking_time = f'1 день'
        elif recipe.cooking_time.split(':')[0] != '0':
            cook = recipe.cooking_time.split(':')
            recipe.cooking_time = f"{cook[0]} {morph.parse('час')[0].make_agree_with_number(int(cook[0])).word} " \
                                  f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"
        else:
            cook = recipe.cooking_time.split(':')
            recipe.cooking_time = f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"
    content = {'recipes': recipes, 'is_auth': request.user.is_authenticated}
    return render(request, 'recipes/index.html', content)


def postindex(request):
    models.User.objects.create_user(request.POST.get('username', ''), request.POST.get('email', ''),
                                    request.POST.get('password', '')).save()
    return HttpResponseRedirect('/')


def postlogin(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                print('hahahahhahahahahhahahahahhhahaha')
                login(request, user)
                return HttpResponseRedirect('/')
            else:
                messages.error(request, "Invalid username or password.")
    return HttpResponseRedirect('/')
