<script lang="ts">
  import DragDrop from '@components/common/DragDrop.svelte';
  import {onDestroy} from 'svelte';
  import type {FileDropOptions, Files} from 'filedrop-svelte';
  import Downloader from '@components/common/Downloader.svelte';
  import BaseUploader from '@components/FileUploaders/FileUploader.svelte';
  import type {fileUploadData} from '@components/FileUploaders/types';

  import type {PageData} from './$types';
  import {fetchToY} from '$lib/apis';
  import {i} from '@inlang/sdk-js';
  import Feature from '@components/home/Feature.svelte';

  export let data: PageData;
  let files: Files = {
    accepted: [],
    rejected: []
  };

  const [fromExt, toExt] = data.exts;
  const description = i('Convert {fromExt} to {toExt} online for free', {
    fromExt: fromExt.toUpperCase(),
    toExt: toExt.toUpperCase()
  });

  const jpgTypes = ['jpg', 'jpeg']; // Because input accept does not recognize between jpg and jpeg.
  const fileAccept = jpgTypes.includes(fromExt)
    ? ['.jpg', '.jpeg']
    : [`.${fromExt}`];

  const imgFileDropOptions: FileDropOptions = {
    accept: fileAccept,
    hideInput: true,
    multiple: true
  };

  let uploadData: fileUploadData = [];
  $: isDownloading = false;
  $: isFileExist = files.accepted.length > 0;

  const handleDownload = async (data: fileUploadData) =>
    await fetchToY(data, toExt);

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
      {@html data.xToy}
    </h2>
  </div>
  <p class="text-base-content/60 font-title py-4 font-light md:text-2xl">
    {description}
  </p>

  <section class="pt-4 mx-0 sm:mx-10">
    {#if isFileExist}
      {#if isDownloading}
        <Downloader fetchFn={handleDownload} {uploadData} />
      {:else}
        <BaseUploader bind:files bind:uploadData bind:isDownloading />
      {/if}
    {:else}
      <DragDrop bind:files fileDropOptions={imgFileDropOptions} />
    {/if}
  </section>

  <div class="mt-10" />
  <Feature />
</div>
