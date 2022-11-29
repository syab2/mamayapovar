Чтобы запустить "Мама, я повар!" в тестовом режиме вам потребуется следовать данным шагам:

1. Скачайте и установите Python 3.10.6 с сайта:
> https://www.python.org/downloads/release/python-3106/

2. Затем скачайте и разархивируйте папку с нашим проектом.

3. Откройте консоль cmd именно в этой папке.

> cd <Путь до папки>

4. Напишите следующие команды:

> pip install virtualenv

> python -m venv venv

> .\venv\Scripts\activate

> pip install -r requirements.txt

> cd mamayapovar

> python manage.py runserver

5. Готово! Можете переходить по адресу:

> http://127.0.0.1:8000/
