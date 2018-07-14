from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from django.contrib.auth import get_user_model
from .serializers import UserSerializer, UserDetailSerializer
from rest_framework import permissions
from django.views import generic
from django.urls import reverse_lazy
from django.views.generic.edit import UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin

# Create your views here.

class AdminStaffRequiredMixin(LoginRequiredMixin, UserPassesTestMixin):

    login_url = '/admin/login/?next=/admin/'
    
    def test_func(self):
        return self.request.user.is_superuser or self.request.user.is_staff

class CreateUserView(generics.ListCreateAPIView):
	model = get_user_model()
	queryset = model.objects.all()
	serializer_class = UserSerializer
	permission_classes = (permissions.AllowAny,)


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):

	model = get_user_model()
	queryset = model.objects.all()
	serializer_class = UserDetailSerializer
	permission_classes = (permissions.AllowAny,)

class AdminView(AdminStaffRequiredMixin, generic.ListView):
	template_name = 'stream/admin.html'
	context_object_name = 'users'

	def get_queryset(self):
		model = get_user_model()
		return model.objects.all()


class AdminUpdateView(AdminStaffRequiredMixin, UpdateView):
	model = get_user_model()
	fields = ['is_active']
	template_name = 'stream/user_update.html'
	success_url = reverse_lazy('admin')
