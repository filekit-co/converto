import {PUBLIC_FILE_API_URL, PUBLIC_IMG_API_URL} from '$env/static/public';
import type { fileUploadData } from "@components/FileUploaders/types";
import type { ImageType } from '$lib/types';

export async function fetchToY(data: fileUploadData, outType: string) {
  return Promise.all(
    data.map(([file]) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('out_type', outType)

      return fetch(`${PUBLIC_FILE_API_URL}/images/convert`, {
        method: 'POST',
        headers: {
          'Access-Control-Expose-Headers': 'Content-Disposition'
        },
        body: formData
      });
    })
  );
}
 
export async function fetchRemoveImageFile(imgFile: ImageType) {
  const formData = new FormData();
  formData.append('image', imgFile);

  try {
    const response = await fetch(`${PUBLIC_IMG_API_URL}/bg/remove`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });

    const blob = await response.blob();
    const file = new File([blob], 'Result_Image', {type: blob.type});
    const resultImageURL = URL.createObjectURL(blob);
    const resultFileURL = URL.createObjectURL(file);

    return { resultImageURL, resultFileURL };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchRemoveresultImageURL(imageURL: string) {
  try {
      const response = await fetch(
        `${PUBLIC_IMG_API_URL}/bg/remove?url=${imageURL}`,
        {
          method: 'GET',
          mode: 'cors'
        }
      );

    const blob = await response.blob();
    const file = new File([blob], 'Result_Image', {type: blob.type});
    const resultImageURL = URL.createObjectURL(blob);
    const resultFileURL = URL.createObjectURL(file);

    return { resultImageURL, resultFileURL };
  } catch(error) {
    console.error(error);
    throw error;
  }
}