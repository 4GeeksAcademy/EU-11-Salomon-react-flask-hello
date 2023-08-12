"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required


api = Blueprint('api', __name__)

# @api.route('/token', methods=['POST'])
# def create_token():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     if email != "test" or password != "test":
#         return jsonify({"msg": "Bad username or password"}), 401
    
#     access_token = create_access_token(identify=username)
#     return jsonify(access_token=access_token)


@api.route('/login', methods=['POST'])
def login():
    data = request.json
    print(data)

    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if not user:
        return jsonify({"message": "incorrect email or password"}), 400
    access_token = create_access_token(identity=user.id)

    return jsonify({"token": access_token, "user":user.serialize()}), 200

@api.route('user/<int:id>', methods=['GET'])
@jwt_required()
def get_user(id):
    user = User.query.get(id)
    return jsonify(user.serialize())


@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    data = [user.serialize() for user in users]
    
    return jsonify(data), 200

@api.route('/user', methods=['POST'])
def create_user():
    data = request.json
    user = User(name=data.get('name'), last_name=data.get('lastName'), email=data.get('email'), password=data.get('password'))
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "everything ok"}), 200
