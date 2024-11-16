from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class User(db.Model):
    pass

class Animal(db.Model):
    pass

class Enclosure(db.Model):
    pass

class Achievements(db.Model):
    pass