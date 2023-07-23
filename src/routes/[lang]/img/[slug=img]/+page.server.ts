import { error } from '@sveltejs/kit';
import { imgSlugToHex, imgSlugs } from '$lib/data';
import type { UpdateHeaderProps, ConversionProps } from '$lib/types';
import { canonicalUrl, extractExtsFromString } from '$lib/utils';
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';


export const load = async ({ params, route, locals }) => {
  if (!imgSlugs.includes(params.slug)) throw error(404, 'Not found');

  const { i } = getRuntimeFromLocals(locals)
  
  const [from, to] = extractExtsFromString(params.slug)
  const titleAndDescription = i("Convert {fromExt} to {toExt} online for free", {fromExt:from.toUpperCase(), toExt:to.toUpperCase()})
  const fontColor = imgSlugToHex[params.slug]
  const xToy: string = `${from.toUpperCase()} to&nbsp;<span style=color:${fontColor};>${to.toUpperCase()}</span>`
  const keywords: string = i("image, convert {fromExt} to {toExt}, {fromExt}, {toExt}, free, online, File Converter", {fromExt:from, toExt:to})

  const headerProps: UpdateHeaderProps = {
    title: titleAndDescription,
    description: titleAndDescription,
    keywords,
  };
  return {
    headerProps,
    xToy, 
    exts: [from, to]
  } as ConversionProps
}
