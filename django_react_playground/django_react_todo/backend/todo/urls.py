from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import TodoView

router = DefaultRouter()
router.register("todos", TodoView, basename="todo")

urlpatterns = [
    path("", include(router.urls)),
]
