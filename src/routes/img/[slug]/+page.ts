import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { FileDropOptions } from 'filedrop-svelte';
import type { fileUploadData } from '@components/FileUploaders/types';
import { getImgFetchApi } from '$lib/apis';
import { imgExts, imgSlugToHex, imgSlugs } from '$lib/data';
import type { UpdateHeaderProps } from '$lib/types';
import { canonicalUrl } from '$lib/utils';

type ConversionProps = {
  title: string;
  description: string;
  fetchApi: (data: fileUploadData) => Promise<any>;
  fileDropOptions: FileDropOptions;
};


const fileAccepts = imgExts.filter((x) => x!= 'ps').map((imgExt) => `.${imgExt}`)
const imgFileDropOptions: FileDropOptions = {
  accept: fileAccepts,
  hideInput: true,
  multiple: true
}

function extractExtsFromSlug(slug: string): [string, string] {
  
  const regex = /(\w+)-to-(\w+)/;
  const matches = slug.match(regex);

  // check 3 group i.g [png, to, jpeg]
  if (matches && matches.length === 3) {
    const ext1 = matches[1];
    const ext2 = matches[2];
    return [ext1, ext2];
  }

  throw new Error('Invalid slug format');
}

export const load = (({ params, route }) => {
  if (!imgSlugs.includes(params.slug)) throw error(404, 'Not found');
  
  const [fromExt, toExt] = extractExtsFromSlug(params.slug)
  const titleAndDescription = `Convert ${fromExt.toUpperCase()} to ${toExt.toUpperCase()} online for free`
  const emphasizeColor: string = imgSlugToHex[params.slug]

  const headerProps: UpdateHeaderProps = {
    title: titleAndDescription,
    url: canonicalUrl(route.id),
    description: titleAndDescription,
    keywords: `image, convert ${fromExt} to ${toExt}, ${fromExt}, ${toExt}, free, online, File Converter`
  };
  return {
    headerProps,
    title: `${fromExt.toUpperCase()} to&nbsp;<span class="text-[${emphasizeColor}]">${toExt.toUpperCase()}</span>`,
    description: titleAndDescription,
    fetchApi: getImgFetchApi(fromExt, toExt),
    fileDropOptions: imgFileDropOptions,
  } as ConversionProps
}) satisfies PageLoad;
