<script>
    import { _ } from 'svelte-i18n';
    import {
    IconTransform, 
    IconCashOff, 
    IconShieldLock, 
    IconDeviceMobile,
    IconBulb,
    IconDownload
    } from '@tabler/icons-svelte';
</script>
  
  <section class="my-10 bg-base-200">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class=" mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
            {@html $_('Best file conversion Software')}
        </h2>

        <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
          {@html $_('File conversion, compression, encrypt & decrypt, merge.')}
        </h2>

        <p class="my-2 sm:text-xl">
          {@html $_('You can convert, compress, and remove backgrounds online or through our browser')}
        </p>
        <p class="my-2 sm:text-xl">
          {@html $_('File conversion, file compression, background removal, document to PDF, PDF to document, image to PDF, PDF to image, file compress, PDF encrypt, PDF decrypt, PDF merge, PDF delete, PDF arrange')}
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
            {@html $_('All types of files are convertible.')}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {@html $_('We support conversions between all file types, PDF encryption & decryption, compression, and merging. We are more convenient than any other converters.')}
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconBulb size={100} />
            
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {@html $_('Convenient to use')}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {@html $_('It is designed with a beautiful and visually appealing interface, so no specialized knowledge is required for document conversion.')}
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconDownload size={100} />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {@html $_('Ready to use')}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {@html $_('You can use it instantly without the need to install any software.')}
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconCashOff size={100} />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {@html $_('Completely free')}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {@html $_('All file conversions, encryption & decryption, file merging & deletion are completely free.')}
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
            {@html $_('We do not store the files uploaded by users in the database, ensuring safety.')}
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
            {@html $_('The software can be used on any operating system.')}
          </p>
        </div>
      </div>
    </div>
  </section>
  