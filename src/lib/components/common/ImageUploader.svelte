<script lang="ts">
  import ImageDetail from '@components/common/ImageDetail.svelte';
  import {PUBLIC_IMG_API_URL} from '$env/static/public';
  import {t} from '$lib/i18n/i18n';

  let droppedFiles = [];
  let downloadedFile: any = null;
  let selectedFile: any = null;
  let resultImage: any;
  let imageURL: any = null;
  let fileInput: any = null;

  async function handleDrop(event) {
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    droppedFiles = Array.from(fileList);

    const formData = new FormData();
    droppedFiles.forEach(file => {
      formData.append('image', file);
    });

    const response = await fetch(`${PUBLIC_IMG_API_URL}/bg/remove`, {
      method: 'POST',
      body: formData,
      mode: 'cors'
    })
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], 'downloaded_Image', {type: blob.type});
        downloadedFile = URL.createObjectURL(file);

        resultImage = URL.createObjectURL(blob);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDragLeave(event) {
    event.preventDefault();
    droppedFiles = [];
  }

  async function handleFileChange(event) {
    selectedFile = event.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await fetch(`${PUBLIC_IMG_API_URL}/bg/remove`, {
        method: 'POST',
        body: formData,
        mode: 'cors'
      })
        .then(response => response.blob())
        .then(blob => {
          const file = new File([blob], 'downloaded_Image', {type: blob.type});
          downloadedFile = URL.createObjectURL(file);

          resultImage = URL.createObjectURL(blob);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  function handleClick(event) {
    fileInput.click();
  }

  function handleURLChange(event) {
    imageURL = event.target.value;
  }

  async function handleURLSubmit() {
    const response = await fetch(
      `${PUBLIC_IMG_API_URL}/bg/remove?url=${imageURL}`,
      {
        method: 'GET',
        mode: 'cors'
      }
    )
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], 'downloaded_Image', {type: blob.type});
        downloadedFile = URL.createObjectURL(file);

        resultImage = URL.createObjectURL(blob);
      })
      .catch(error => {
        console.error(error);
      });
  }
</script>

<div id="app">
  {#if resultImage && downloadedFile}
    <ImageDetail {resultImage} {downloadedFile} />
  {:else}
    <div
      class="drop-zone w-full flex flex-col sm:justify-center sm:items-center sm:gap-8 sm:pt-36 sm:pb-16 rounded-4xl bg-white shadow-2xl"
      on:drop={handleDrop}
      on:dragover={handleDragOver}
      on:dragleave={handleDragLeave}
    >
      <form>
        <input
          type="file"
          class="file-input file-input-bordered file-input-primary w-full max-w-xs"
          style="display:none"
          accept=".jpg, .jpeg, .png"
          on:change={handleFileChange}
          bind:this={fileInput}
        />
        <button
          on:click={handleClick}
          type="button"
          style="width: 300px; height: 80px;"
          class="!border !border-transparent rounded-full font-bold transition ease-in-out text-center font-body no-underline hover:no-underline inline-flex items-center justify-center text-2xl px-8 py-2.5 text-white !bg-primary hover:!bg-primary-hover active:!bg-primary-hover active:scale-[0.98] focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover"
        >
          {@html $t('Upload')}
        </button>
      </form>

      <div class="hidden sm:flex flex-col gap-1.5">
        <p class="m-0 font-bold text-xl text-typo-secondary">
          {@html $t('Or Drag a File,')}
        </p>
        <span class="text-xs text-typo-secondary text-center"
          >{@html $t('Insert Image or,')}
          <button
            class="btn btn-active btn-ghost url-button"
            on:click={() => window.my_modal_5.showModal()}>URL</button
          >
          <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
            <form method="dialog" class="modal-box">
              <h3 class="font-bold text-lg">
                {@html $t('Type Image URL and Press Submit Button')}
              </h3>
              <br />
              <input
                on:change={handleURLChange}
                type="text"
                placeholder="Type here"
                class="input input-bordered input-accent w-full max-w-xs"
              />
              <button
                on:click={handleURLSubmit}
                class="btn btn-active btn-primary">{@html $t('Submit')}</button
              >
            </form>
            <form method="dialog" class="modal-backdrop">
              <button>{@html $t('close')}</button>
            </form>
          </dialog>
        </span>
      </div>
    </div>
  {/if}
</div>

<style>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }

  .text-2xl {
    font-size: 2.5rem;
    line-height: 2rem;
  }

  .text-xl {
    font-size: 2rem;
    line-height: 1.75rem;
  }

  .text-xs {
    font-size: 1.25rem;
    line-height: 1rem;
  }

  .url-button {
    background: none;
    font-size: 1.5rem;
  }
</style>
