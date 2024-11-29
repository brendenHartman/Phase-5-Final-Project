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
        items = []
        brenden = User(username='brendenHart', password='Hartman123', cash=1000)
        items.append(brenden)
        rabbitEnclosure = Enclosure(type='rabbit',price=0,num_animals=0,purchased=False,user=brenden)
        items.append(rabbitEnclosure)
        pigEnclosure = Enclosure(type='pig',price=500,num_animals=0,purchased=True,user=brenden)
        items.append(pigEnclosure)
        db.session.add_all(items)
        db.session.commit()
