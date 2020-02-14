from flask import Blueprint, render_template

from indigitous.extensions import db
from indigitous.models import Connections

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')
@main.route('/calendar')
def calendar():
    return render_template('calendar.js')

@main.route('/connections')
def connections():
    return render_template('connections.js')

@main.route('/exchange')
def exchange():
    return render_template('exchange.js')

@main.route('/home')
def home():
    return render_template('home.js')

@main.route('/profile')
def profile():
    return render_template('profile.js')

@main.route('/setup')
def setup():
    return render_template('setup.js')
