<script lang="ts">
  import DragDrop from '@components/common/DragDrop.svelte';
  import {onDestroy} from 'svelte';
  import type {FileDropOptions, Files} from 'filedrop-svelte';
  import {_} from 'svelte-i18n';
  import Downloader from '@components/common/Downloader.svelte';

  import {fetchCbzToPdf} from '$lib/apis'; // TODO: change
  import BaseUploader from '@components/FileUploaders/FileUploader.svelte';
  import type {fileUploadData} from '@components/FileUploaders/types';
  import cbzLogo from '$lib/assets/images/cbz.png';

  let fileDropOptions: FileDropOptions = {
    accept: ['.cbz'], // TODO: change
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
    <img src={cbzLogo} class="w-12 md-16 lg:w-32 join-item" alt="cbz-logo" />

    <h2 class="text-[clamp(2rem,6vw,4.5rem)] font-black join-item">
      <!-- TODO: change text and color -->
      CBZ to&nbsp<span class="text-[#ab7827]">PDF</span>
    </h2>
  </div>
  <!-- TODO: change text -->
  <p class="text-base-content/60 font-title py-4 font-light md:text-2xl">
    Convert CBZ to PDF online for free
  </p>

  <section class="pt-4 mx-0 sm:mx-10">
    {#if isFileExist}
      {#if isDownloading}
        <Downloader fetchFn={fetchCbzToPdf} {uploadData} />
      {:else}
        <BaseUploader bind:files bind:uploadData bind:isDownloading />
      {/if}
    {:else}
      <DragDrop bind:files {fileDropOptions} />
    {/if}
  </section>
</div>
