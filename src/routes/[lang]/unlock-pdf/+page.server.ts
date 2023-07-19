import type {UpdateHeaderProps} from '$lib/types';
import {canonicalUrl} from '$lib/utils';
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({url, locals}) => {
  const { i } = getRuntimeFromLocals(locals)
  
  const headerProps: UpdateHeaderProps = {
    title: i("Password protect a PDF"),
    url: canonicalUrl(url?.pathname ?? ''),
    description: i("Remove PDF passwords online for free. No size limits or ad watermarks. Easily and quickly remove passwords from your PDF files so you can edit and share them."),
    keywords: i("online pdf unlock, pdf unlock online, pdf file unlock, remove pdf password online, pdf remove password protection")
  };
  
  return {headerProps}
})
