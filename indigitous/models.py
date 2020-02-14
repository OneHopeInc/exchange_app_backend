from flask_login import UserMixin
from werkzeurg.security import generate_password_hash

from .extensions import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name_last = db.Column(db.String(50))
    name_first = db.Column(db.String(50))
    name_middle = db.Column(db.String(50))
    username = db.Column(db.String(50))
    display_name = db.Column(db.String(50))
    email = db.Column(db.String(100))
    url_site = db.Column(db.String(100))
    registered = db.Column(db.timestamp)
    gender = db.Column(db.String(50))
    password = db.Column(db.String(100))
    tos_accepted = db.Column(db.Boolean)

    connects_to = db.relationship(
        'ConnectedTo',
        foreign_keys='ConnectedTo.user_id',
        backref='user_to',
        lazy=True
    )

    connects_from = db.relationship(
        'ConnectedFrom',
        foreign_keys='ConnectedFrom.user_id',
        backref='user_from',
        lazy=True
    )

    hackathon_loc = db.relationship(
        'Hackathon',
        foreign_keys='Hackathon.location',
        backref='user_id',
        lazy=True
    )

    @property
    def unhashed_password(self):
        raise AttributeError('Cannot view unhashed password!')

    @unhashed_password.setter
    def hash_password(self, unhashed_password):
        self.password = generate_password_hash(unhashed_password)

class Profile(db.Model):
    bp_xfield_bio = db.Column(db.Text)
    bp_xfield_channel = db.Column(db.Integer, db.ForeignKey(''))
    bp_xfield_city = db.Column(db.Integer, db.ForeignKey(''))
    bp_xfield_country = db.Column(db.Integer, db.ForeignKey(''))
    bp_xfield_first_name = db.Column(db.String(50))
    bp_xfield_interests = db.Column(db.Integer, db.ForeignKey(''))
    bp_xfield_last_name = db.Column(db.String(50))
    bp_xfield_location = db.Column(db.Integer, db.ForeignKey(''))
    bp_xfield_name = db.Column(db.String(50))
    bp_xfield_news = db.Column(db.String(50))
    bp_xfield_organization = db.Column(db.Integer, db.ForeignKey(''))
    bp_xfield_participating_hack_location = db.Column(db.Integer, db.ForeignKey(''))
    bp_xfield_profile_video = db.Column(db.String(50))
    bp_xfield_project_outcomes_i_care_about = db.Column()
    bp_xfield_project_outcomes_i_like = db.Column()
    bp_xfield_quote = db.Column(db.String(50))
    bp_xfield_skills = db.Column(db.Integer, db.ForeignKey(''))
    bp_xprofile_visibility_levels = db.Column(db.Integer, db.ForeignKey(''))
