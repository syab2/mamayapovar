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

from .models import Recipe, StepImages

morph = pymorphy2.MorphAnalyzer()


def index(request):
    recipes = Recipe.objects.all()
    for recipe in recipes:
        # user
        recipe.author_id = models.User.objects.get(id=recipe.author_id)

        # ingredients
        recipe.ingredients = [[x.split(':')[0], ' '.join(x.split(':')[1].split('-'))] for x in
                              recipe.ingredients.split(';')]

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
    try:
        if not models.User.objects.get(email=request.POST.get('email', '')):
            models.User.objects.create_user(request.POST.get('username', ''), request.POST.get('email', ''),
                                            request.POST.get('password', '')).save()
        else:
            return HttpResponseRedirect('/')
    except Exception:
        models.User.objects.create_user(request.POST.get('username', ''), request.POST.get('email', ''),
                                        request.POST.get('password', '')).save()
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
    folder_id = ''.join([str(random.randint(0, 9)) for x in range(7)])
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
    second_folder = folder_id
    uploaded_filename = f"{request.FILES['photo'].name}"

    try:
        os.mkdir(os.path.join(settings.MEDIA_ROOT, folder))
    except:
        pass

    os.mkdir(os.path.join(settings.MEDIA_ROOT, folder, second_folder))

    full_filename = os.path.join(
        settings.MEDIA_ROOT, folder, second_folder, uploaded_filename)
    fout = open(full_filename, 'wb+')

    file_content = ContentFile(request.FILES['photo'].read())

    for chunk in file_content.chunks():
        fout.write(chunk)
    fout.close()

    # photos of steps and text

    j = 0
    step_descs = []
    for elem in request.POST:
        if 'step-description-' in elem:
            j += 1
            step_descs.append(f'{j}:{request.POST.get(elem)}')

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
        steps=sss,
        folder_id=folder_id
    )
    recipe.save()

    i = 0

    for elem in request.FILES:
        if 'step-photo-' in elem:
            i += 1

            folder = 'recipes'
            second_folder = folder_id
            uploaded_filename = str(i) + '.' + request.FILES[elem].name.split('.')[1]

            try:
                os.mkdir(os.path.join(os.path.join(settings.MEDIA_ROOT, folder, second_folder), 'steps'))
            except:
                pass

            ful_fil = os.path.join(
                settings.MEDIA_ROOT, folder, second_folder, 'steps', uploaded_filename)

            try:
                fout2 = open(ful_fil, 'wb+')

                file_content2 = ContentFile(request.FILES[elem].read())

                for chunk in file_content2.chunks():
                    fout2.write(chunk)
                fout2.close()

                imgs = StepImages(image=ful_fil, recipe=recipe)
                imgs.save()
            except Exception:
                pass

    return HttpResponseRedirect('/')


def recipe(request, recipe_id):
    recipe = Recipe.objects.get(id=recipe_id)
    recipe.author_id = models.User.objects.get(id=recipe.author_id)
    if recipe.cooking_time.split(':')[0] == '24':
        recipe.cooking_time = f'1 день'
    elif recipe.cooking_time.split(':')[0] != '0':
        cook = recipe.cooking_time.split(':')
        recipe.cooking_time = f"{cook[0]} {morph.parse('час')[0].make_agree_with_number(int(cook[0])).word} " \
                              f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"
    else:
        cook = recipe.cooking_time.split(':')
        recipe.cooking_time = f"{cook[1]} {morph.parse('минута')[0].make_agree_with_number(int(cook[1])).word}"

    pers = int(recipe.persons)
    recipe.persons = f"{pers} {morph.parse('порция')[0].make_agree_with_number(pers).word}"

    recipe.ingredients = [[x.split(':')[0], ' '.join(x.split(':')[1].split('-'))] for x in recipe.ingredients.split(';')]
    recipe.steps = [[x.split(':')[0], x.split(':')[1].split('\n')] for x in recipe.steps.split(';')]

    step_photos = StepImages.objects.filter(recipe_id=recipe_id)

    for i in range(len(recipe.steps)):
        try:
            if step_photos[i].image.name.split('.')[0][-1] == recipe.steps[i][0]:
                recipe.steps[i].append(step_photos[i].image)
        except Exception:
            recipe.steps[i].append(None)

    return render(request, 'recipes/post.html', {'recipe': recipe, 'is_auth': request.user.is_authenticated})


def bookmarks(request):
    return render(request, 'recipes/bookmarks.html', {})
