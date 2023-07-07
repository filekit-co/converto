import type { UpdateHeaderProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({route, locals}) => {
  const { i } = getRuntimeFromLocals(locals)

  const headerProps: UpdateHeaderProps = {
    title: i("CBZ to PDF | Filekit.co"),
    url: canonicalUrl(route.id),
    description: i("CBZ to PDF Converter - Filekit.co is a free and fast online file conversion service."),
    keywords: i("CBZ to PDF, convert cbz, convert pdf, change, pdf file, cbz file"),
  };
  return {headerProps}
})
