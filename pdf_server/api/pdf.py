import io
import mimetypes
from typing import Annotated, List, Optional

from fastapi import APIRouter, File, Form, Response, UploadFile, status
from fastapi.responses import FileResponse, StreamingResponse

from infra import DocxConverter

router = APIRouter(prefix='/pdf')
mimetypes.init()

docx_mimetype = mimetypes.types_map.get(
    '.docx', 
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
)


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
    
    with DocxConverter(
        file_name=file.filename, 
        pdf_file=file_bytes, 
        password=password
    ) as cv:
        docx_bytes = io.BytesIO()
        cv.convert()
        docx, docx_filename = cv.make_docx()
        docx.save(docx_bytes)

        return Response(
            content=docx_bytes,
            headers={
                'Content-Disposition': f'attachment; filename={docx_filename}'
            },
            media_type=docx_mimetype,
        )
