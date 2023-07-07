import { error } from '@sveltejs/kit';
import { imgSlugToHex, imgSlugs } from '$lib/data';
import type { UpdateHeaderProps } from '$lib/types';
import { canonicalUrl, extractExtsFromString } from '$lib/utils';
import type { EntryGenerator } from './$types';
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';


type ConversionProps = {
  xToy: string;
  description: string;
  exts: [string, string];
};

// fix: Error: The following routes were marked as prerenderable, but were not prerendered because they were not found while crawling your app
// https://kit.svelte.dev/docs/page-options#entries
export const entries = (() => {
  return imgSlugs.map((s) => {
    return {slug: s}
  })
}) satisfies EntryGenerator;



export const load = async ({ params, route, locals }) => {
  if (!imgSlugs.includes(params.slug)) throw error(404, 'Not found');

  const { i } = getRuntimeFromLocals(locals)
  
  const [fromExt, toExt] = extractExtsFromString(params.slug)
  const titleAndDescription = i("Convert {fromExt} to {toExt} online for free", {fromExt:fromExt.toUpperCase(), toExt:toExt.toUpperCase()})
  const fontColor = imgSlugToHex[params.slug]
  const xToy: string = `${fromExt.toUpperCase()} to&nbsp;<span style=color:${fontColor};>${toExt.toUpperCase()}</span>`

  const headerProps: UpdateHeaderProps = {
    title: titleAndDescription,
    url: canonicalUrl(route.id),
    description: titleAndDescription,
    keywords: i("image, convert {fromExt} to {toExt}, {fromExt}, {toExt}, free, online, File Converter", {fromExt, toExt})
  };
  return {
    headerProps,
    xToy, 
    description: titleAndDescription,
    exts: [fromExt, toExt]
  } as ConversionProps
}
