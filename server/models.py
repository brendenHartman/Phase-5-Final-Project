from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db


class User(db.Model, SerializerMixin):
    __tablename__ =  'users'

    serialize_rules =  ('-achievements.user', '-animals.user', '-enclosures.user')

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String)
    password = db.Column(db.String)
    cash =  db.Column(db.Integer)

    animals = db.relationship("Animal", back_populates = 'user')
    enclosures  = db.relationship("Enclosure", back_populates = 'user')
    achievements = db.relationship("Achievement", back_populates = "users")

    def  __repr__(self):
        return f'[User: {self.username}, pass: {self.password} cash: {self.cash}]'


#==========================================================================


class Animal(db.Model,SerializerMixin):
    __tablename__ = 'animals'

    serialize_rules = ('-user.animals', '-enclosure.animals')

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    type = db.Column(db.String)
    gender  = db.Column(db.String)
    price = db.Column(db.Integer)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', back_populates = 'animals')

    enclosure_id = db.Column(db.Integer, db.ForeignKey('enclosures.id'))
    enclosure  = db.relationship('Enclosure', back_populates = "animals")

    def __repr__(self):
        return f'[{self.type} {self.id}: {self.name}  {self.gender}]'
    

#==========================================================================


class Enclosure(db.Model, SerializerMixin):
    __tablename__ = 'enclosures'

    serialize_rules = ('-animals.enclosure', '-user.enclosures')

    id = db.Column(db.Integer, primary_key = True)
    type = db.Column(db.String)
    price =  db.Column(db.Integer)
    income = db.Column(db.Integer)
    num_animals = db.Column(db.Integer)
    purchased = db.Column(db.Boolean)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', back_populates = 'enclosures')
    animals = db.relationship('Animal', back_populates = 'enclosure')

    def __repr__(self):
        return f'[Enclosure {self.id}: Holds {self.num_animals} {self.type}, Price: {self.price}, Purchased: {self.purchased}]'


#==========================================================================


class Achievement(db.Model, SerializerMixin):
    __tablename__ = 'achievements'

    serialize_rules = ('-user.achievements')

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    reward = db.Column(db.Integer)

    users = db.relationship('User', back_populates = 'achievements')

    def __repr__(self):
        return f'[{self.name}: {self.description} reward: {self.reward}]'
