import aiohttp
import cv2
import numpy as np
from asyncer import asyncify
from fastapi import APIRouter, File, Query, Response, UploadFile, status
from rembg import new_session, remove
from consts import IMAGE_MODEL

router = APIRouter(prefix='/bg')

def preprocess(file_bytes):
    # 파일 바이트를 numpy 배열로 변환
    nparr = np.frombuffer(file_bytes, np.uint8)
    # 이미지로 디코딩
    return cv2.imdecode(nparr, cv2.IMREAD_COLOR)

def im_without_bg(file_bytes) -> Response:
    # 파일 객체에서 바이트 데이터 추출
    preprocessed_img = preprocess(file_bytes)
    img = remove(preprocessed_img, alpha_matting=True, session=new_session(IMAGE_MODEL))
    
    # 이미지를 PNG로 인코딩하여 바이트로 변환
    _, img_encoded = cv2.imencode(".png", img)
    return img_encoded.tobytes()
            


@router.get(
        path="/remove",
        tags=["Background Removal"],
        summary="Remove from URL",
        description="Removes the background from an image obtained by retrieving an URL.",
    )
async def get_index(
        url: str = Query(
            default=..., description="URL of the image that has to be processed."
        ),
    ):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            file_bytes = await response.read()
            processed_image = await asyncify(im_without_bg)(file_bytes)
            return Response(processed_image, media_type="image/png")




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
    processed_image =  await asyncify(im_without_bg)(file_bytes)
    return Response(processed_image, media_type="image/png")
