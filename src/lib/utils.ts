import {PUBLIC_BASE_URL} from '$env/static/public';
import {DEFAULT_FILE_NAME, languageCodes, type LanguageCode} from '$lib/data';
import {initAcceptLanguageHeaderDetector, initRootSlugDetector} from '$lib/lang-detectors'
import { detectLanguage, type Detector } from '@inlang/sdk-js/detectors';

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

// x-to-y => [x,y]
export function extractExtsFromString(s: string): [string, string] {
  
  const regex = /(\w+)-to-(\w+)/;
  const matches = s.match(regex);

  // check 3 group i.g [png, to, jpeg]
  if (matches && matches.length === 3) {
    const ext1 = matches[1];
    const ext2 = matches[2];
    return [ext1, ext2];
  }

  throw new Error('Invalid slug format');
}

export const detectLanguageOrFallback = async (url: URL |undefined ,headers: Headers | undefined, referenceLanguage: string) => {
  let detectors: Detector[] = [];
  
  if (url) {
    const slugDetector = initRootSlugDetector(url);
    detectors.push(slugDetector)
  }
  if (headers) {
    const acceptLangDetector = initAcceptLanguageHeaderDetector(headers)
    detectors.push(acceptLangDetector)
  }

  
  try {
    const language = await detectLanguage({referenceLanguage, languages: languageCodes, allowRelated: true}, ...detectors)
    console.log(language)
    return languageCodes.includes(language) ? language: referenceLanguage
  } catch (e) {
    console.error(e)  
  } finally {
    return referenceLanguage
  }
}