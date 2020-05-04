import os
import django_heroku

DATABASE_URL = os.environ.get('DATABASE_URL')
#'postgres://mvfvspgirbpxkr:d47520ce55afaf9efb82c14a0d8b6873960c36f374135958fabb3f5512ef682c@ec2-52-203-160-194.compute-1.amazonaws.com:5432/dfp63ea3ndf4ll'
SECRET_KEY = os.environ.get('SECRET_KEY')
#'c31bfb18b23c22eda77ba58894f1fea9a9115db45acd6bc1'


STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'


django_heroku.settings(locals())
