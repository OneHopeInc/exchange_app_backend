import click
from falsk.cli import with_appcontext

from .extensions import db
from .tables import User, Profile

@click.command(name='create_tables')
@with_appcontext
def create_tables():
    db.create_all()
