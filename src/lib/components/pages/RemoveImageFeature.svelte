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
            백그라운드 이미지 지우기
        </h2>

        <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
          Converto는 백그라운드 이미지를 완벽하게 지워드립니다.
        </h2>

        <p class="sm:text-xl">
          사진의 배경화면을 완벽하게 지워 만족스러운 결과물을 제공합니다.
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
            완벽한 삭제
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            converto는 최신 딥러닝 기술을 활용해 사진의 배경화면을 완벽하게 지워드립니다.
          </p>
        </div>

        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconAppWindow size={100} />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            온라인 기반
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            소프트웨어를 설치할 필요 없이 브라우저에서 바로 원하는 결과물을 얻을 수 있습니다.
          </p>
        </div>

        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconPhoto size={100} />
            
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            모든 포맷 지원
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            JPEG, PNG, URL 등 모든 형식의 이미지들의 백그라운드 이미지를 지울 수 있습니다. 
          </p>
        </div>

        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconBulb size={100} />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            손쉬운 사용
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            사용자 친화적으로 구성된 인터페이스 덕에 백그라운드 이미지 삭제를 한번의 클릭으로 수행할 수 있습니다.
          </p>
        </div>

        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <IconFileDescription size={100} />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            사용 방법
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            백그라운드 이미지를 삭제하길 원하는 사진 파일을 선택하거나 드래드 앤 드롭합니다 2초 이내로 결과 이미지를 확인하고 다운로드 할 수 있습니다.
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
            다른 사람이 사용자의 업로드 파일에 접근할 수 없음을 강조합니다.
          </p>
        </div>

      </div>
    </div>
  </section>
  