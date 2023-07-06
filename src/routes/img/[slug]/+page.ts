import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { imgSlugToHex, imgSlugs } from '$lib/data';
import type { UpdateHeaderProps } from '$lib/types';
import { canonicalUrl, extractExtsFromString } from '$lib/utils';

type ConversionProps = {
  xToy: string;
  description: string;
  exts: [string, string];
};

export const load = (({ params, route }) => {
  if (!imgSlugs.includes(params.slug)) throw error(404, 'Not found');
  
  const [fromExt, toExt] = extractExtsFromString(params.slug)
  const titleAndDescription = `Convert ${fromExt.toUpperCase()} to ${toExt.toUpperCase()} online for free`
  const fontColor = imgSlugToHex[params.slug]
  const xToy: string = `${fromExt.toUpperCase()} to&nbsp;<span style=color:${fontColor};>${toExt.toUpperCase()}</span>`

  const headerProps: UpdateHeaderProps = {
    title: titleAndDescription,
    url: canonicalUrl(route.id),
    description: titleAndDescription,
    keywords: `image, convert ${fromExt} to ${toExt}, ${fromExt}, ${toExt}, free, online, File Converter`
  };
  return {
    headerProps,
    xToy, 
    description: titleAndDescription,
    exts: [fromExt, toExt]
  } as ConversionProps
}) satisfies PageLoad;
