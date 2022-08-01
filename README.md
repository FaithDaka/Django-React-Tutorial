# Django-React-Tutorial
A tutorial on developing a reactjs website in a django project. Blog: [Medium Article](https://medium.com/@airqo.engineering/airqo-software-engineering-developing-a-react-js-website-in-a-django-project-caefeb8eb0cd)

#### Pre-requisites on Linux
- [python](https://www.python.org/downloads/) v3.8+
- [node](https://nodejs.org/en/download/) v14+
- pipenv

#### ReactJS App
The react app is developed without cra (create-react-app), therefore webpack and babel packages have to be installed to allow for custom configuration and convert Javascript ES6 to ES5 for browser support.

#### Django Project
The django project wraps the website and creates the portal/dashboard for content management, and serves as the backend for database changes. The react app is plugged in as an application to the project.

## Running the project 
```sh
$ npm install
$ npm run build
```

### Open a virtual environment and run:
```sh
$ pipenv install django 
$ pipenv install djangorestframework
$ python manage.py migrate
$ python manage.py collectstatic
$ python manage.py runserver
```
<br/>
The server should be running. To route to the admin portal: /admin/

### To create a superuser, run:
```sh
$ python manage.py createsuperuser
```
<br/>
Fill in the required details which shouldn't be forgotten. Sign into the portal using the created details and now you play around with your environment.

## Running both frontend and backend apps
### In terminal 1, run:
```sh
$ npm run build
$ npm run server
```
### In terminal 2, with a virtual environment:
```sh
$ python manage.py collectstatic
$ python manage.py runserver
```
<br/>
This serves the frontend app as the static bundle and the backend app as the administrative portal.
