import base64
import io
import logging
import mimetypes
from typing import Annotated, Optional

from fastapi import APIRouter, File, Form, Response, UploadFile, status

from infra import DocxConverter

router = APIRouter(prefix='/pdf')
mimetypes.init()

docx_mimetype = mimetypes.types_map.get(
    '.docx', 
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
)

async def convert(file_bytes: bytes, file_name:str, password: Optional[str], is_docx=True):
    docx_bytes = io.BytesIO()
    with DocxConverter(
            file_name=file_name, 
            pdf_file=file_bytes, 
            path_or_stream=docx_bytes,
            password=password
        ) as cv:
            cv.convert()
            filename=cv.docx_name if is_docx else cv.doc_name
            return docx_bytes, filename




@router.post(
        path="/to-docx",
        summary="Convert to docx file from PDF",
        description="Convert a pdf file to docx with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def to_docx(
        file: Annotated[UploadFile, File(..., media_type="application/pdf")],
        password:  Annotated[Optional[str], Form()]=None,
    ):
    file_bytes = await file.read()
    docx_bytes, filename = await convert(file_bytes, file.filename, password, is_docx=True)
    
    return Response(
        content=docx_bytes.getvalue(),
        headers={
            'Content-Disposition': f'attachment; filename={filename}'
            },
        media_type=docx_mimetype,
        )



@router.post(
        path="/to-doc",
        summary="Convert to doc file from PDF",
        description="Convert a pdf file to doc with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def to_doc(
        file: Annotated[UploadFile, File(..., media_type="application/pdf")],
        password:  Annotated[Optional[str], Form()]=None,
    ):
    file_bytes = await file.read()
    doc_bytes, filename = await convert(file_bytes, file.filename, password, is_docx=False)
    
    return Response(
        content=doc_bytes.getvalue(),
        headers={
            'Content-Disposition': f'attachment; filename={filename}'
            },
        media_type=docx_mimetype,
    )