def save_file_there(f, path):
    with open(path, 'wb+') as file:
        for chunk in f.chunks():
            file.write(chunk)
