from django.db.models import Count
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action

from .models import ClassRoom, School, Student, Teacher
from .serializers import (
    ClassRoomSerializer,
    SchoolSerializer,
    StudentSerializer,
    TeacherSerializer,
)

# Create your views here.


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class ClassRoomViewSet(viewsets.ModelViewSet):
    queryset = ClassRoom.objects.all()
    serializer_class = ClassRoomSerializer

    @action(detail=False, methods=["get"])
    def large_classes(self, request):
        classes = ClassRoom.objects.annotate(num_students=Count("students")).filter(
            num_students__gt=50
        )
        serializer = self.get_serializer(classes, many=True)
        return Response(serializer.data)


class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
