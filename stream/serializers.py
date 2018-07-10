from rest_framework import serializers
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):

	password = serializers.CharField(required=True, write_only=True)
	first_name = serializers.CharField(required=True)
	email = serializers.CharField(required=True)
	confirmPassword = serializers.CharField(required=True, write_only=True) ## Text For Debugging Purposes ##

	def create(self, validated_data):
		if validated_data['password'] != validated_data['confirmPassword']:
			raise serializers.ValidationError("Please Confirm password Correctly")
		else:
			user = get_user_model().objects.create(
				username = validated_data['username'],	
				first_name = validated_data['first_name'],
				email = validated_data['email'],
				is_active=False,  ##### Account Disabled ###### Admin(superuser) will enable it ###
			)
			user.set_password(validated_data['password'])
			user.save()
			return user

	class Meta:

		model = get_user_model()
		fields = ('first_name', 'username', 'is_active', 'email', 'password', 'confirmPassword')


class UserDetailSerializer(serializers.ModelSerializer):

	class Meta:

		model = get_user_model()
		fields = ('first_name', 'is_active')
