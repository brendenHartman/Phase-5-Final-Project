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
        achievementsPackage = []
        ach1=Achievement(name='1',description='1',reward=1000)
        achievementsPackage.append(ach1)
        ach2=Achievement(name='2',description='2',reward=1000)
        achievementsPackage.append(ach2)
        ach3=Achievement(name='3',description='3',reward=1000)
        achievementsPackage.append(ach3)
        ach4=Achievement(name='4',description='4',reward=1000)
        achievementsPackage.append(ach4)
        ach5=Achievement(name='5',description='5',reward=1000)
        achievementsPackage.append(ach5)
        ach6=Achievement(name='6',description='6',reward=1000)
        achievementsPackage.append(ach6)
        ach7=Achievement(name='7',description='7',reward=1000)
        achievementsPackage.append(ach7)
        ach8=Achievement(name='8',description='8',reward=1000)
        achievementsPackage.append(ach8)
        db.session.add_all(achievementsPackage)
        db.session.commit()
