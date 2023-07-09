import type { UpdateFeatureProps, UpdateHeaderProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'

export const load = (({route}) => {
  const headerProps: UpdateHeaderProps = {
    title: 'Protect PDF. Tool to encrypt PDF with password',
    url: canonicalUrl(route.id),
    description: `Encrypt and protect PDF with a password to safeguard sensitive information. Secure your PDF files online, with ease and without registration.`,
    keywords: `encrypt pdf, pdf password, protect pdf, pdf access, password for pdf document`,
  };
  const featureProps: UpdateFeatureProps = {
    head1: 'Best file conversion Software',
    head2: 'Converto removes background images perfectly.',
    description: 'Converto provides excellent support for removing the background of photos, delivering satisfactory results.',
    subHead: [
      'Flawless Removal',
      'Online-based',
      'Support for All Formats',
      'Easy to Use',
      'How to Use',
      'Security'
    ],
    subDescription: [
      'Converto utilizes the latest deep learning technology to flawlessly remove the background of photos.',
      'You can obtain the desired results directly from your browser without the need to install any software.',
      'You can remove background images from image files of all formats, including JPEG, PNG, URL, and more.',
      'Thanks to its user-friendly interface, Converto allows you to remove background images with just one click.',
      'Select or drag and drop the photo file you want to remove the background image from. Within 2 seconds, you can preview the result image and download it.',
      'No one can access the files uploaded by users.'
    ],

  }
  return {headerProps, featureProps}
})