import asyncio
import logging
from typing import Annotated, List

from fastapi import APIRouter, File, Form, Response, UploadFile, status

from consts import get_mimetype
from exceptions import NotEnoughFiles
from infra import pdf, zzip
from services import split_pdf_ranges

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
    pdf_bytes = pdf.encrypt_pdf(file_bytes, ro_password=password, rw_password=password)
    
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
    pdf_bytes = pdf.decrypt_pdf(file_bytes, password)
    
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

    out_bytes = pdf.add_a_watermark(pdf_bytes, watermark_bytes, overlay)
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

    out_bytes = pdf.add_a_logo(pdf_bytes, logo_bytes)
    return Response(
        content=out_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={pdf_file.filename}'
            },
        media_type=get_mimetype('.pdf'),
    )



@router.post(
        path="/merge",
        summary="Merge pdfs into a pdf",
        status_code=status.HTTP_200_OK,
        )
async def merge_pdfs(
        pdf_files: List[UploadFile] = File(..., media_type=get_mimetype('.pdf')),
    ):
    if len(pdf_files) <= 1:
        raise NotEnoughFiles()
    
    file_name = 'merged.pdf'
    files = await asyncio.gather(
        *(f.read() for f in pdf_files)
    )
    out_bytes = await pdf.merge_pdfs(files)

    return Response(
        content=out_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={file_name}'
            },
        media_type=get_mimetype('.pdf'),        
    )

@router.post(
        path="/split",
        summary="Split a pdf to list of pdfs",
        status_code=status.HTTP_200_OK,
        )
async def split_to_pdfs(
        pdf_file: Annotated[UploadFile, File(..., media_type=get_mimetype('.pdf'))],
        page_range: str = Form(...),
    ):
    # 1. parse input
    file_byte = await pdf_file.read()
    splitted_page_range: List[str] = page_range.split(',') 
    ranges = await split_pdf_ranges(splitted_page_range)

    # 2. split pdf to pdfs
    doc = await pdf.adocument(file_byte, 'pdf')
    out_files: List[bytes] = await asyncio.gather(
        *(pdf.split_pdf(doc, start, end) for (start, end) in ranges)
    )
    doc.close()

    # 3. zip pdfs bytes
    zip_file_bytes = await zzip.zip_files(out_files, file_names=splitted_page_range)
    file_name = f'{pdf_file.filename}.zip'
    return Response(
        content=zip_file_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={file_name}'
            },
        media_type=get_mimetype('.zip'),
    )


async def split_to_images():
    # https://github.com/pymupdf/PyMuPDF-Utilities/tree/master/examples/convert-image
    ...    


async def anonymize_pdf():
    # https://github.com/pymupdf/PyMuPDF-Utilities/tree/master/examples/anonymize-document
    ...



async def rotate_pdf():
    # https://pymupdf.readthedocs.io/en/latest/the-basics.html#rotating-a-pdf
    ...

async def extract_text():
    # https://github.com/pymupdf/PyMuPDF-Utilities/tree/master/text-extraction
    ...
    