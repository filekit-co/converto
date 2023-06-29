import type { UpdateHeaderProps } from '$lib/types';
import type { PageLoad } from './$types';
import {canonicalUrl} from '$lib/utils'

export const load = (({route}) => {
  const headerProps: UpdateHeaderProps = {
    title: 'Add a watermark to a PDF. Add text or image to a PDF',
    url: canonicalUrl(route.id),
    description: `Choose an image or text to stamp over your PDF files. Select position, transparency and typography.`,
  };
  return {headerProps}
}) satisfies PageLoad;

