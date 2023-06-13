<script lang="ts">
  import type { Files } from "filedrop-svelte";
  import { filedrop } from "filedrop-svelte";
  import { filesize } from "filesize";

  let files: Files;
  let options = { multiple: true };
  $: totalFileSizes =
    files && files.accepted
      ? files.accepted.reduce((sum, file) => sum + file.size, 0)
      : 0;

  function fileName(filename: string) {
    return filename.substring(0, 7) + "...";
  }

  function addFiles(newFiles: Files) {
    if (files) {
      files.accepted = files.accepted.concat(newFiles.accepted);
    } else {
      files = newFiles;
    }
  }

  function removeFile(index: number): void {
    if (files && index >= 0 && index < files.accepted.length) {
      files.accepted = [
        ...files.accepted.slice(0, index),
        ...files.accepted.slice(index + 1),
      ];
    }
  }

  async function submitFiles() {
    if (!(files && files.accepted.length > 0)) {
      return;
    }

    const formData = new FormData();
    files.accepted.forEach((file) => {
      formData.append("files", file);
    });
    // TODO: handle url with env
    // TODO: .env
    const response = await fetch("http://localhost:8080/file", {
      method: "POST",
      body: formData,
      // enctype: "multipart/form-data",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
</script>

{#if files}
  <div class="overflow-y-auto my-7">
    <table class="table border-y-4">
      <!-- head -->
      <thead>
        <tr>
          <th />
          <th>File Name</th>
          <th>File Type</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        {#each files.accepted as file, i}
          <tr>
            <td>
              <button
                class="btn btn-xs btn-outline"
                on:click={() => removeFile(i)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
            </td>
            <td>{fileName(file.name)}</td>
            <td>{file.type}</td>
            <td>{filesize(file.size)}</td>
          </tr>
        {/each}
        <tr>
          <td class="font-black">Total file size:</td>
          <td>{filesize(totalFileSizes)}</td>
          <td colspan="2">
            <button
              class="btn btn-accent btn-sm sm:btn-block sm:btn-lg"
              on:click={submitFiles}>Submit</button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
{/if}

<div
  use:filedrop={options}
  on:filedrop={(e) => {
    addFiles(e.detail.files);
  }}
  class="filedrop focus:border-accent focus:border-accent"
>
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
  <p>Click me or</p>
  <p>Drag &amp; drop files</p>
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
