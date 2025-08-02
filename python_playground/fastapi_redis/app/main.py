import json
from contextlib import asynccontextmanager

import httpx
from fastapi import FastAPI
from redis import Redis


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.redis = Redis(host="localhost", port=6379)
    app.state.http_client = httpx.AsyncClient()

    yield

    app.state.redis.close()
    await app.state.http_client.aclose()


app = FastAPI(lifespan=lifespan)


@app.get("/entries")
async def get_entries():
    value = app.state.redis.get("entries")
    if not value:
        response = await app.state.http_client.get(
            "https://dummyjson.com/products?limit=10"
        )
        value = response.json()
        app.state.redis.set("entries", json.dumps(value))
    return json.loads(value)
