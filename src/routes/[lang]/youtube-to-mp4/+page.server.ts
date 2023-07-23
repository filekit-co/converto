import type { UpdateHeaderProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({url, locals}) => {
  const { i } = getRuntimeFromLocals(locals)
  const from = 'youtube'
  const to = 'mp4'

  const title = i("Filekit.co - Convert {fromExt} to {toExt} and More | Fast & Free Download", {fromExt:from.toUpperCase(), toExt:to.toUpperCase()})
  const description = i("Online download videos from YouTube for FREE to PC, mobile. Supports downloading all formats: MP4, 3GP, WebM, HD videos, convert YouTube to MP3, M4A")
  const headerProps: UpdateHeaderProps = {
    title,
    description,
    keywords: i("YouTube to MP3, YouTube download, YouTube free, convert YouTube to MP3, download YouTube videos, Filekit.co")
  };
  return {headerProps}
})

