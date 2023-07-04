<script lang="ts">
  import {onMount, onDestroy} from 'svelte';

  import {loading} from '@components/common/loading';

  import {IconDownload, IconPdf} from '@tabler/icons-svelte';
  import {filesize} from 'filesize';

  import {
    buildDownloadListAndZipLink,
    type DownloadItem
  } from '@components/common/downloader';

  export let fetchFn: any;
  export let uploadData: any;

  $: $loading;

  let downloadList: DownloadItem[] = [];
  let zipDownloadLink: HTMLAnchorElement | undefined;

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
      const responses = await fetchFn(uploadData);
      ({downloadList, zipDownloadLink} = await buildDownloadListAndZipLink(
        responses
      ));
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
