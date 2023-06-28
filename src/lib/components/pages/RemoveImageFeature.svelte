<script>
    import { _ } from 'svelte-i18n';
    import {
    IconShieldLock, 
    IconBulb,
    IconPhoto,
    IconCut,
    IconAppWindow,
    IconFileDescription
    } from '@tabler/icons-svelte';
</script>
  
  <section class="my-10 bg-base-200">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class=" mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
            {@html $_('Best file conversion Software')}
        </h2>

        <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
          {@html $_('Converto removes background images perfectly.')}
        </h2>

        <p class="sm:text-xl">
          {@html $_('Converto provides excellent support for removing the background of photos, delivering satisfactory results.')}
        </p>

      </div>
  
      <div
        class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
      >
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconCut size={100} />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {@html $_('Flawless Removal')}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {@html $_('Converto utilizes the latest deep learning technology to flawlessly remove the background of photos.')}
          </p>
        </div>

        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconAppWindow size={100} />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {@html $_('Online-based')}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {@html $_('You can obtain the desired results directly from your browser without the need to install any software.')}
          </p>
        </div>

        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconPhoto size={100} />
            
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {@html $_('Support for All Formats')}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {@html $_('You can remove background images from image files of all formats, including JPEG, PNG, URL, and more.')}
          </p>
        </div>

        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconBulb size={100} />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {@html $_('Easy to Use')}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {@html $_('Thanks to its user-friendly interface, Converto allows you to remove background images with just one click.')}
          </p>
        </div>

        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconFileDescription size={100} />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {@html $_('How to Use')}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {@html $_('Select or drag and drop the photo file you want to remove the background image from. Within 2 seconds, you can preview the result image and download it.')}
          </p>
        </div>

        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconShieldLock size={100}/>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
              {@html $_("Security")}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {@html $_('No one can access the files uploaded by users.')}
          </p>
        </div>

      </div>
    </div>
  </section>
  