import type { UpdateHeaderProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({url, locals}) => {
  const { i } = getRuntimeFromLocals(locals)
  const from = 'tiktok'
  const to = 'mp4'

  const title = i("Filekit.co - Convert {fromExt} to {toExt} and More | Fast & Free Download", {fromExt:from.toUpperCase(), toExt:to.toUpperCase()})
  const description = i("Online download videos from Tiktok for FREE to PC, mobile. Supports downloading all formats: MP4, 3GP, WebM, HD videos, convert Tiktok to MP4, M4A")
  const headerProps: UpdateHeaderProps = {
    title,
    url: canonicalUrl(url?.pathname ?? ''),
    description,
    keywords: i("Tiktok to MP4, Tiktok download, Tiktok free, convert Tiktok to MP4, download Tiktok videos, Filekit.co")
  };
  return {headerProps}
})

