<script lang="ts">
  import {t} from '$lib/i18n/i18n';
  import type {FileDropOptions, Files} from 'filedrop-svelte';
  import {filedrop} from 'filedrop-svelte';
  import {filesize} from 'filesize';
  import {PUBLIC_FILE_API_URL} from '$env/static/public';
  import {onMount} from 'svelte';

  export let fileDropOptions: FileDropOptions;
  const formId: string = fileDropOptions.id!;

  let files: Files = {
    accepted: [],
    rejected: []
  };

  // TODO delete if fin
  // onMount(async () => {
  //   files.accepted = [new File([''], 'fortest', {type: 'text/html'})];
  // });

  $: totalFileSizes =
    files && files.accepted
      ? files.accepted.reduce((sum, file) => sum + file.size, 0)
      : 0;

  function fileName(filename: string) {
    return filename.substring(0, 7) + '...';
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

  async function submitFiles(e: any) {
    console.log('submitFiles');
    if (files.accepted.length <= 0) {
      throw new Error("There's no files to submit");
    }

    const form = document.getElementById(formId) as HTMLFormElement;

    const formData = new FormData(form);
    console.log(formData);

    // files.accepted.forEach(file => {
    //   formData.append('files', file);
    // });

    const response = await fetch(`${PUBLIC_FILE_API_URL}/file`, {
      method: 'POST',
      body: formData
    });
  }
</script>

{#if files.accepted.length > 0}
  <div class="overflow-y-auto my-7">
    <form id={formId}>
      <table class="table border-y-4 table-auto">
        <!-- head -->
        <thead>
          <tr>
            <th>Password</th>
            <th>File Name</th>
            <th>Size</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {#each files.accepted as file, i}
            <tr>
              <td class="w-0"
                ><input
                  id="password-{i}"
                  type="password"
                  placeholder="*******"
                  class="input input-bordered input-warning text-sm max-w-xs"
                  on:keydown={e => {
                    if (e.key === 'Enter') e.preventDefault();
                  }}
                  required
                />
              </td>
              <td>{fileName(file.name)}</td>
              <td>{filesize(file.size)}</td>
              <th>
                <button
                  class="btn btn-sm sm:btn-md btn-circle"
                  on:click={() => {
                    removeFile(i);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    /></svg
                  >
                </button>
              </th>
            </tr>
          {/each}
          <tr>
            <td class="font-black">Total file size:</td>
            <td>{filesize(totalFileSizes)}</td>
            <td colspan="2">
              <button
                class="btn btn-accent btn-md sm:btn-block sm:btn-lg"
                on:click={submitFiles}>Submit</button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
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
      Click or Drag &amp; drop {fileDropOptions.multiple ? 'files' : 'flie'}
    </p>
    <p>{fileDropOptions.accept}</p>
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
