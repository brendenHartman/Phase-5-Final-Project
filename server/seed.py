#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Achievement, Animal, Enclosure, Complete

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
    #==========================================================================
        User.query.delete()
        Animal.query.delete()
        Enclosure.query.delete()
        Achievement.query.delete()
    #==========================================================================
        brenden =  User(username='brendenHart', password='Hartman123', cash=1000)
        db.session.add(brenden)
        db.session.commit()
