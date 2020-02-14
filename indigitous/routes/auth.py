from flask import Blueprint, render_template, request, redirect, url_for

from indigitous.extensions import db
from indigitous.models import User

auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['GET','POST'])
def signup():
    if request.method == 'POST':
        name = ''
        unhashed_password = ''

        user = User(name=name, unhashed_password=unhashed_password)
        db.session.add(user)
        db.session.commit()

        return redirect(url_for('auth.login'))

    return render_template('signup.js')

@auth.route('/login')
def login():
    return render_template('login.js')
