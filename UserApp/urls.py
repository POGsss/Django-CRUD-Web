from django.urls import path
from .views import get_user, create_user, user_detail

# Create your url patterns here.
urlpatterns = [
    path('', get_user, name='get_user'),
    path('create/', create_user, name='create_user'),
    path('<int:pk>/', user_detail, name='user_detail'),
]