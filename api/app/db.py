import os
from pony.orm import *
 
db = Database() 

connection = db.bind(provider='postgres', host=os.getenv('POSTGRES_HOST', 'localhost'), port='5432', database='duck', user='scientistuser', password='password')

class EnterData(db.Entity):
    time = Required(int)
    food = Required(str)
    location = Required(str)
    number = Required(int)
    amount = Required(float) # Amount of food in grams

def initilize_db():
    db.generate_mapping(create_tables=True, check_tables=True)

def drop_table():
    db.drop_all_tables(with_all_data=True)
