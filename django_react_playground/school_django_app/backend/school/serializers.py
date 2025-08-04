from rest_framework import serializers

from .models import ClassRoom, School, Student, Teacher


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"


class ClassRoomSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True, read_only=True)
    primary_teacher = TeacherSerializer(read_only=True)

    class Meta:
        model = ClassRoom
        fields = "__all__"


class SchoolSerializer(serializers.ModelSerializer):
    classes = ClassRoomSerializer(many=True, read_only=True)

    class Meta:
        model = School
        fields = "__all__"
