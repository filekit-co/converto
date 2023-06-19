from typing import Annotated, Optional

from fastapi import APIRouter, File, Form, Response, UploadFile, status

from consts import get_mimetype
from services import convert_to_doc, convert_to_docx

router = APIRouter(prefix='/xps')

@router.post(
        path="/to-doc",
        summary="Convert to docx file from xps",
        description="Convert a xps file to docx with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def to_docx(
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



@router.post(
        path="/to-docx",
        summary="Convert to docx file from xps",
        description="Convert a xps file to docx with optional fields",
        status_code=status.HTTP_200_OK,
        )
async def to_docx(
        file: Annotated[UploadFile, File(..., media_type=get_mimetype('.xps'))],
        password:  Annotated[Optional[str], Form()]=None,
    ):
    file_bytes = await file.read()
    docx_bytes, filename = await convert_to_docx(file_bytes, file.filename, 'xps',password)
    
    return Response(
        content=docx_bytes.getvalue(),
        headers={
            'Content-Disposition': f'attachment; filename={filename}'
            },
        media_type=get_mimetype('.docx'),
        )
