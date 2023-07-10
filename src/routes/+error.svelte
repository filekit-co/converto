<script lang="ts">
  import {page} from '$app/stores';
  import Email from '@components/common/Email.svelte';
  import {language} from '@inlang/sdk-js';
  import {goto} from '$app/navigation';

  $: emailActive = false;
  const handleGoHome = () => {
    goto(`/${language}`, {replaceState: false});
  };
</script>

<main>
  {#if emailActive}
    <Email />
  {:else}
    <div
      class="h-screen w-full flex flex-col justify-center items-center bg-base-900"
    >
      <h1 class="text-9xl font-extrabold text-neutral-700 tracking-widest">
        {$page.status}
      </h1>
      <div class="bg-accent px-2 text-sm rounded absolute rotate-12">
        {$page.error?.message || 'Filekit.co'}
      </div>
      <!-- button -->
      <div class="join join-vertical md:join-horizontal">
        <button on:click={handleGoHome} class="join-item btn btn-accent">
          <span>Go Home</span>
        </button>
        <button
          on:click={() => (emailActive = !emailActive)}
          class="join-item btn btn-neutral-500"
        >
          <span>Contact us </span>
        </button>
      </div>
    </div>
  {/if}
</main>
