from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class MyBackend(BaseBackend):
    def authenticate(self, request, email=None, password=None, **kwargs):
        if email is None:
            email = kwargs.get(UserModel.USERNAME_FIELD)
        if email is None or password is None:
            return
        try:
            user = UserModel.objects.get(email=email)
        except UserModel.DoesNotExist:
            UserModel().set_password(password)
        else:
            if user.check_password(password) and user.is_active is True:
                return user

    def get_user(self, user_id):
        try:
            user = UserModel._default_manager.get(pk=user_id)
        except UserModel.DoesNotExist:
            return None
        return user if user.is_active is True else None
