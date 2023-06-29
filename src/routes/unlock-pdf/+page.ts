import type { UpdateHeaderProps } from '$lib/types';
import type { PageLoad } from './$types';
import {canonicalUrl} from '$lib/utils'

export const load = (({route}) => {
  const headerProps: UpdateHeaderProps = {
    title: 'Password protect a PDF',
    url: canonicalUrl(route.id),
    description: `Remove PDF passwords online for free. No size limits or ad watermarks. Easily and quickly remove passwords from your PDF files so you can edit and share them.`,
    keywords: `online pdf unlock, pdf unlock online, pdf file unlock, remove pdf password online, pdf remove password protection`
  };
  return {headerProps}
}) satisfies PageLoad;