
import uvicorn
from api import cbz_doc, epub_doc, oxps_doc, pdf_doc, xps_doc
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title='Converto pdf api server')


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

routers = [
    pdf_doc.router,
    xps_doc.router,
    epub_doc.router,
]

for router in routers:
    app.include_router(router)


if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8001, reload=True)

