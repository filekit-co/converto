<script lang="ts">
  import {onMount, onDestroy} from 'svelte';
  import type {FileWithPath} from '$lib/types';
  import {loading} from '@components/common/loading';
  import {fileNameFromHeaders} from '$lib/utils';
  import {PUBLIC_FILE_API_URL} from '$env/static/public';
  import {IconDownload, IconPdf} from '@tabler/icons-svelte';
  import {filesize} from 'filesize';
  import JSZip from 'jszip';
  import {invalidate} from '$app/navigation';

  export let uploadData: any;

  $: $loading;

  interface DownloadItem {
    fileName: string;
    fileSize: number;
    downloadUrl: string;
  }

  let downloadList: DownloadItem[] = [];
  let zipDownloadLink: HTMLAnchorElement | undefined;

  // TODO: seperate it
  async function fetchUnlocks(data: [FileWithPath, string][]) {
    const results = await Promise.all(
      data.map(([file, password]) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('password', password);

        return fetch(`${PUBLIC_FILE_API_URL}/pdf/decrypt`, {
          method: 'POST',
          headers: {
            'Access-Control-Expose-Headers': 'Content-Disposition'
          },
          body: formData
        });
      })
    );
    return results;
  }

  async function buildDownloadList(responses: Response[]) {
    const downloadItems: DownloadItem[] = [];
    const blobs: Blob[] = [];

    await Promise.all(
      responses
        .filter(response => response.ok)
        .map(async response => {
          const {blob, ...downloadItem} = await buildDownloadItem(response);
          blobs.push(blob);
          downloadItems.push(downloadItem as DownloadItem);
        })
    );

    const zip = new JSZip();
    downloadItems.forEach(({fileName}, i) => {
      zip.file(fileName, blobs[i]);
    });

    const zipContent = await zip.generateAsync({
      type: 'blob'
    });
    zipDownloadLink = document.createElement('a');
    zipDownloadLink.href = URL.createObjectURL(zipContent);
    zipDownloadLink.download = 'download.zip';

    return downloadItems;
  }

  async function buildDownloadItem(response: Response) {
    const blob = await response.blob();

    return {
      fileName: fileNameFromHeaders(response.headers),
      fileSize: blob.size,
      downloadUrl: URL.createObjectURL(blob),
      blob
    };
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

  function handleRetry() {
    location.reload();
  }

  async function handleDownloadAll() {
    try {
      if (zipDownloadLink) {
        zipDownloadLink.click();
      } else {
        console.log('ZIP is undefined');
      }
    } catch (error: any) {
      console.error('Failed to download all files:', error);
    }
  }

  onMount(async () => {
    $loading = true;

    try {
      const responses = await fetchUnlocks(uploadData);
      downloadList = await buildDownloadList(responses);
    } catch (e) {
      console.error(e);
    } finally {
      $loading = false;
    }
  });

  onDestroy(() => {
    if (zipDownloadLink) {
      URL.revokeObjectURL(zipDownloadLink.href);
      zipDownloadLink = undefined;
    }
    downloadList.forEach(({downloadUrl}) => URL.revokeObjectURL(downloadUrl));
  });
</script>

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
        on:click={handleRetry}
        class="flex-auto btn btn-ghost p-0 uppercase"
        >Retry
      </button>

      <button on:click={handleDownloadAll} class="flex-auto btn btn-accent"
        >Download All</button
      >
    </div>
  </div>
</div>
