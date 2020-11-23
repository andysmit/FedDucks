# Stand up local backend server

`python3 -m venv envs`

`source envs/bin/activate`

`pip3 install -r requirements.txt`

`gunicorn --reload app.app`

Now you can access the backend server at localhost:8000
