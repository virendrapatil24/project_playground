import time

from celery import Celery

celery_app = Celery(
    "worker", broker="redis://localhost:6379/0", backend="redis://localhost:6379/0"
)


@celery_app.task
def process_task(message: str):
    print("processing the task message")
    time.sleep(10)
    print("processed the task message")
    return f"Processed {message}"
