import type { UpdateHeaderProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({route, locals}) => {
  const { i } = getRuntimeFromLocals(locals)
  const from = 'xps'
  const to = 'doc'

  const title = i("Convert {fromExt} to {toExt} online for free", {fromExt:from.toUpperCase(), toExt:to.toUpperCase()})
  const description = i("{fromExt} to {toExt} Converter - Filekit.co is a free and fast online file conversion service.",  {fromExt:from.toUpperCase(), toExt:to.toUpperCase()})
  const headerProps: UpdateHeaderProps = {
    title,
    url: canonicalUrl(route.id),
    description,
    keywords: i("{fromExt} to {toExt}, convert {fromExt}, convert {toExt}, change, {toExt} file, {fromExt} file", {fromExt:from, toExt:to}),
  };
  return {headerProps}
})

