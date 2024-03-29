import type { UpdateHeaderProps, ConversionProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({url, locals}) => {
  const { i } = getRuntimeFromLocals(locals)
  const from = 'oxps'
  const to = 'pdf'
  
  const title = i("Convert {fromExt} to {toExt} online for free", {fromExt:from.toUpperCase(), toExt:to.toUpperCase()})
  const description = i("{fromExt} to {toExt} Converter - Filekit.co is a free and fast online file conversion service.",  {fromExt:from.toUpperCase(), toExt:to.toUpperCase()})

  const headerProps: UpdateHeaderProps = {
    title,
    description,
    keywords: i("{fromExt} to {toExt}, convert {fromExt}, convert {toExt}, change, {toExt} file, {fromExt} file", {fromExt:from, toExt:to}),
  };
  return {
    headerProps,
    exts: [from, to],
  } as ConversionProps
})
