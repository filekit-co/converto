import type {UpdateHeaderProps} from '$lib/types';
import type {PageLoad} from './$types';
import {canonicalUrl} from '$lib/utils';

export const load = (({route}) => {
  const headerProps: UpdateHeaderProps = {
    title: 'Unlock PDF files. Remove PDF password.',
    keywords: 'Unlock PDF files, Lock PDF files.',
    url: canonicalUrl(route.id),
    description: `Remove PDF passwords online for free. No size limits or ad watermarks. Easily and quickly remove passwords from your PDF files so you can edit and share them.`
  };
  return {headerProps};
}) satisfies PageLoad;
