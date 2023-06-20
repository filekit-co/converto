
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api import pdf_kit, to_doc, to_docx, to_pdf

app = FastAPI(title='Converto pdf api server')


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

routers = [
    to_doc.router,
    to_docx.router,
    to_pdf.router,
    pdf_kit.router,
]

for router in routers:
    app.include_router(router)


if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8001, reload=True)

