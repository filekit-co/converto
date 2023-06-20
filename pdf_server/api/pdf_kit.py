import asyncio
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



@router.post(
        path="/add-watermark",
        summary="Add a watermark to pdf file",
        status_code=status.HTTP_200_OK,
        )
async def add_watermark(
        pdf_file: Annotated[UploadFile, File(..., media_type=get_mimetype('.pdf'))],
        watermark_file: Annotated[UploadFile, File(...)],
        overlay:  Annotated[bool, Form()]=False,
    ):
    pdf_bytes, watermark_bytes = await asyncio.gather(
        pdf_file.read(),
        watermark_file.read()
    )

    out_bytes = infra.add_a_watermark(pdf_bytes, watermark_bytes, overlay)
    return Response(
        content=out_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={pdf_file.filename}'
            },
        media_type=get_mimetype('.pdf'),
    )



@router.post(
        path="/add-logo",
        summary="Add a logo to pdf file",
        status_code=status.HTTP_200_OK,
        )
async def add_logo(
        pdf_file: Annotated[UploadFile, File(..., media_type=get_mimetype('.pdf'))],
        logo_file: Annotated[UploadFile, File(...)],
    ):
    pdf_bytes, logo_bytes = await asyncio.gather(
        pdf_file.read(),
        logo_file.read()
    )

    out_bytes = infra.add_a_logo(pdf_bytes, logo_bytes)
    return Response(
        content=out_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={pdf_file.filename}'
            },
        media_type=get_mimetype('.pdf'),
    )



@router.post(
        path="/",
        summary="",
        status_code=status.HTTP_200_OK,
        )
async def combine_pdfs(
        pdf_files: Annotated[UploadFile, File(..., media_type=get_mimetype('.pdf'))],
    ):
    ...