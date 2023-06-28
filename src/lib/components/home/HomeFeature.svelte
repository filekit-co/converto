<script>
  import { _ } from 'svelte-i18n';
  import {
    IconTransform, 
    IconPhotoEdit, 
    IconBrandSpeedtest, 
    IconCashOff, 
    IconShieldLock, 
    IconDeviceMobile
    } from '@tabler/icons-svelte';
</script>

<section class="bg-base-200">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div class=" mb-8 lg:mb-16">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
        {@html $_(
          'File Conversion, Compression, and Background Removal Services'
        )}
      </h2>

      <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
        {@html $_('Best file conversion and Image removal software')}
      </h2>
      <p class="my-4 sm:text-xl">
        {@html $_(
          'We offer a wide range of file conversion, compression, and background removal services to meet your needs.'
        )}
      </p>
      <p class="my-4 sm:text-xl">
        {@html $_(
          'Whether you need to convert a document to PDF, compress a large file, or remove the background from an image, we can help.'
        )}
      </p>
      <p class="my-4 sm:text-xl">
        {@html $_('Our services are easy to use and affordable.')}
      </p>

    </div>

    <div
      class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
    >
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <IconTransform size={100} />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">
          {@html $_('Convenient Conversion')}
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          {@html $_('By simply performing three actions: dragging and dropping files, clicking the conversion button, and checking the resulting file, you can obtain the desired output easily. With these simple steps, you can achieve the desired results.')}
        </p>
      </div>
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <IconPhotoEdit size={100} />
          
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">
          {@html $_('Flawless Background Image Removal')}
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          {@html $_('We provide a feature that flawlessly removes the background image from your photos.')} 
        </p>
      </div>
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <IconBrandSpeedtest size={100} />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">
          {@html $_('Fast Speed')}
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          {@html $_('Drag and drop your document or image file and click the button. We aim to provide all results within 2 minutes.')}
        </p>
      </div>
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <IconCashOff size={100} />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">
          {@html $_('Completely Free')}
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          {@html $_('All file conversions and background image removal are completely free.')}
        </p>
      </div>
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <IconShieldLock size={100}/>
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">
            {@html $_('Security')}
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          {@html $_("We do not use uploaded files for commercial purposes. No one can access the user's files, ensuring complete privacy protection.")}
        </p>
      </div>
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <IconDeviceMobile size={100} />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">
          {@html $_('Support for All Devices')}
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          {@html $_('Converto works on all platforms, including browsers, tablets, and mobile devices.')}
        </p>
      </div>
    </div>
  </div>
</section>
