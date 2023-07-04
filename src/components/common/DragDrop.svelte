<script lang="ts">
  import {_} from 'svelte-i18n';
  import type {FileDropOptions, Files} from 'filedrop-svelte';
  import {filedrop} from 'filedrop-svelte';

  export let files: Files;
  export let fileDropOptions: FileDropOptions;

  function addFiles(e: any) {
    const newFiles = e.detail?.files;
    const {accepted, rejected} = newFiles;
    files.accepted = [...files?.accepted, ...accepted];
    files.rejected = [...files?.rejected, ...rejected];
  }
</script>

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
