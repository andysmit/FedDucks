import os, json
import pandas as pd
from pony.orm import *
 
db = Database() 

connection = db.bind(provider='postgres', host=os.getenv('POSTGRES_HOST', 'localhost'), port='5432', database='duck', user='scientistuser', password='password')

class Duck(db.Entity):
    time = Required(int)
    food = Required(str)
    location = Required(str)
    number = Required(int)
    amount = Required(float) # Amount of food in grams

def initialize_db():
    db.generate_mapping(create_tables=True, check_tables=True)

def drop_table():
    db.drop_all_tables(with_all_data=True)

@db_session()
def get_all_ducks():
    #test = pd.read_sql(Duck.select())
    #test2 = test.to_json()
    #print(test2)
    ducks = list(Duck.select())
    data=[]
    for duck in ducks:
    	item = {"id": duck.id, "time": duck.time, "food": duck.food, "location": duck.location, "number": duck.number, "amount": duck.amount}
    	data.append(item)
    return data

@db_session()
def add_duck(time, food, location, number, amount):
    Duck(time=time, food=food, location=location, number=number, amount=amount)
    return True

