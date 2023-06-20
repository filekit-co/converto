from typing import Annotated, Optional

from fastapi import APIRouter, File, Form, Response, UploadFile, status

import infra
from consts import get_mimetype

router = APIRouter(prefix='/pdf', tags=["pdf-utils"])


@router.post(
        path="/encrypt",
        summary="Encrypt pdf file",
        description="Encrypts a PDF file with a password. The function internally uses a single password, which is used as both the owner_password and user_password.",
        status_code=status.HTTP_200_OK,
        )
async def encrypt_pdf(
        file: Annotated[UploadFile, File(..., media_type=get_mimetype('.pdf'))],
        password:  Annotated[str, Form()],
    ):
    
    file_bytes = await file.read()
    pdf_bytes = infra.encrypt_pdf(file_bytes, ro_password=password, rw_password=password)
    
    return Response(
        content=pdf_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={file.filename}'
            },
        media_type=get_mimetype('.pdf'),
    )



@router.post(
        path="/decrypt",
        summary="Decrypt pdf file",
        description="Dcerypts a PDF file with a owner_password.",
        status_code=status.HTTP_200_OK,
        )
async def decrypt_pdf(
        file: Annotated[UploadFile, File(..., media_type=get_mimetype('.pdf'))],
        password:  Annotated[str, Form()],
    ):
    
    file_bytes = await file.read()
    pdf_bytes = infra.decrypt_pdf(file_bytes, password)
    
    return Response(
        content=pdf_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={file.filename}'
            },
        media_type=get_mimetype('.pdf'),
    )
