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
      <p class="sm:text-xl">
        {@html $_(
          'We offer a wide range of file conversion, compression, and background removal services to meet your needs.'
        )}
      </p>
      <p class="sm:text-xl">
        {@html $_(
          'Whether you need to convert a document to PDF, compress a large file, or remove the background from an image, we can help.'
        )}
      </p>
      <p class="sm:text-xl">
        {@html $_('Our services are easy to use and affordable.')}
      </p>
      <p class="sm:text-xl">
        {@html $_(
          'You can convert, compress, and remove backgrounds online or through our desktop app. - file conversion, file compression, background removal, document to PDF, PDF to document, image to PDF, PDF to image, file compress, PDF encrypt, PDF decrypt, PDF merge, PDF delete, PDF arrage'
        )}
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
          편리한 변환
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          파일을 드래그 & 드롭, 변환 버튼 클릭, 결과 파일을 확인하기의 세 가지 동작만 하면 됩니다. 간단한 동작들로 원하는 결과물을 얻을 수 있습니다.
        </p>
      </div>
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <IconPhotoEdit size={100} />
          
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">
          완벽한 백그라운드 이미지 제거
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          저희는 사진의 백그라운드 이미지를 완벽하게 제거해주는 기능을 제공합니다.    
        </p>
      </div>
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <IconBrandSpeedtest size={100} />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">
          빠른 속도
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          문서 파일 혹은 이미지 파일을 끌어 놓고 버튼을 클릭해주세요. 저희는 2분 이내 모든 결과물을 제공하는 것을 목료포 하고 있습니다.
        </p>
      </div>
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <IconCashOff size={100} />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">
          완전 무료
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          모든 파일 변환 및 백그라운드 이미지 삭제는 완전히 무료입니다.
        </p>
      </div>
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <IconShieldLock size={100}/>
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">
            보안
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          저희는 업로드된 파일을 상업적 용도로 사용하지 않습니다. 어떠한 사람도 사용자의 파일에 접근할 수 없으며 프라이버시가 완벽히 보호됩니다.
        </p>
      </div>
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <IconDeviceMobile size={100} />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">
          모든 기기 지원
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          converto는 브라우저, 태블릿, 모바일 모든 플랫폼에서 작동합니다. 
        </p>
      </div>
    </div>
  </div>
</section>
