from django.urls import path
from . import views

urlpatterns = [
	path('user/register/', views.CreateUserView.as_view()),
	path('user/register/<pk>/', views.UserDetailView.as_view()),
	path('admin/', views.AdminView.as_view()),
]
