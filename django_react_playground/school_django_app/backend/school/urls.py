from rest_framework.routers import DefaultRouter

from .views import ClassRoomViewSet, SchoolViewSet, StudentViewSet, TeacherViewSet

router = DefaultRouter()
router.register("schools", SchoolViewSet)
router.register("classes", ClassRoomViewSet)
router.register("teachers", TeacherViewSet)
router.register("students", StudentViewSet)

urlpatterns = router.urls
