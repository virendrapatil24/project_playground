from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from .models import Todo
from .serializers import TodoSerializer


# Create your views here.
class TodoView(ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
