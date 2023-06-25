<script lang="ts">
  import {_} from 'svelte-i18n';
  import type {FileWithPath} from '$lib/types';
  import type {FileDropOptions, Files} from 'filedrop-svelte';
  import {filedrop} from 'filedrop-svelte';
  import {filesize} from 'filesize';

  import {PUBLIC_FILE_API_URL} from '$env/static/public';
  import {DEFAULT_FILE_NAME} from '$lib/consts';

  export let fileDropOptions: FileDropOptions;

  let files: Files = {
    accepted: [],
    rejected: []
  };

  // TODO delete if fin
  // import {onMount} from 'svelte';
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

  async function fetchUnlocks(data: [FileWithPath, string][]) {
    const responses = await Promise.all(
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

    responses.forEach(async (response, index) => {
      if (response.ok) {
        const blob = await response.blob();

        // 첨부 파일 이름을 추출합니다.
        const contentDisposition = response.headers.get('content-disposition');
        const filename = contentDisposition
          ? contentDisposition
              .split(';')
              .find(part => part.trim().startsWith('filename='))
              ?.split('=')[1]
              ?.trim() || DEFAULT_FILE_NAME
          : DEFAULT_FILE_NAME;

        // 다운로드 링크를 생성합니다.
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = filename;
        downloadLink.textContent = 'Download';

        // 다운로드 버튼을 추가합니다.
        const downloadContainer = document.createElement('div');
        downloadContainer.appendChild(downloadLink);

        // 원하는 위치에 다운로드 버튼을 추가하세요.
        // 예를 들어, 특정 테이블 셀에 추가하려면 해당 셀을 선택하고 아래와 같은 방식으로 추가할 수 있습니다.
        // const cell = document.getElementById(`cell_${index}`);

        // TODO: refactor and style
        const cell = document.getElementById('DownloadCell') as HTMLDivElement;
        cell.appendChild(downloadContainer);
      } else {
        // 처리 실패 시의 로직을 작성하세요.
      }
    });
  }

  function submitFiles() {
    if (files.accepted.length <= 0) {
      throw new Error("There's no files to submit");
    }

    const data: [FileWithPath, string][] = files.accepted.map((file, i) => {
      const passwordInput = document.getElementById(
        `password_${i}`
      ) as HTMLInputElement;
      return [file, passwordInput.value];
    });

    fetchUnlocks(data);
  }
</script>

<div id="DownloadCell" />

{#if files.accepted.length > 0}
  <div class="overflow-y-auto my-7">
    <form>
      <table class="table border-y-4">
        <!-- head -->
        <thead>
          <tr>
            <th>{@html $_('Password')}</th>
            <th>{@html $_('File Name')}</th>
            <th>{@html $_('Size')}</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {#each files.accepted as file, i}
            <tr>
              <td class="w-0"
                ><input
                  id="password_{i}"
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
            <td class="font-black">{@html $_('Total file size:')}</td>
            <td>{filesize(totalFileSizes)}</td>
            <td colspan="2">
              <button
                class="btn btn-accent btn-md sm:btn-block sm:btn-lg"
                on:click|preventDefault={submitFiles}
                >{@html $_('Submit')}</button
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
      {@html $_('Click or Drag & Drop')}
      {fileDropOptions.multiple ? 'files' : 'file'}
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
