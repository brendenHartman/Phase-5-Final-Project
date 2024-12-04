#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports

from models import User, Animal, Enclosure, Achievement, Complete

# Views go here!

class Check_Session(Resource):
    def get(self):
        user = User.query.first()
        return user.to_dict(), 200

class Enclosures(Resource):
    def get(self):
        enclosures = Enclosure.query.all()
        enclosuresDict = [enclosure.to_dict() for enclosure in enclosures]
        return enclosuresDict, 200

class Animals(Resource):
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

api.add_resource(Check_Session, '/check_session', endpoint='check_session')
api.add_resource(Enclosures, '/enclosures', endpoint='enclosures')
api.add_resource(Animals, '/animals', endpoint='animals')
if __name__ == '__main__':
    app.run(port=5555, debug=True)