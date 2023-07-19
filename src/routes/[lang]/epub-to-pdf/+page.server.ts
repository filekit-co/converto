import type { UpdateHeaderProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({url, locals}) => {
  const {i} = getRuntimeFromLocals(locals)
  const from = 'epub'
  const to = 'pdf'

  const title = i("Convert {from} to {to} | filekit.co", {from, to}) 
  const description = i("Convert {from} to {to} online for free | filekit.co", {from, to}) 
  const keywords = i("file, format, convert {fromExt} to {toExt}, {fromExt}, {toExt}, free, online, File Converter, filekit.co", {from, to})

  const headerProps: UpdateHeaderProps = {
    title,
    url: canonicalUrl(url?.pathname ?? ''),
    description,
    keywords,
  };
  return {headerProps}
})