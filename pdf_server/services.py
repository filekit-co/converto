import io
import logging
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


async def split_pdf_ranges(page_ranges: List[str]) -> List[Tuple[int, ...]]:
    """split pdf ranges

    Args:
        page_ranges (List[str])
            1. sub range case  ['1-3','4','5','6','7-10']
            2. one by one case [1,2,3,4,5,6,7,8,9,10]
    """

    ranges = []
    for item in page_ranges:
        if '-' in item:
            start, end = map(int, item.split('-'))
        else:
            start = end = int(item)
        ranges.append((start, end))
    return ranges
