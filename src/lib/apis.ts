import {PUBLIC_FILE_API_URL} from '$env/static/public';
import type {FileWithPath} from '$lib/types';

async function fetchWithPassword(url: string, data: [FileWithPath, string][]) {
  return Promise.all(
    data.map(([file, password]) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('password', password);

      return fetch(url, {
        method: 'POST',
        headers: {
          'Access-Control-Expose-Headers': 'Content-Disposition'
        },
        body: formData
      });
    })
  );
}

export const fetchUnlocks = async (data: [FileWithPath, string][]) =>  await fetchWithPassword(`${PUBLIC_FILE_API_URL}/pdf/decrypt`, data)
export const fetchLocks = async (data: [FileWithPath, string][]) =>  await fetchWithPassword(`${PUBLIC_FILE_API_URL}/pdf/encrypt`, data)
