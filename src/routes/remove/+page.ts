import type { UpdateHeaderProps } from '$lib/types';
import type { PageLoad } from './$types';
import {canonicalUrl} from '$lib/utils'

export const load = (({route}) => {
  const headerProps: UpdateHeaderProps = {
    url: canonicalUrl(route.id),
    description: `We offer a free online service that allows you to remove the background from any image in just 3 seconds. 
    Our service is easy to use and requires no registration or sign-in. 
    Simply upload your image, click the Remove Background button, and your image will be processed instantly. 
    Your image will be returned with a transparent background, which you can then use for any purpose.
    Our service is perfect for a variety of tasks, including - Create product mockups - Designing social media graphics - Editing photos - filekit.co`
  };
  return {headerProps}
}) satisfies PageLoad;
