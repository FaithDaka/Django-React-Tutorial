# Django-React-Tutorial
A tutorial on developing a reactjs website in a django project. Blog: 

#### Pre-requisites on Linux
- python v3.8+
- node v14+
- pipenv

#### ReactJS App
The react app is developed without cra (create-react-app), therefore webpack and babel packages have to be installed to allow for custom configuration and convert Javascript ES6 to ES5 for browser support.

#### Django Project
The django project wraps the website and creates the dashboard for content management, as well as serves as the backend for database changes. The react app is plugged in as an application to the project.

## Running the project 
- npm install
- npm run build

### Open virtual environment and run:
- pipenv install django 
- pipenv install djangorestframework
- python manage.py migrate
- python manage.py collectstatic
- python manage.py runserver
<br/>
The server should be running. To route to the admin portal: /admin/

### To create a superuser, run:
- python manage.py createsuperuser
<br/>
Fill in the required details which shouldn't be forgotten. Sign into the portal using the created details and now you play around with your environment.

## Running both frontend and backend apps
### In terminal 1, run:
- npm run build
- npm run server
### In terminal 2, with a virtual environment:
- python manage.py collectstatic
- python manage.py runserver
<br/>
This serves the frontend app as the static file and the backend app as the portal.
