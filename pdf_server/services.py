import io
from typing import List, Optional, Tuple

from infra.docx import DocxConverter


async def convert_to_doc(file_bytes: bytes, file_name:str, input_file_type:str, password: Optional[str]):
    docx_bytes = io.BytesIO()
    with DocxConverter(
            file_name=file_name,
            input_file_type=input_file_type,
            input_file=file_bytes, 
            path_or_stream=docx_bytes,
            password=password
        ) as cv:
            cv.convert()
            filename=cv.doc_name
            return docx_bytes, filename


async def convert_to_docx(file_bytes: bytes, file_name:str,input_file_type:str, password: Optional[str]):
    docx_bytes = io.BytesIO()
    with DocxConverter(
            file_name=file_name,
            input_file_type=input_file_type,
            input_file=file_bytes, 
            path_or_stream=docx_bytes,
            password=password
        ) as cv:
            cv.convert()
            filename=cv.docx_name
            return docx_bytes, filename
