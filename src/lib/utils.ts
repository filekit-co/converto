import {PUBLIC_BASE_URL} from '$env/static/public';
import {DEFAULT_FILE_NAME} from '$lib/data';
import { parse } from '@tinyhttp/content-disposition'

export const canonicalUrl = (route: string) => `${PUBLIC_BASE_URL}${route}`;

// i.g. content-disposition: attachment; filename=file (5).pdf 
export const fileNameFromHeaders = (headers: Headers) => {
  const contentDisposition = headers.get('content-disposition');

  if (contentDisposition) {
    const { parameters } = parse(contentDisposition);

    if (parameters && parameters.filename) {
      return parameters.filename;
    }
  }
  return DEFAULT_FILE_NAME;
};

export function getMockFile() {
  return new File([''], 'filename', {type: 'text/pdf'})
}