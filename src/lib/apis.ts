import {PUBLIC_FILE_API_URL} from '$env/static/public';
import type {FileWithPath} from '$lib/types';


export async function fetchUnlocks(data: [FileWithPath, string][]) {
  
  const results = await Promise.all(
    data.map(([file, password]) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('password', password);

      return fetch(`${PUBLIC_FILE_API_URL}/pdf/decrypt`, {
        method: 'POST',
        headers: {
          'Access-Control-Expose-Headers': 'Content-Disposition'
        },
        body: formData
      });
    })
  );
  
  return results;
}


export async function fetchLocks(data: [FileWithPath, string][]) {
  return undefined
}