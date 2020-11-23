import json, falcon
# import app.db as db

class Resource(object):
    
    def on_get(self, req, resp):
        doc = {
                'images': [ { 'href': '/images/1eaf6ef1-7f2d-4ecc-a8d5-6e8adba7cc0e.png' } ]
                }
        resp.body = json.dumps(doc, ensure_ascii=False)
        resp.status = falcon.HTTP_200

class DataPage(object):
    def on_post(self, req, resp):
        time = req.get_param('time')
        food = req.get_param('food')
        location = req.get_param('location')
        number = req.get_param('number')
        amount = req.get_param('amount')
        resp.status = falcon.HTTP_200

    def on_get(self, req, resp): 
        # TODO add viewing data
        resp.status = falcon.HTTP_200

