<script lang="ts">
  import DragDrop from '@components/common/DragDrop.svelte';
  import {onDestroy} from 'svelte';
  import type {FileDropOptions, Files} from 'filedrop-svelte';
  import Downloader from '@components/common/Downloader.svelte';
  import {fetchOxpsToPdf} from '$lib/apis'; // TODO: change
  import BaseUploader from '@components/FileUploaders/FileUploader.svelte';
  import type {fileUploadData} from '@components/FileUploaders/types';
  import {i} from '@inlang/sdk-js';
  import type {PageData} from './$types';
  import Feature from '@components/home/Feature.svelte';

  export let data: PageData;
  const [fromExt, toExt] = data.exts;
  const fileDropOptions: FileDropOptions = {
    accept: [`.${fromExt}`],
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
    <h2 class="text-[clamp(2rem,6vw,4.5rem)] font-black join-item">
      OXPS to&nbsp<span class="text-[#f5ac38]">PDF</span>
    </h2>
  </div>
  <!-- TODO: change text -->
  <p class="text-base-content/60 font-title py-4 font-light md:text-2xl">
    {i('Convert {fromExt} to {toExt} online for free', {
      fromExt: fromExt.toUpperCase(),
      toExt: toExt.toUpperCase()
    })}
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

  <div class="mt-10" />
  <Feature />
</div>
