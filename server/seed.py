#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Local imports
from app import app
from models import db, User, Achievement, Animal, Enclosure, Complete

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")
    #==========================================================================
        User.query.delete()
        Animal.query.delete()
        Enclosure.query.delete()
        Achievement.query.delete()
    #==========================================================================
        items = []
        brenden = User(username='brendenHart', password='Hartman123', cash=0)
        db.session.add(brenden)
        enclosureStarterPackage = []
        enc1=Enclosure(type='rabbit',price=0,num_animals=0,purchased=False,animal_price=0,user=brenden)
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
        ach1=Achievement(name='Starting Small',description='Purchase your first enclosure!',reward=100)
        achievementsPackage.append(ach1)
        ach2=Achievement(name='Welcome To The Family',description='Purchase your first animal!',reward=100)
        achievementsPackage.append(ach2)
        ach3=Achievement(name='We Need More Space',description='Fill up your first enclosure!',reward=100)
        achievementsPackage.append(ach3)
        ach4=Achievement(name='Cash Collector',description='Have 5,000 in the bank at one time!',reward=1000)
        achievementsPackage.append(ach4)
        ach5=Achievement(name='Cash Hoarder',description='Have 10,000 in the bank at one time!',reward=2500)
        achievementsPackage.append(ach5)
        ach6=Achievement(name='Cash Savant',description='Have 32,000 in the bank at one time!',reward=1000)
        achievementsPackage.append(ach6)
        ach7=Achievement(name='Fully Enclosed',description='Purchase all enclosures!',reward=32000)
        achievementsPackage.append(ach7)
        ach8=Achievement(name='ZooOlogy',description='Purchase all enclosures and animals!',reward=100000000000)
        achievementsPackage.append(ach8)
        db.session.add_all(achievementsPackage)
        db.session.commit()
