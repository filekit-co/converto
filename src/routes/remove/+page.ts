import type {UpdateHeaderProps} from '$lib/types';
import type {PageLoad} from './$types';
import {canonicalUrl} from '$lib/utils';

export const load = (({route}) => {
  const headerProps: UpdateHeaderProps = {
    title: 'Remove background Image ',
    keywords:
      'Remove background from photos, Image background removal, Background removal service, Photo editing tool, Deep learning background removal, Web-based background removal, Image editing service, Background subtraction, Automatic background removal, Online photo editing',
    url: canonicalUrl(route.id),
    description: `You can successfully remove the background of any type of image file. Utilizing the latest deep learning technology, you can preview the desired result image and download it within 2 minutes.`
  };
  return {headerProps};
}) satisfies PageLoad;
