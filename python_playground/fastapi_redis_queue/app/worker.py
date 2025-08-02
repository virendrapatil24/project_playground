import asyncio
import json

from config import QUEUE_NAME, redis_client
from models import Task


async def process_task(task: Task):
    print("processing the task")
    await asyncio.sleep(10)
    print("processed the task successfully")


async def worker():
    while True:
        result = await redis_client.brpop(QUEUE_NAME)
        if result:
            _, task_json = result
            task = json.loads(task_json)
            await process_task(task)


if __name__ == "__main__":
    print("Worker started. Waiting for tasks...")
    asyncio.run(worker())
