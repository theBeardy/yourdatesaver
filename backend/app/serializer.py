from rest_framework import serializers
from . models import React

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ('id', 'invitee', 'invite_type')