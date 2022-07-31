from django.urls import path, re_path
from django.views.generic.base import TemplateView
from . import views

# Create your tests here.
urlpatterns = [
    path('', views.index),
    re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name="index.html"))
]