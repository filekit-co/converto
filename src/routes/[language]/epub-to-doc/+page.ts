import type { UpdateHeaderProps } from '$lib/types';
import type { PageLoad } from './$types';
import {canonicalUrl} from '$lib/utils'

export const load = (({route}) => {
  const from = 'epub'
  const to = 'doc'
  const headerProps: UpdateHeaderProps = {
    title: `${from.toUpperCase()} to ${to.toUpperCase()} | Filekit.co`,
    url: canonicalUrl(route.id),
    description: `${from} to ${to} Converter - Filekit.co is a free &amp; fast online file conversion service.`,
    keywords: `${from} to ${to}, convert ${from}, convert ${to}, change, ${from} file, ${to} file`,
  };
  return {headerProps}
}) satisfies PageLoad;

