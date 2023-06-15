
import json
import logging
from typing import List

from fastapi import APIRouter, File, Form, Response, UploadFile, status
from rembg import remove

router = APIRouter(prefix='/bg')


async def im_without_bg(content: bytes) -> Response:
    logging.error("####################################")
    logging.error(type(content))
    return Response(
            remove(
                content,
            ),
            media_type="image/png",
    )


@router.post(
        path="/remove",
        summary="Remove from Stream",
        description="Removes the background from an image sent within the request itself.",
        status_code=status.HTTP_200_OK,
        )
async def remove_background(
        image: UploadFile=File(...),
    ):
    file_bytes = await image.read()
    logging.error(file_bytes)
    return await im_without_bg(file_bytes)
