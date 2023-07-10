<script lang="ts">
  import {page} from '$app/stores';
  import {language} from '@inlang/sdk-js';
</script>

<main>
  <div
    class="h-screen w-full flex flex-col justify-center items-center bg-base-900"
  >
    <h1 class="text-9xl font-extrabol text-neutral-700 tracking-widest">
      {$page.status}
    </h1>
    <div class="bg-accent px-2 text-sm rounded-full">
      {$page.error?.message || 'Filekit.co'}
    </div>
    <!-- button -->
    <div class="pt-5 join join-vertical md:join-horizontal">
      <a href={`/${language}`} class="join-item btn btn-outline"> Go Home </a>
      <a href={`/${language}/send-email`} class="join-item btn btn-outline">
        Contact us
      </a>
    </div>
  </div>
</main>
