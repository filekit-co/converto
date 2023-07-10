<script lang="ts">
  import DragDrop from '@components/common/DragDrop.svelte';
  import {onDestroy} from 'svelte';
  import type {FileDropOptions, Files} from 'filedrop-svelte';
  import Downloader from '@components/common/Downloader.svelte';

  import {fetchEpubToPdf} from '$lib/apis';
  import BaseUploader from '@components/FileUploaders/FileUploader.svelte'; // TODO: change
  import type {fileUploadData} from '@components/FileUploaders/types'; // TODO: change
  import Feature from '@components/home/Feature.svelte';

  let fileDropOptions: FileDropOptions = {
    accept: ['.epub'],
    hideInput: true,
    multiple: true,
    maxSize: 30 * 1024 * 1024
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
    <h2 class="text-[clamp(2rem,6vw,4.5rem)] font-black join-item">
      EPUB to&nbsp<span class="text-[#903227]">PDF</span>
    </h2>
  </div>
  <p class="text-base-content/60 font-title py-4 font-light md:text-2xl">
    Convert EPUB to PDF online for free
  </p>

  <section class="pt-4 mx-0 sm:mx-10">
    {#if isFileExist}
      {#if isDownloading}
        <Downloader fetchFn={fetchEpubToPdf} {uploadData} />
      {:else}
        <BaseUploader bind:files bind:uploadData bind:isDownloading />
      {/if}
    {:else}
      <DragDrop bind:files {fileDropOptions} />
    {/if}
  </section>
  <div class="mt-10" />
  <Feature />
</div>
