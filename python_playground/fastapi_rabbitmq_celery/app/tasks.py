import time

from celery import Celery

celery_app = Celery(
    broker="pyamqp://guest:guest@localhost//", backend="redis://localhost:6379/0"
)


@celery_app.task
def process_task(message: str):
    print("process started")
    time.sleep(10)
    print("process ended")
    return f"{message} task done"
