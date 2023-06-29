import type { UpdateHeaderProps } from '$lib/types';
import type { PageLoad } from './$types';
import {canonicalUrl} from '$lib/utils'

export const load = (({route}) => {
  const headerProps: UpdateHeaderProps = {
    title: 'Compress PDF online. Same PDF quality less file size',
    url: canonicalUrl(route.id),
    description: `Compress PDF file to get the same PDF quality but less filesize. Compress or optimize PDF files online, easily and free.`,
    keywords: `compress pdf size, reduce pdf size, compress pdf file, pdf compressor online, reduce size pdf, reduce pdf size, reduce dpi PDF, reduce PDF dpi`,
  };
  return {headerProps}
}) satisfies PageLoad;