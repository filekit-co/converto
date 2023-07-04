import {PUBLIC_BASE_URL} from '$env/static/public';
import {DEFAULT_FILE_NAME} from '$lib/data';

export const canonicalUrl = (route: string) => `${PUBLIC_BASE_URL}${route}`;

// i.g. content-disposition: attachment; filename=file (5).pdf 
export const fileNameFromHeaders = (headers: Headers) => {
  const contentDisposition = headers.get(
    'content-disposition'
  );
  return contentDisposition
    ? contentDisposition
        .split(';')
        .map(part => part.trim())
        .find(part => part.startsWith('filename='))
        ?.split('=')[1]
        ?.trim() || DEFAULT_FILE_NAME
    : DEFAULT_FILE_NAME;
}

export function getMockFile() {
  return new File([''], 'filename', {type: 'text/pdf'})
}