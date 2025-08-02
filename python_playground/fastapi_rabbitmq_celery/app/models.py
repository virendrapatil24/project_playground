from pydantic import BaseModel


class Task(BaseModel):
    message: str
