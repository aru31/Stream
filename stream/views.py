from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from django.contrib.auth import get_user_model
from .serializers import UserSerializer, UserDetailSerializer
from rest_framework import permissions
from django.views import generic

# Create your views here.


class CreateUserView(generics.ListCreateAPIView):
	model = get_user_model()
	queryset = model.objects.all()
	serializer_class = UserSerializer
	permission_classes = (permissions.AllowAny,)


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):

	model = get_user_model()
	queryset = model.objects.all()
	serializer_class = UserDetailSerializer


class AdminView(generic.ListView):
	template_name = 'stream/admin.html'
	context_object_name = 'users'

	def get_queryset(self):
		model = get_user_model()
		return model.objects.all()

