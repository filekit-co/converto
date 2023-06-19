from datetime import datetime

from app.config import get_config
from fastapi import APIRouter, Request, status

router = APIRouter()
cfg = get_config()

@router.get("/")
async def greet(request: Request):
    current_time = datetime.utcnow()
    return {'message':f"Converto img Server ({cfg.phase}) 🤖(UTC: {current_time.strftime('%Y.%m.%d %H:%M:%S')})"}


@router.get("/ping", status_code=status.HTTP_200_OK)
async def pong():
    return {"ping": "pong!"}

