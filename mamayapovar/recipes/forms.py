from django import forms


class LoginForm(forms.Form):
    email = forms.CharField(
        required=False,
        widget=forms.EmailInput(attrs={
            'class': "input  popup__input",
            'name': "email",
            'id': "email-auth",
            'placeholder': "Электронная почта"
        })
    )
    password = forms.CharField(
        required=False,
        min_length=4,
        max_length=32,
        widget=forms.PasswordInput(attrs={
            'class': "input  popup__input",
            'name': "password",
            'id': "password-auth",
            'placeholder': "Пароль"
        })
    )

    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get('email')
        password = cleaned_data.get('password')


class ProfileSettingsForm(forms.Form):
    username = forms.CharField(
        required=False,
        widget=forms.TextInput(attrs={
            'class': 'input',
            'name': 'username',
            'id': 'settings-username',
            'placeholder': "Имя и фамилия",
            'pattern': "[A-Za-zА-Яа-яЁё\s]{0,100}",
            'minlength': "0",
            'maxlength': "100",
            'autocomplete': "off",
        })
    )

    description = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            'class': 'input',
            'name': 'description',
            'id': 'description',
            'placeholder': "Пара слов о себе",
            'maxlength': "120",
            'autocomplete': "off",
        })
    )

    photo = forms.ImageField(required=False)

    def clean(self):
        cleaned_data = super().clean()
        username = cleaned_data.get('username')
        description = cleaned_data.get('description')


class ChangeEmailForm(forms.Form):
    email = forms.CharField(
        required=False,
        widget=forms.EmailInput(attrs={
            'class': "input",
            'name': "email",
            'id': "settings-email",
            'placeholder': "Электронная почта"
        })
    )

    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get('email')


class ChangePasswordForm(forms.Form):
    password_old = forms.CharField(
        required=False,
        min_length=4,
        max_length=32,
        widget=forms.PasswordInput(attrs={
            'class': "input",
            'name': "password-old",
            'id': "settings-password-old",
            'placeholder': "Старый пароль"
        })
    )
    password_new = forms.CharField(
        required=False,
        min_length=4,
        max_length=32,
        widget=forms.PasswordInput(attrs={
            'class': "input",
            'name': "password-new",
            'id': "settings-password-new",
            'placeholder': "Новый пароль"
        })
    )
    password_new_repeat = forms.CharField(
        required=False,
        min_length=4,
        max_length=32,
        widget=forms.PasswordInput(attrs={
            'class': "input",
            'name': "password-new-repeat",
            'id': "settings-password-new-repeat",
            'placeholder': "Подтвердите новый пароль"
        })
    )

    def clean(self):
        cleaned_data = super().clean()
        password_old = cleaned_data.get('password_old')
        password_new = cleaned_data.get('password_new')
        password_new_repeat = cleaned_data.get('password_new_repeat')



class RecipeForm(forms.Form):
    title = forms.CharField()
    description = forms.CharField()
    cat = forms.CharField()
    persons = forms.IntegerField()
    cooking_time_hours = forms.CharField()
    cooking_time_minutes = forms.CharField()
    photo = forms.ImageField()

    def clean(self):
        cleaned_data = super().clean()
        title = cleaned_data.get('title')
        description = cleaned_data.get('description')
        cat = cleaned_data.get('cat')
        persons = cleaned_data.get('persons')
        cooking_time_hours = cleaned_data.get('cooking_time_hours')
        cooking_time_minutes = cleaned_data.get('cooking_time_minutes')
        photo = cleaned_data.get('photo')

