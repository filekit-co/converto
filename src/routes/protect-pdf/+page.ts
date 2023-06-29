import type { UpdateHeaderProps } from '$lib/types';
import type { PageLoad } from './$types';
import {canonicalUrl} from '$lib/utils'

export const load = (({route}) => {
  const headerProps: UpdateHeaderProps = {
    title: 'Protect PDF. Tool to encrypt PDF with password',
    url: canonicalUrl(route.id),
    description: `Encrypt and protect PDF with a password to safeguard sensitive information. Secure your PDF files online, with ease and without registration.`,
    keywords: `encrypt pdf, pdf password, protect pdf, pdf access, password for pdf document`,
  };
  return {headerProps}
}) satisfies PageLoad;