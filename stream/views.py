from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from django.contrib.auth import get_user_model
from .serializers import UserSerializer

# Create your views here.


class CreateUserView(generics.ListCreateAPIView):
	model = get_user_model()
	queryset = model.objects.all()
	serializer_class = UserSerializer


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):

	model = get_user_model()
	queryset = model.objects.all()
	serializer_class = UserSerializer
