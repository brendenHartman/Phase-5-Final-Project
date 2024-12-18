#!/usr/bin/env python3
from flask import request, session
from flask_restful import Resource
from config import app, db, api
from models import User, Animal, Enclosure, Achievement, Complete

class CheckSession(Resource):
    def get(self):
        if session.get('user_id'):
            print(session)
            user = User.query.filter_by(id = session['user_id']).first()
            return user.to_dict(), 200
        else:
            return {'error': 'no'}, 401

class Users(Resource):
    def patch(self):
        userId = request.get_json()['userId']
        cash = request.get_json()['cash']
        type = request.get_json()['type']
        user = User.query.filter_by(id=userId).first()
        if type == 'add':
            user.cash += cash
        if type == 'subtract':
            user.cash = user.cash - cash
        db.session.commit()
        return user.to_dict(), 200
    def post(self):
        username = request.get_json()['username']
        userExist = User.query.filter_by(username=username).first()
        if userExist:
            return {'error': 'username in use'}, 401
        else: 
            user = User(
                username=request.get_json()['username'],
                password=request.get_json()['password'],
                cash=1000,
            )
            enclosureStarterPackage = []
            enc1=Enclosure(type='rabbit',price=0,num_animals=0,purchased=False,animal_price=250,user=user)
            enclosureStarterPackage.append(enc1)
            enc2=Enclosure(type='pig',price=500,num_animals=0,purchased=False,animal_price=500,user=user)
            enclosureStarterPackage.append(enc2)
            enc3=Enclosure(type='penguin',price=1000,num_animals=0,purchased=False,animal_price=1000,user=user)
            enclosureStarterPackage.append(enc3)
            enc4=Enclosure(type='parrot',price=2000,num_animals=0,purchased=False,animal_price=2000,user=user)
            enclosureStarterPackage.append(enc4)
            enc5=Enclosure(type='bear',price=4000,num_animals=0,purchased=False,animal_price=4000,user=user)
            enclosureStarterPackage.append(enc5)
            enc6=Enclosure(type='panther',price=8000,num_animals=0,purchased=False,animal_price=8000,user=user)
            enclosureStarterPackage.append(enc6)
            enc7=Enclosure(type='ostrich',price=16000,num_animals=0,purchased=False,animal_price=16000,user=user)
            enclosureStarterPackage.append(enc7)
            enc8=Enclosure(type='lion',price=32000,num_animals=0,purchased=False,animal_price=32000,user=user)
            enclosureStarterPackage.append(enc8)
            db.session.add_all(enclosureStarterPackage)
            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id
            return user.to_dict(), 201

class Login(Resource):
    def post(self):
        user = User.query.filter_by(username=request.get_json()['username']).first()
        if user:
            session['user_id'] = user.id
            return user.to_dict(), 201
        else:
            return {'error': 'no'}, 401

class Enclosures(Resource):
    def get(self):
        enclosures = Enclosure.query.all()
        enclosuresDict = [enclosure.to_dict() for enclosure in enclosures]
        return enclosuresDict, 200
    def patch(self):
        enclosureId = request.get_json()['enclosureId']
        enclosure = Enclosure.query.filter_by(id=enclosureId).first()
        enclosure.purchased = True
        db.session.commit()
        return enclosure.to_dict(), 201

class Animals(Resource):
    def get(self):
        animals = Animal.query.all()
        animalsDict = [animal.to_dict() for animal in animals]
        return animalsDict, 200
    def post(self):
        user = User
        type = request.get_json()['type']
        price = request.get_json()['price']
        enclosureId = request.get_json()['enclosureId']
        enclosure  = Enclosure.query.filter_by(id=enclosureId).first()
        userId = request.get_json()['userId']
        user  = User.query.filter_by(id=userId).first()
        animals = []
        animal1 = Animal(name='',type=type,price=price,enclosure=enclosure,user=user,purchased=False)
        animals.append(animal1)
        animal2 = Animal(name='',type=type,price=price,enclosure=enclosure,user=user,purchased=False)
        animals.append(animal2)
        animal3 = Animal(name='',type=type,price=price,enclosure=enclosure,user=user,purchased=False)
        animals.append(animal3)
        animal4 = Animal(name='',type=type,price=price,enclosure=enclosure,user=user,purchased=False)
        animals.append(animal4)
        db.session.add_all(animals)
        db.session.commit()
        animalsDict = [animal.to_dict() for animal in animals]
        return animalsDict, 200
    def patch(self):
        animalId = request.get_json()['animalId']
        animal = Animal.query.filter_by(id=animalId).first()
        enclosureID = animal.enclosure_id
        enclosure = Enclosure.query.filter_by(id=enclosureID).first()
        enclosure.num_animals += 1
        animal.purchased  = True
        db.session.commit()
        return animal.to_dict(), 200

class SignOut(Resource):
    def get(self):
        if session['user_id']:
            session['user_id'] = None
            return 204
        else:
            return {'error': 'no session user'}, 401

api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Enclosures, '/enclosures', endpoint='enclosures')
api.add_resource(Animals, '/animals', endpoint='animals')
api.add_resource(Users, '/users', endpoint='users')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(SignOut, '/signout', endpoint='signout')

app.secret_key = "ElbieJay22"
if __name__ == '__main__':
    app.run(port=5555, debug=True)