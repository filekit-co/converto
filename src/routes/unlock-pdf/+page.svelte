<script lang="ts">
  import DragDrop from '@components/common/DragDrop.svelte';
  import {onDestroy} from 'svelte';
  import type {FileDropOptions, Files} from 'filedrop-svelte';

  import FileConvertFeature from '@components/pages/FileConvertFeature.svelte';

  import {_} from 'svelte-i18n';
  import type {FileWithPath} from '$lib/types';
  import PasswordUploader from '@components/FileUploaders/PasswordUploader.svelte';
  import {fetchUnlocks} from '$lib/apis';
  import Downloader from '@components/common/Downloader.svelte';

  let fileDropOptions: FileDropOptions = {
    id: 'unlockUploader',
    accept: ['.pdf'],
    hideInput: true,
    multiple: true
  };
  let files: Files = {
    accepted: [],
    rejected: []
  };
  let uploadData: [FileWithPath, string][] = [];
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-20 md-24 lg:w-32 join-item"
      viewBox="0 0 96 60"
    >
      <path
        d="M61,8 L69,16 L69,58 C69,59.1045695 68.1045695,60 67,60 L31,60 C29.8954305,60 29,59.1045695 29,58 L29,52 L28,52 C27.4477153,52 27,51.5522847 27,51 L27,40 C27,39.4477153 27.4477153,39 28,39 L29,39 L29,10 C29,8.8954305 29.8954305,8 31,8 L61,8 Z M60,9 L31,9 C30.4871642,9 30.0644928,9.38604019 30.0067277,9.88337887 L30,10 L30,39 L50,39 C50.5522847,39 51,39.4477153 51,40 L51,51 C51,51.5522847 50.5522847,52 50,52 L30,52 L30,58 C30,58.5128358 30.3860402,58.9355072 30.8833789,58.9932723 L31,59 L67,59 C67.5128358,59 67.9355072,58.6139598 67.9932723,58.1166211 L68,58 L68,17 L60,17 L60,9 Z M59,50 L59,51 L53,51 L53,50 L59,50 Z M32.3146067,42 L30,42 L30,49 L31.3033708,49 L31.3033708,46.4311927 L32.3595506,46.4311927 C33.9438202,46.4311927 35.1573034,45.7140673 35.1573034,44.1620795 C35.1573034,42.5351682 33.9438202,42 32.3146067,42 Z M38.505618,42 L36.5393258,42 L36.5393258,49 L38.5730337,49 C40.752809,49 42.0786517,47.7905199 42.0786517,45.4678899 C42.0786517,43.1559633 40.752809,42 38.505618,42 Z M48,42 L43.5617978,42 L43.5617978,49 L44.8651685,49 L44.8651685,46.0779817 L47.5393258,46.0779817 L47.5393258,45.029052 L44.8651685,45.029052 L44.8651685,43.0489297 L48,43.0489297 L48,42 Z M38.4157303,43.0061162 C39.8988764,43.0061162 40.741573,43.7553517 40.741573,45.4678899 C40.741573,47.1222018 39.9649438,47.9281908 38.5906208,47.990023 L38.4157303,47.9938838 L37.8426966,47.9938838 L37.8426966,43.0061162 L38.4157303,43.0061162 Z M59,45 L59,46 L53,46 L53,45 L59,45 Z M32.2134831,42.9954128 C33.3033708,42.9954128 33.8764045,43.2844037 33.8764045,44.1620795 C33.8764045,44.9679799 33.4086155,45.3851518 32.4449351,45.4314423 L32.258427,45.4357798 L31.3033708,45.4357798 L31.3033708,42.9954128 L32.2134831,42.9954128 Z M59,40 L59,41 L53,41 L53,40 L59,40 Z M59,35 L59,36 L39,36 L39,35 L59,35 Z M59,30 L59,31 L39,31 L39,30 L59,30 Z M61,9.415 L61,16 L67.585,16 L61,9.415 Z"
      />
    </svg>
    <h2 class="text-[clamp(2rem,6vw,4.5rem)] font-black join-item">
      {@html $_('Unlock')} <span class="text-accent">PDF</span>
    </h2>
  </div>
  <p class="text-base-content/60 font-title py-4 font-light md:text-2xl">
    {@html $_('An easy-to-use online tool to')}&nbsp<span
      class="underline underline-offset-4">{@html $_('remove passwords')}</span
    >{@html $_('from PDFs.')}
  </p>

  <section class="pt-4 mx-0 sm:mx-10">
    {#if isFileExist}
      {#if isDownloading}
        <Downloader fetchFn={fetchUnlocks} {uploadData} />
      {:else}
        <PasswordUploader bind:files bind:uploadData bind:isDownloading />
      {/if}
    {:else}
      <DragDrop bind:files {fileDropOptions} />
    {/if}
  </section>

  <FileConvertFeature />
</div>
