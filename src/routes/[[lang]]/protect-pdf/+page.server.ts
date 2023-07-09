import type { UpdateFeatureProps, UpdateHeaderProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({route, locals}) => {
  const { i } = getRuntimeFromLocals(locals)
  
  const headerProps: UpdateHeaderProps = {
    title: i("Protect PDF. Tool to encrypt PDF with password"),
    url: canonicalUrl(route.id),
    description: i("Encrypt and protect PDF with a password to safeguard sensitive information. Secure your PDF files online, with ease and without registration."),
    keywords: i("encrypt pdf, pdf password, protect pdf, pdf access, password for pdf document"),
  };
  return {headerProps}
})