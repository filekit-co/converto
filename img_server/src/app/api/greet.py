from datetime import datetime

from fastapi import APIRouter, Request, status

from app.config import get_config

router = APIRouter()
cfg = get_config()

@router.get("/")
async def greet(request: Request):
    current_time = datetime.utcnow()
    return {'message':f"Converto API Server ({cfg.phase}) 🤖(UTC: {current_time.strftime('%Y.%m.%d %H:%M:%S')})"}


@router.get("/ping", status_code=status.HTTP_200_OK)
async def pong():
    return {"ping": "pong!"}

