import {PUBLIC_FILE_API_URL} from '$env/static/public';
import type { fileUploadData } from "@components/FileUploaders/types";

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
