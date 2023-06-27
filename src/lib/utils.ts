import {PUBLIC_BASE_URL} from '$env/static/public';
import {DEFAULT_FILE_NAME} from '$lib/consts';

export const canonicalUrl = (route: string) => `${PUBLIC_BASE_URL}${route}`;

export const fileNameFromHeaders = (headers: Headers) => {
  const contentDisposition = headers.get(
    'content-disposition'
  );
  return contentDisposition
    ? contentDisposition
        .split(';')
        .find(part => part.trim().startsWith('filename='))
        ?.split('=')[1]
        ?.trim() || DEFAULT_FILE_NAME
    : DEFAULT_FILE_NAME;
}