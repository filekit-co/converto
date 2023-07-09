import type { UpdateHeaderProps, ConversionProps } from '$lib/types';
import {canonicalUrl, extractExtsFromString} from '$lib/utils'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';


export const load = (({params, route, locals}) => {
  const { i } = getRuntimeFromLocals(locals)
  const [from, to] = extractExtsFromString(params.slug)
  const title = i("Convert {fromExt} to {toExt} online for free", {fromExt:from.toUpperCase(), toExt:to.toUpperCase()})
  const description = i("{fromExt} to {toExt} Converter - Filekit.co is a free and fast online file conversion service.",  {fromExt:from.toUpperCase(), toExt:to.toUpperCase()})
  const xToy: string = `${from.toUpperCase()} to&nbsp;<span style=color:${fontColor};>${to.toUpperCase()}</span>`
  
  const headerProps: UpdateHeaderProps = {
    title,
    url: canonicalUrl(route.id),
    description,
    keywords: i("{fromExt} to {toExt}, convert {fromExt}, convert {toExt}, change, {toExt} file, {fromExt} file", {fromExt:from, toExt:to}),
  };
  return {
    headerProps,
    xToy, 
    exts: [from, to],
  } as ConversionProps
})
