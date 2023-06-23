import type { UpdateHeaderProps } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (() => {
  const headerProps: UpdateHeaderProps = {
    title: 'Unlock PDF files. Remove PDF password.',
    url: 'https://www.filekit.co/pdf/unlock',
    description: `Remove PDF passwords online for free. No size limits or ad watermarks. Easily and quickly remove passwords from your PDF files so you can edit and share them.`
  };
    return {headerProps}
}) satisfies PageLoad;
