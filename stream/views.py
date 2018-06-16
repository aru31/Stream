from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from django.contrib.auth import get_user_model
from .serializers import UserSerializer
from rest_framework import permissions

# Create your views here.


class CreateUserView(generics.ListCreateAPIView):
	model = get_user_model()
	queryset = model.objects.all()
	serializer_class = UserSerializer
	permission_classes = (permissions.AllowAny,)

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):

	model = get_user_model()
	queryset = model.objects.all()
	serializer_class = UserSerializer
