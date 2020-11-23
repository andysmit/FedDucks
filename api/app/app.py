import falcon

from .api import Resource, DataPage

api = application = falcon.API()

images = Resource()
api.add_route('/images', images)

data = DataPage()
api.add_route('/data', data)



