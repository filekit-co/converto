<script lang="ts">
  import {page} from '$app/stores';
  import type {FeatureProps, UpdateFeatureProps} from '$lib/types';
  import {onMount} from 'svelte';
  import {
    IconTransform,
    IconSettings,
    IconLockCheck,
    IconDeviceDesktop,
    IconBrandSpeedtest,
    IconUserHeart
  } from '@tabler/icons-svelte';
  import {i} from '@inlang/sdk-js';

  export let bgColor: string = '';
  export let csrProps: UpdateFeatureProps = undefined;

  const defaultFeatureProps: FeatureProps = {
    head1: i('File Conversion, Compression, and Background Removal Services'),
    head2: i('Best file conversion and Image removal software'),
    description: i(
      'We offer a wide range of file conversion, compression, and background removal services to meet your needs. Whether you need to convert a document to PDF, compress a large file, or remove the background from an image, we can help. Our services are easy to use and affordable.'
    ),
    subHead: [
      i('Convenient Conversion'),
      i('Flawless Background Image Removal'),
      i('Fast Speed'),
      i('Completely Free'),
      i('Security'),
      i('Support for All Devices')
    ],
    subImage: [
      IconTransform,
      IconSettings,
      IconLockCheck,
      IconDeviceDesktop,
      IconBrandSpeedtest,
      IconUserHeart
    ],
    subDescription: [
      i(
        'By simply performing three actions: dragging and dropping files, clicking the conversion button, and checking the resulting file, you can obtain the desired output easily. With these simple steps, you can achieve the desired results.'
      ),
      i(
        'We provide a feature that flawlessly removes the background image from your photos.'
      ),
      i(
        'Drag and drop your document or image file and click the button. We aim to provide all results within 2 minutes.'
      ),
      i(
        'All file conversions and background image removal are completely free.'
      ),
      i(
        "We do not use uploaded files for commercial purposes. No one can access the user's files, ensuring complete privacy protection."
      ),
      i(
        'Converto works on all platforms, including browsers, tablets, and mobile devices.'
      )
    ]
  };

  const featureProps: UpdateFeatureProps =
    $page.data?.featureProps || csrProps || {};

  const features = {...defaultFeatureProps, ...featureProps};

  let renderedDivs: any[] = [];

  onMount(() => {
    renderedDivs = features.subHead.map((subHead, index) => {
      const subDescription = features.subDescription[index];
      const subImage = features.subImage[index];
      return {subHead, subImage, subDescription};
    });
  });
</script>

<section class={bgColor}>
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
    <div class=" mb-16 lg:mb-32">
      <h2
        class="mb-4 text-2xl md:text-3xl lg:text-4xl tracking-wide font-extrabold"
      >
        {features.head1}
      </h2>

      <h2 class="mb-8 text-md md:text-xl underline tracking-wide text-gray-500">
        "{features.head2}"
      </h2>

      <p class="italic text-md md:text-md tracking-wide">
        {features.description}
      </p>
    </div>
    <div
      class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
    >
      {#each renderedDivs as { subHead, subImage, subDescription }}
        <div>
          <div
            class="flex justify-center items-center mb-4 h-10 rounded-full bg-primary-100 lg:h-12 dark:bg-primary-900"
          >
            <svelte:component this={subImage} size={30} color="#EDAE3A" />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-black">
            {subHead}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {subDescription}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
