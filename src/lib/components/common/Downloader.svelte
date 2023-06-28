<script lang="ts">
  import {onMount, onDestroy} from 'svelte';
  import type {FileWithPath} from '$lib/types';
  import {loading} from '@components/common/loading';
  import {fileNameFromHeaders} from '$lib/utils';
  import {PUBLIC_FILE_API_URL} from '$env/static/public';
  import {IconCircleXFilled, IconDownload, IconPdf} from '@tabler/icons-svelte';
  import {filesize} from 'filesize';

  export let uploadData: any;

  $: $loading;
  $: errorMsg = undefined;

  interface DownloadItem {
    fileName: string;
    fileSize: number;
    downloadUrl: string;
  }

  let downloadList: DownloadItem[];

  // TODO: seperate it
  async function fetchUnlocks(data: [FileWithPath, string][]) {
    return await Promise.all(
      data.map(([file, password]) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('password', password);

        return fetch(`${PUBLIC_FILE_API_URL}/pdf/decrypt`, {
          method: 'POST',
          body: formData
        });
      })
    );
  }

  async function buildDownloadList(responses: Response[]) {
    const downloadItems = await Promise.all(
      responses
        .filter(response => response.ok)
        .map(async response => await buildDownloadItem(response))
    );

    return downloadItems;
  }

  async function buildDownloadItem(response: Response) {
    const blob = await response.blob();
    return {
      fileName: fileNameFromHeaders(response.headers),
      fileSize: blob.size,
      downloadUrl: URL.createObjectURL(blob)
    } as DownloadItem;
  }

  function handleDownload(filename: string, url: string) {
    try {
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = filename;
      downloadLink.click();
    } catch (error: any) {
      console.error('Failed to download file:', error);
    }
  }

  function handleDownloadAll(items: DownloadItem[]) {}

  function handleGoBack() {}

  onMount(async () => {
    $loading = true;

    try {
      const responses = await fetchUnlocks(uploadData);
      downloadList = await buildDownloadList(responses);
    } catch (error: any) {
      $errorMsg = error?.message ? error?.messages : '500 Server Error';
    } finally {
      $loading = false;
    }
  });

  onDestroy(() => {});
</script>

{#if !!errorMsg}
  <div class="alert alert-error">
    <IconCircleXFilled />
    <span>{errorMsg}</span>
  </div>
{/if}

<div class="border rounded-2xl shadow-2xl shadow-slate-500 overflow-x-auto">
  <div class="flex flex-col md:px-10">
    {#each downloadList as item}
      <div class="flex flex-row items-center border-b-2 h-20 space-x-4">
        <div class="hidden sm:block">
          <IconPdf size={30} />
        </div>

        <div class="flex-auto flex flex-col sm:flex-row">
          <div class="flex-initial md:flex-auto">{item.fileName}</div>
        </div>
        <div class="flex-initial">{filesize(item.fileSize)}</div>
        <button
          class="btn btn-xs sm:btn-md btn-ghost"
          on:click={() => {
            handleDownload(item.fileName, item.downloadUrl);
          }}
        >
          <IconDownload />
        </button>
      </div>
    {/each}
    <div class="mb-2 sm:mb-6" />
    <div class="join mb-2 md:relative join-horizontal">
      <button
        on:click={handleGoBack}
        class="flex-auto btn btn-ghost p-0 uppercase"
        >Retry
      </button>

      <button on:click={handleDownloadAll} class="flex-auto btn btn-accent"
        >Download All</button
      >
    </div>
  </div>
</div>
