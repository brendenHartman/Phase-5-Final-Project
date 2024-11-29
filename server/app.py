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

class Users(Resource):
    pass

api.add_resource(Check_Session, '/check_session', endpoint='check_session')
api.add_resource(Enclosures, '/enclosures', endpoint='enclosures')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

