from config import QUEUE_NAME, redis_client
from fastapi import FastAPI, status
from models import Task

app = FastAPI()


@app.post("/enqueue", status_code=status.HTTP_201_CREATED)
async def add_task(task: Task):
    await redis_client.lpush(QUEUE_NAME, task.model_dump_json())
    return {"status": "queued", "message": task.message}
