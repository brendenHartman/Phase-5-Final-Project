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
        db.session.add(brenden)
        enclosureStarterPackage = []
        enc1=Enclosure(type='rabbit',price=0,num_animals=0,purchased=False,animal_price=250,user=brenden)
        enclosureStarterPackage.append(enc1)
        enc2=Enclosure(type='pig',price=500,num_animals=0,purchased=False,animal_price=500,user=brenden)
        enclosureStarterPackage.append(enc2)
        enc3=Enclosure(type='penguin',price=1000,num_animals=0,purchased=False,animal_price=1000,user=brenden)
        enclosureStarterPackage.append(enc3)
        enc4=Enclosure(type='parrot',price=2000,num_animals=0,purchased=False,animal_price=2000,user=brenden)
        enclosureStarterPackage.append(enc4)
        enc5=Enclosure(type='bear',price=4000,num_animals=0,purchased=False,animal_price=4000,user=brenden)
        enclosureStarterPackage.append(enc5)
        enc6=Enclosure(type='panther',price=8000,num_animals=0,purchased=False,animal_price=8000,user=brenden)
        enclosureStarterPackage.append(enc6)
        enc7=Enclosure(type='ostrich',price=16000,num_animals=0,purchased=False,animal_price=16000,user=brenden)
        enclosureStarterPackage.append(enc7)
        enc8=Enclosure(type='lion',price=32000,num_animals=0,purchased=False,animal_price=32000,user=brenden)
        enclosureStarterPackage.append(enc8)
        db.session.add_all(enclosureStarterPackage)
        db.session.commit()
