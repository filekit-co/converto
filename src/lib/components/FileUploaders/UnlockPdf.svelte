<script lang="ts">
  import {_} from 'svelte-i18n';
  import type {FileWithPath} from '$lib/types';
  import type {Files} from 'filedrop-svelte';
  import {filesize} from 'filesize';
  import {IconPdf, IconX} from '@tabler/icons-svelte';
  import {fetchUnlocks} from '$lib/apis';
  import Downloader from '@components/common/Downloader.svelte';

  export let files: Files;
  const formId = 'formId';
  let uploadData: [FileWithPath, string][] = [];
  $: isDownloading = false;

  function fileName(filename: string) {
    return filename.length > 10 ? filename.substring(0, 10) + '...' : filename;
  }

  function removeFile(index: number): void {
    if (index < 0 || index >= files.accepted.length) {
      return;
    }
    files.accepted = [
      ...files.accepted.slice(0, index),
      ...files.accepted.slice(index + 1)
    ];
  }

  function clearFiles(): void {
    files = {
      accepted: [],
      rejected: []
    } as Files;
  }

  async function submitFiles(e: any) {
    isDownloading = true;
    if (files.accepted.length <= 0) {
      throw new Error("There's no files to submit");
    }

    uploadData = files.accepted.map((file, i) => {
      const passwordInput = document.getElementById(
        `password_${i}`
      ) as HTMLInputElement;
      return [file, passwordInput.value];
    });
  }
</script>

{#if isDownloading}
  <Downloader fetchFn={fetchUnlocks} {uploadData} />
{:else}
  <form id={formId} on:submit|once|preventDefault={submitFiles}>
    <div class="border rounded-2xl shadow-2xl shadow-slate-500 overflow-x-auto">
      <div class="flex flex-col md:px-10">
        {#each files.accepted as file, i}
          <div class="flex flex-row items-center border-b-2 h-20 space-x-4">
            <div class="hidden sm:block">
              <IconPdf size={30} />
            </div>
            <div class="flex-auto flex flex-col sm:flex-row">
              <div class="flex-initial md:flex-auto">{fileName(file.name)}</div>

              <input
                id="password_{i}"
                type="password"
                placeholder="type a password"
                class="input text-sm h-4 max-w-xs text-center"
                on:keydown={e => {
                  if (e.key === 'Enter') e.preventDefault();
                }}
                required
              />
            </div>
            <div class="flex-initial">{filesize(file.size)}</div>
            <button
              class="btn btn-xs sm:btn-md btn-ghost"
              on:click={() => {
                removeFile(i);
              }}
            >
              <IconX />
            </button>
          </div>
        {/each}
        <div class="mb-2 sm:mb-6" />
        <div class="join mb-2 md:relative join-horizontal">
          <button
            form={formId}
            on:click={clearFiles}
            class="flex-auto btn btn-ghost p-0 uppercase"
            >Clear
          </button>
          <button form={formId} class="flex-auto btn btn-accent"
            >{@html $_('Submit')}
          </button>
        </div>
      </div>
    </div>
  </form>
{/if}
