import type { UpdateHeaderProps, UpdateFeatureProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({url, locals}) => {
  const { i } = getRuntimeFromLocals(locals)
  
  const headerProps: UpdateHeaderProps = {
    title: i("Image Background Remover | Remove Bg from Image for Free"),
    description: i("Remove the background from images online with our free background eraser. Download your transparent background image and change the background."),
    keywords: i("remove bg, remove background from image, background eraser, transparent background, white background"),
  };
  const featureProps: UpdateFeatureProps = {
    head1: i("Best image remover"),
    head2: i("removes background images perfectly."),
    description: i("Filekit provides excellent support for removing the background of photos, delivering satisfactory results."),
    subHead: [
      i("Flawless Removal"),
      i("Online-based"),
      i("Support for All Formats"),
      i("Easy to Use"),
      i("How to Use"),
      i("Security")
    ],
    subDescription: [
      i("Filekit utilizes the latest deep learning technology to flawlessly remove the background of photos."),
      i("You can obtain the desired results directly from your browser without the need to install any software."),
      i("You can remove background images from image files of all formats, including JPEG, PNG, URL, and more."),
      i("Thanks to its user-friendly interface, Filekit allows you to remove background images with just one click."),
      i("Select or drag and drop the photo file you want to remove the background image from. Within 2 seconds, you can preview the result image and download it."),
      i("No one can access the files uploaded by users.")
    ],

  }
  return {headerProps, featureProps}
})
