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

// apple -> Apple
export const toFristCapital = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)


export async function generateUniqueHex(backgroundHex: string, numColors: number) {
  const hexColors: string[] = [];

  const generator = () => {
    let hex;
    do {
      hex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    } while (hex === backgroundHex || hexColors.includes(hex));
    hexColors.push(hex);
  };

  while (hexColors.length < numColors) {
    generator();
  }

  return hexColors;
}