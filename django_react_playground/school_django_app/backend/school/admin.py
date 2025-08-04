from django.contrib import admin

from .models import ClassRoom, School, Student, Teacher


# Register your models here.
class StudentAdmin(admin.ModelAdmin):
    list_display = ["firstname", "lastname", "classroom"]
    list_filter = ["classroom"]
    search_fields = ["firstname", "lastname"]


class TeacherAdmin(admin.ModelAdmin):
    list_display = ["firstname", "lastname"]
    search_fields = ["firstname", "lastname"]


class ClassRoomAdmin(admin.ModelAdmin):
    list_display = ["name", "school", "primary_teacher"]
    list_filter = ["school"]
    search_fields = ["name"]


class ClassRoomInline(admin.TabularInline):
    model = ClassRoom
    extra = 0


class SchoolAdmin(admin.ModelAdmin):
    list_display = ["name"]
    search_fields = ["name"]
    inlines = [ClassRoomInline]


admin.site.register(Student, StudentAdmin)
admin.site.register(Teacher, TeacherAdmin)
admin.site.register(ClassRoom, ClassRoomAdmin)
admin.site.register(School, SchoolAdmin)
