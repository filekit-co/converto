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
            Best file conversion Software
        </h2>

        <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
          File conversion, compression, encrypt & decrypt, merge.
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
            어떠한 파일도 변환 가능
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            저희는 모든 파일 간의 변환, pdf 비밀번호 제거, 압축, 통합을 지원합니다. 다른 어떤 변환기보다 편리합니다.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconBulb size={100} />
            
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            편리한 이용 방법
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            이쁘고, 눈에 잘 띄는 인터페이스로 구성되어 있어 문서 변환에 관한 전문 지식이 필요 없습니다. 
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconDownload size={100} />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            바로 사용
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            소프트웨어를 설치할 필요 없이 바로 사용할 수 있습니다.
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
            모든 파일 변환, 암호화 & 복호화, 파일 결합 & 삭제는 완전히 무료입니다.
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
            저희는 사용자가 업로드 한 파일을 데이터베이스에 저장하지 않아 안전합니다. 
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
            어떠한 운영체제에서도 소프트웨어를 이용할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  </section>
  