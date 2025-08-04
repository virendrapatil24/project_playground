from django.db import models

# Create your models here.


class School(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}"


class Teacher(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"


class ClassRoom(models.Model):
    name = models.CharField(max_length=50)
    school = models.ForeignKey(School, related_name="classes", on_delete=models.CASCADE)
    primary_teacher = models.OneToOneField(
        Teacher,
        related_name="primary_class",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )


class Student(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    classroom = models.ForeignKey(
        ClassRoom, related_name="students", on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
