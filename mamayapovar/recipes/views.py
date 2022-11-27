import os
import random

import pymorphy2
from django.conf import settings
from django.contrib import messages
from django.contrib.auth import models, logout
from django.contrib.auth import get_user_model
from django.core.files.base import ContentFile
from django.http import HttpResponseRedirect
from django.contrib.auth import login, authenticate
from django.shortcuts import render

from .models import Recipe

morph = pymorphy2.MorphAnalyzer()


def index(request):
    recipes = Recipe.objects.all()
    for recipe in recipes:
        # user
        recipe.author_id = models.User.objects.get(id=recipe.author_id)

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

        # photo
        if recipe.photo:
            pass
        else:
            recipe.photo = None
    content = {
        'recipes': recipes,
        'is_auth': request.user.is_authenticated,
        'user': request.user
    }
    return render(request, 'recipes/index.html', content)


def postindex(request):
    if not get_user_model().objects.get(email=request.POST.get('email', '')):
        models.User.objects.create_user(request.POST.get('username', ''), request.POST.get('email', ''),
                                        request.POST.get('password', '')).save()
    else:
        return HttpResponseRedirect('/')
    return HttpResponseRedirect('/')


def postlogin(request):
    if request.method == "POST":
        #form = AuthenticationForm(request, data=request.POST)
        # if form.is_valid():
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect('/')
        else:
            messages.error(request, "Invalid username or password.")
    return HttpResponseRedirect('/')


def postlogout(request):
    logout(request)
    return HttpResponseRedirect('/')


def new_recipe(request):
    return render(request, 'recipes/new-recipe.html', {})


def new_recipe_post(request):
    categories = {
        "Выпечка": 1,
        "Супы": 2,
        "Салаты": 3,
        "Горячие блюда": 4
    }
    title = request.POST.get('title')
    description = request.POST.get('description')
    cat_id = categories[request.POST.get('cat')]
    persons = request.POST.get('persons')
    cooking_time = f'{request.POST.get("cooking_time_hours")}:{request.POST.get("cooking_time_minutes")}'
    ings = []
    ingredient = ''
    for elem in request.POST:
        if 'ingredient-name-' in elem:
            ingredient += request.POST.get(
                f'ingredient-name-{elem.split("-")[-1]}') + ':'
        if 'ingredient-amount-' in elem:
            ingredient += request.POST.get(
                f'ingredient-amount-{elem.split("-")[-1]}') + '-'
        if 'ingredient-measure-' in elem:
            ingredient += request.POST.get(
                f'ingredient-measure-{elem.split("-")[-1]}')
            ings.append(ingredient)
            ingredient = ''
    ingredients = ';'.join(ings)

    # photo
    folder = 'recipes'
    second_folder = title
    uploaded_filename = f"{''.join([str(random.randint(0, 9)) for x in range(5)])}_{request.FILES['photo'].name}"

    try:
        os.mkdir(os.path.join(settings.MEDIA_ROOT, folder))
    except:
        pass

    os.mkdir(os.path.join(os.path.join(
        settings.MEDIA_ROOT, folder), second_folder))

    full_filename = os.path.join(
        settings.MEDIA_ROOT, folder, second_folder, uploaded_filename)
    fout = open(full_filename, 'wb+')

    file_content = ContentFile(request.FILES['photo'].read())

    for chunk in file_content.chunks():
        fout.write(chunk)
    fout.close()

    # photos of steps and text

    i = 0
    filenames = []
    step_descs = []
    for elem in request.FILES:
        if 'step-photo-' in elem:
            i += 1

            folder = 'recipes'
            second_folder = title
            uploaded_filename = str(i) + '.' + request.FILES[elem].name.split('.')[1]

            try:
                os.mkdir(os.path.join(os.path.join(settings.MEDIA_ROOT, folder, second_folder), 'steps'))
            except:
                pass

            ful_fil = os.path.join(
                settings.MEDIA_ROOT, folder, second_folder, 'steps', uploaded_filename)

            try:
                filenames.append(ful_fil)
                fout2 = open(ful_fil, 'wb+')

                file_content2 = ContentFile(request.FILES[elem].read())

                for chunk in file_content2.chunks():
                    fout2.write(chunk)
                fout2.close()
            except Exception:
                del filenames[-1]

    j = 0
    for elem in request.POST:
        if 'step-description-' in elem:
            j += 1
            step_descs.append(f'{j}:{request.POST.get(elem)}')

    pos = ';'.join(filenames)
    sss = ';'.join(step_descs)

    recipe = Recipe(
        title=title,
        description=description,
        cooking_time=cooking_time,
        persons=persons,
        cat_id=cat_id,
        author_id=request.user.id,
        ingredients=ingredients,
        photo=full_filename,
        photos_of_steps=pos,
        steps=sss
    )
    recipe.save()

    return HttpResponseRedirect('/')
