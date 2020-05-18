import os
import django_heroku

DATABASE_URL = os.environ.get('DATABASE_URL')

SECRET_KEY = os.environ.get('SECRET_KEY')



STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'


django_heroku.settings(locals())
