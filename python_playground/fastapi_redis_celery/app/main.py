from fastapi import FastAPI, status
from models import Task
from tasks import process_task

app = FastAPI()


@app.post("/send_task", status_code=status.HTTP_201_CREATED)
def add_task(task: Task):
    process_task.delay(task.message)
    return {"status": "queued", "message": task.message}
