from typing import Annotated, Optional

from fastapi import APIRouter, File, Response, UploadFile, status

from consts import get_mimetype
from infra.pdf import convert_bytes_to_pdf
from utils import out_filename

router = APIRouter(tags=["to-pdf"])


@router.post(
        path="/xps-to-pdf",
        summary="Convert to pdf file from xps",
        description="Convert a xps file to pdf with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def xps_to_pdf(
        file: Annotated[UploadFile, File(..., media_type=get_mimetype('.xps'))],
    ):
    file_bytes = await file.read()
    filename = out_filename(file.filename, '.xps', '.pdf')
    pdf_bytes = convert_bytes_to_pdf(file_bytes, '.xps')
    
    return Response(
        content=pdf_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={filename}'
            },
        media_type=get_mimetype('.pdf'),
    )



@router.post(
        path="/epub-to-pdf",
        summary="Convert to pdf file from epub",
        description="Convert a epub file to pdf with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def epub_to_pdf(
        file: Annotated[UploadFile, File(..., media_type=get_mimetype('.epub'))],
    ):
    file_bytes = await file.read()
    filename = out_filename(file.filename, '.epub', '.pdf')
    pdf_bytes = convert_bytes_to_pdf(file_bytes, '.epub')
    
    return Response(
        content=pdf_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={filename}'
            },
        media_type=get_mimetype('.pdf'),
    )


@router.post(
        path="/oxps-to-pdf",
        summary="Convert to pdf file from oxps",
        description="Convert a oxps file to pdf with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def oxps_to_pdf(
        file: Annotated[UploadFile, File(..., media_type=get_mimetype('.oxps'))],
    ):
    file_bytes = await file.read()
    filename = out_filename(file.filename, '.oxps', '.pdf')
    pdf_bytes = convert_bytes_to_pdf(file_bytes, '.oxps')
    
    return Response(
        content=pdf_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={filename}'
            },
        media_type=get_mimetype('.pdf'),
    )

@router.post(
        path="/cbz-to-pdf",
        summary="Convert to pdf file from cbz",
        description="Convert a cbz file to pdf with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def cbz_to_pdf(
        file: Annotated[UploadFile, File(..., media_type=get_mimetype('.cbz'))],
    ):
    file_bytes = await file.read()
    filename = out_filename(file.filename, '.cbz', '.pdf')
    pdf_bytes = convert_bytes_to_pdf(file_bytes, '.cbz')
    
    return Response(
        content=pdf_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={filename}'
            },
        media_type=get_mimetype('.pdf'),
    )

@router.post(
        path="/fb2-to-pdf",
        summary="Convert to pdf file from fb2",
        description="Convert a fb2 file to pdf with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def fb2_to_pdf(
        file: Annotated[UploadFile, File(..., media_type=get_mimetype('.fb2'))],
    ):
    file_bytes = await file.read()
    filename = out_filename(file.filename, '.fb2', '.pdf')
    pdf_bytes = convert_bytes_to_pdf(file_bytes, '.fb2')
    
    return Response(
        content=pdf_bytes,
        headers={
            'Content-Disposition': f'attachment; filename={filename}'
            },
        media_type=get_mimetype('.pdf'),
    )