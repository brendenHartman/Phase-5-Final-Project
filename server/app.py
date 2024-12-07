#!/usr/bin/env python3
from flask import request, session
from flask_restful import Resource
from config import app, db, api
from models import User, Animal, Enclosure, Achievement, Complete
    
class CheckSession(Resource):
    def get(self):
        if session['user_id']:
            user = User.query.filter_by(id = session['user_id']).first()
            return user.to_dict(), 200
        else:
            return {'error': 'no'}, 401

class Users(Resource):
    def patch(self):
        userId = request.get_json()['userId']
        cash = request.get_json()['cash']
        user = User.query.filter_by(id=userId).first()
        user.cash = cash
        db.session.commit()
        return user.to_dict(), 200
    def post(self):
        pass

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
        animal1 = Animal(name='',type=type,price=price,enclosure=enclosure,user=user)
        animals.append(animal1)
        animal2 = Animal(name='',type=type,price=price,enclosure=enclosure,user=user)
        animals.append(animal2)
        animal3 = Animal(name='',type=type,price=price,enclosure=enclosure,user=user)
        animals.append(animal3)
        animal4 = Animal(name='',type=type,price=price,enclosure=enclosure,user=user)
        animals.append(animal4)
        db.session.add_all(animals)
        db.session.commit()
        animalsDict = [animal.to_dict() for animal in animals]
        return animalsDict, 200

api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Enclosures, '/enclosures', endpoint='enclosures')
api.add_resource(Animals, '/animals', endpoint='animals')
api.add_resource(Users, '/users', endpoint='users')
api.add_resource(Login, '/login', endpoint='login')

app.secret_key = "ElbieJay22"
if __name__ == '__main__':
    app.run(port=5555, debug=True)