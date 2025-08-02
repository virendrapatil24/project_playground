from fastapi import FastAPI, status
from models import Task
from tasks import process_task

app = FastAPI()


@app.post("/send_task", status_code=status.HTTP_201_CREATED)
def send_task(task: Task):
    process_task.delay(task.message)
    return {"status": "queued", "message": task.message}


# start rabbitmq -> docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

# start redis -> redis-server

# start celery -> celery -A celery_worker.celery_app worker --loglevel=info

# start fastapi -> uvicorn main:app --reload
