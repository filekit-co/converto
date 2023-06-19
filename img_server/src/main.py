
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import background, greet
from app.config import get_config

app = FastAPI(title='Converto img server')


cfg = get_config()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

routers = [
    greet.router,
    background.router,
]
for router in routers:
    app.include_router(router)



if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8080, reload=True)

