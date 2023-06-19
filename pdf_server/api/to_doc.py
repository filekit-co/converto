from typing import Annotated, Optional

from fastapi import APIRouter, File, Form, Response, UploadFile, status

from consts import get_mimetype
from services import convert_to_doc

router = APIRouter(tags=["to-doc"])


@router.post(
        path="/epub-to-doc",
        summary="Convert to doc file from epub",
        description="Convert a epub file to doc with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def epub_to_doc(
        file: Annotated[UploadFile, File(..., media_type=get_mimetype('.epub'))],
        password:  Annotated[Optional[str], Form()]=None,
    ):
    file_bytes = await file.read()
    doc_bytes, filename = await convert_to_doc(file_bytes, file.filename, 'epub',password)
    
    return Response(
        content=doc_bytes.getvalue(),
        headers={
            'Content-Disposition': f'attachment; filename={filename}'
            },
        media_type=get_mimetype('.doc'),
    )


@router.post(
        path="/pdf-to-doc",
        summary="Convert to doc file from PDF",
        description="Convert a pdf file to doc with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def pdf_to_doc(
        file: Annotated[UploadFile, File(..., media_type=get_mimetype('.pdf'))],
        password:  Annotated[Optional[str], Form()]=None,
    ):
    file_bytes = await file.read()
    doc_bytes, filename = await convert_to_doc(file_bytes, file.filename, 'pdf',password)
    
    return Response(
        content=doc_bytes.getvalue(),
        headers={
            'Content-Disposition': f'attachment; filename={filename}'
            },
        media_type=get_mimetype('.doc'),
    )


@router.post(
        path="/xps-to-doc",
        summary="Convert to docx file from xps",
        description="Convert a xps file to docx with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def xps_to_docx(
        file: Annotated[UploadFile, File(..., media_type=get_mimetype('.xps'))],
        password:  Annotated[Optional[str], Form()]=None,
    ):
    file_bytes = await file.read()
    docx_bytes, filename = await convert_to_doc(file_bytes, file.filename, 'xps', password)
    
    return Response(
        content=docx_bytes.getvalue(),
        headers={
            'Content-Disposition': f'attachment; filename={filename}'
            },
        media_type=get_mimetype('.doc'),
        )

