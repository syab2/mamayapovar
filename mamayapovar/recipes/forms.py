from django import forms


class LoginForm(forms.Form):
    email = forms.CharField(widget=forms.EmailInput(attrs={
        'class': "input  popup__input",
        'name': "email",
        'id': "email-auth",
        'placeholder': "Электронная почта"
    }))
    password = forms.CharField(widget=forms.PasswordInput(attrs={
        'class': "input  popup__input",
        'name': "password",
        'id': "password-auth",
        'placeholder': "Пароль"
    }))

    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get('email')
        password = cleaned_data.get('password')



