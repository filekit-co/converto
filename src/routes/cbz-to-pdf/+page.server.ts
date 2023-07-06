import type { UpdateHeaderProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'

export const load = (({route}) => {
  const headerProps: UpdateHeaderProps = {
    title: 'CBZ to PDF | Filekit.co',
    url: canonicalUrl(route.id),
    description: `CBZ to PDF Converter - Filekit.co is a free &amp; fast online file conversion service.`,
    keywords: `cbz to pdf, convert cbz, convert pdf, change, pdf file, cbz file`,
  };
  return {headerProps}
})
