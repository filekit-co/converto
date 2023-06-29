import type { UpdateHeaderProps } from '$lib/types';
import type { PageLoad } from './$types';
import {canonicalUrl} from '$lib/utils'

export const load = (({route}) => {
  const headerProps: UpdateHeaderProps = {
    url: canonicalUrl(route.id),
    title: 'Image Background Remover | Remove Bg from Image for Free',
    description: `Remove the background from images online with our free background eraser. Download your transparent background image and change the background.`,
    keywords: 'remove bg, remove background from image, background eraser, transparent background, white background',
  };
  return {headerProps}
}) satisfies PageLoad;
