from django.shortcuts import render
from rest_framework import generics, viewsets
from . models import *
from . serializer import *
from rest_framework.response import Response

# Create your views here.
class InviteeViewSet(viewsets.ModelViewSet):
    queryset = React.objects.all().order_by('invitee')
    serializer_class = ReactSerializer
    
class ReactView(generics.ListCreateAPIView):
    queryset = React.objects.all()
    serializer_class = ReactSerializer

    def get_serializer(self, *args, **kwargs):
        return super().get_serializer(*args, **kwargs)
    
    def get(self, request):
        queryset = React.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)