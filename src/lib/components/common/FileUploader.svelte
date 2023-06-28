<script lang="ts">
  import {_} from 'svelte-i18n';
  import type {FileWithPath} from '$lib/types';
  import type {FileDropOptions, Files} from 'filedrop-svelte';
  import {filedrop} from 'filedrop-svelte';
  import {filesize} from 'filesize';
  import {IconPdf, IconX} from '@tabler/icons-svelte';

  import Downloader from './Downloader.svelte';

  export let fileDropOptions: FileDropOptions;

  const formId = 'formId';
  let uploadData: [FileWithPath, string][];

  let files: Files = {
    accepted: [],
    rejected: []
  };

  $: isDownloading = false;

  $: totalFileSizes =
    files && files.accepted
      ? files.accepted.reduce((sum, file) => sum + file.size, 0)
      : 0;

  function fileName(filename: string) {
    return filename.length > 10 ? filename.substring(0, 10) + '...' : filename;
  }

  function addFiles(e: any) {
    const newFiles = e.detail?.files;
    const {accepted, rejected} = newFiles;
    files.accepted = [...files?.accepted, ...accepted];
    files.rejected = [...files?.rejected, ...rejected];
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
    if (files.accepted.length <= 0) {
      throw new Error("There's no files to submit");
    }

    uploadData = files.accepted.map((file, i) => {
      const passwordInput = document.getElementById(
        `password_${i}`
      ) as HTMLInputElement;
      return [file, passwordInput.value];
    });

    isDownloading = true;
  }
</script>

{#if isDownloading}
  <Downloader {uploadData} />
{:else if files.accepted.length > 0}
  <form id={formId} on:submit|once|preventDefault={submitFiles}>
    <div class="border rounded-2xl shadow-2xl shadow-slate-500 overflow-x-auto">
      <div class="flex flex-col md:px-10">
        {#each files.accepted as file, i}
          <div class="flex flex-row items-center border-b-2 h-20 space-x-4">
            <div class="hidden sm:block">
              <IconPdf size={30} />
            </div>
            <!-- -row sm:flex-row -->
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
{:else}
  <div class="filedrop" use:filedrop={fileDropOptions} on:filedrop={addFiles}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="48"
      height="48"
      ><path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 13v4h-2v-4H8l4-5 4 5h-3z"
      />
    </svg>
    <p>
      {@html $_('Click or Drag & Drop')}
      {fileDropOptions.multiple ? 'files' : 'file'}
    </p>
    <p>({fileDropOptions.accept})</p>
    <input type="file" hidden />
  </div>
{/if}

<style>
  .filedrop {
    background-color: #f0f0f0;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    border: 0.1em dashed #c3c3c3;
    outline: 1em solid #f0f0f0;
    transition: border 0.3s ease-in-out;
    outline-offset: -1.3em;
    padding: 0.475em;
  }

  .filedrop p,
  .filedrop svg {
    transition: color 0.1s;
    transition: fill 0.1s;
  }

  .filedrop:hover p,
  .filedrop:hover svg {
    color: #3abef7;
    fill: #3abef7;
  }
  p {
    color: #373737;
    font-size: 1.2em;
    cursor: default;
    align-content: center;
  }
</style>
