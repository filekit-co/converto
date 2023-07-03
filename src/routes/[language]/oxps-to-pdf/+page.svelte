<script lang="ts">
  import DragDrop from '@components/common/DragDrop.svelte';
  import {onDestroy} from 'svelte';
  import type {FileDropOptions, Files} from 'filedrop-svelte';
  import {_} from 'svelte-i18n';
  import Downloader from '@components/common/Downloader.svelte';

  import {fetchOxpsToPdf} from '$lib/apis'; // TODO: change
  import BaseUploader from '@components/FileUploaders/FileUploader.svelte';
  import type {fileUploadData} from '@components/FileUploaders/types';

  let fileDropOptions: FileDropOptions = {
    accept: ['.oxps'], // TODO: change
    hideInput: true,
    multiple: true
  };
  let files: Files = {
    accepted: [],
    rejected: []
  };

  let uploadData: fileUploadData = [];
  $: isDownloading = false;
  $: isFileExist = files.accepted.length > 0;

  onDestroy(() => {
    files = {
      accepted: [],
      rejected: []
    };
  });
</script>

<div class="w-full px-2 py-32 sm:px-20 lg:px-32 text-center mx-auto">
  <div class="join">
    <img
      src="/images/xps.png"
      class="w-12 md-16 lg:w-32 join-item"
      alt="xps logo"
    />

    <h2 class="text-[clamp(2rem,6vw,4.5rem)] font-black join-item">
      <!-- TODO: change text and color -->
      OXPS to&nbsp<span class="text-[#f5ac38]">PDF</span>
    </h2>
  </div>
  <!-- TODO: change text -->
  <p class="text-base-content/60 font-title py-4 font-light md:text-2xl">
    Convert OXPS to PDF online for free
  </p>

  <section class="pt-4 mx-0 sm:mx-10">
    {#if isFileExist}
      {#if isDownloading}
        <Downloader fetchFn={fetchOxpsToPdf} {uploadData} />
      {:else}
        <BaseUploader bind:files bind:uploadData bind:isDownloading />
      {/if}
    {:else}
      <DragDrop bind:files {fileDropOptions} />
    {/if}
  </section>
</div>
