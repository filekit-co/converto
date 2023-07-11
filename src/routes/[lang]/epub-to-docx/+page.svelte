<script lang="ts">
  import DragDrop from '@components/common/DragDrop.svelte';
  import {onDestroy} from 'svelte';
  import type {FileDropOptions, Files} from 'filedrop-svelte';
  import Downloader from '@components/common/Downloader.svelte';

  import {fetchEpubToDocx} from '$lib/apis';
  import BaseUploader from '@components/FileUploaders/FileUploader.svelte';
  import type {fileUploadData} from '@components/FileUploaders/types';
  import Feature from '@components/home/Feature.svelte';

  let fileDropOptions: FileDropOptions = {
    accept: ['.epub'],
    hideInput: true,
    multiple: true
  };
  let files: Files = {
    accepted: [],
    rejected: []
  };

  let uploadData: fileUploadData = [];
  let isDownloading = false;
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
      EPUB to&nbsp<span class="text-[#A4A9AD]">DOCX</span>
    </h2>
  </div>
  <p class="text-base-content/60 font-title py-4 font-light md:text-2xl">
    Convert EPUB to DOCX online for free
  </p>

  <section class="pt-4 mx-0 sm:mx-10">
    {#if isDownloading}
      <Downloader fetchFn={fetchEpubToDocx} {uploadData} />
    {:else if isFileExist}
      <BaseUploader bind:files bind:uploadData bind:isDownloading />
    {:else}
      <DragDrop bind:files {fileDropOptions} />
    {/if}
  </section>
  <div class="mt-10" />
  <Feature />
</div>
