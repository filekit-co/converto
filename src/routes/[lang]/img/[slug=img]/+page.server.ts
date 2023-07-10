import { error } from '@sveltejs/kit';
import { imgSlugToHex, imgSlugs } from '$lib/data';
import type { UpdateHeaderProps, ConversionProps } from '$lib/types';
import { canonicalUrl, extractExtsFromString } from '$lib/utils';
import type { EntryGenerator } from './$types';
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';


// fix: Error: The following routes were marked as prerenderable, but were not prerendered because they were not found while crawling your app
// https://kit.svelte.dev/docs/page-options#entries
// export const entries = (() => {
//   return imgSlugs.map((s) => {
//     return {slug: s}
//   })
// }) satisfies EntryGenerator;


export const load = async ({ params, route, locals }) => {
  if (!imgSlugs.includes(params.slug)) throw error(404, 'Not found');

  const { i } = getRuntimeFromLocals(locals)
  
  const [from, to] = extractExtsFromString(params.slug)
  const titleAndDescription = i("Convert {fromExt} to {toExt} online for free", {fromExt:from.toUpperCase(), toExt:to.toUpperCase()})
  const fontColor = imgSlugToHex[params.slug]
  const xToy: string = `${from.toUpperCase()} to&nbsp;<span style=color:${fontColor};>${to.toUpperCase()}</span>`

  const headerProps: UpdateHeaderProps = {
    title: titleAndDescription,
    url: canonicalUrl(route.id),
    description: titleAndDescription,
    keywords: i("image, convert {fromExt} to {toExt}, {fromExt}, {toExt}, free, online, File Converter", {from, to})
  };
  return {
    headerProps,
    xToy, 
    exts: [from, to]
  } as ConversionProps
}
