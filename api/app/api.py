import json, falcon
import app.db as db

db.initialize_db()
class DataPage(object):
    def on_post(self, req, resp):
        raw_json = json.load(req.bounded_stream)
        time = raw_json['time']
        food = raw_json['food']
        location = raw_json['location']
        number = raw_json['number']
        amount = raw_json['amount']
        #location = req.get_param('location')
        #number = req.get_param('number')
        #amount = req.get_param('amount')
        addDuck = db.add_duck(time, food, location, number, amount)
        if addDuck == True:
            resp.status = falcon.HTTP_200
            
        else:
            resp.status = falcon.HTTP_401

    def on_get(self, req, resp): 
        ducks = db.get_all_ducks()
       
        resp.status = falcon.HTTP_200
        resp.body = json.dumps(ducks)

