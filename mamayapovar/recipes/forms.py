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



