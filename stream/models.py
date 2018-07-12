"""
from django.db import models
from django.contrib.auth import get_user_model

class Profile(models.Model):
	user = models.ForeignKey(get_user_model, on_delete=models.CASCADE)
	bio = models.TextField(max_length=500, blank=True)
	location = models.CharField(max_length=30, blank=True)
	birth_date = models.DateField(null=True, blank=True)
	image = models.ImageField(upload_to='Images/')
"""
