# Requirements for the local backend server

`sudo apt-get update`

`sudo apt-get install python3-venv python3-pip gunicorn postgresql`

`sudo service postgresql start`

`sudo -i -u postgres`

`createuser -P --interactive scientistuser`
**Enter password and allow superuser

`psql`

`create database duck;`

`grant all privileges on database duck to scientistuser;`



# Stand up local backend server

`python3 -m venv envs`

`source envs/bin/activate`

`pip3 install -r requirements.txt`

`gunicorn --reload app.app`

Now you can access the backend server at localhost:8000
