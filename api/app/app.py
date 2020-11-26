import falcon

from .api import DataPage

api = application = falcon.API()

data = DataPage()
api.add_route('/data', data)



