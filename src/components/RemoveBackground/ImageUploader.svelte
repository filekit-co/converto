<script lang="ts">
  import {loading} from '@components/common/loading';
  import {i} from '@inlang/sdk-js';
  import ResultImage from './ResultImage.svelte';
  import {fetchRemoveImageFile, fetchRemoveresultImageURL} from '$lib/apis';

  $: $loading;

  let droppedFile;
  let selectedFile: any = null;
  let resultFile: string;
  let resultImage: string;
  let fileInput: any = null;
  let imageURL: string;
  let dragging: boolean;
  let clicked: boolean = false;
  let fileName: string;

  async function handleDrop(event) {
    $loading = true;
    try {
      event.preventDefault();
      droppedFile = event.dataTransfer.files[0];
      fileName = droppedFile.name;

      if (droppedFile) {
        const {resultImageURL, resultFileURL} = await fetchRemoveImageFile(
          droppedFile
        );
        resultImage = resultImageURL;
        resultFile = resultFileURL;
      }
    } finally {
      $loading = false;
    }
  }

  function handleDragOver(event: Event) {
    event.preventDefault();
    dragging = true;
  }

  function handleDragLeave(event: Event) {
    event.preventDefault();
    droppedFile = null;
    dragging = false;
  }

  async function handleFileChange(event) {
    $loading = true;
    try {
      event.preventDefault();
      selectedFile = event.target.files[0];
      fileName = selectedFile.name;

      if (selectedFile) {
        const {resultImageURL, resultFileURL} = await fetchRemoveImageFile(
          selectedFile
        );
        resultImage = resultImageURL;
        resultFile = resultFileURL;
      }
    } finally {
      $loading = false;
    }
  }

  function handleClick(event: Event) {
    fileInput.click();
    clicked = true;

    setTimeout(() => {
      clicked = false;
    }, 1000);
  }

  function handleURLChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    imageURL = inputElement.value;
  }

  async function handleURLSubmit() {
    $loading = true;
    try {
      const {resultImageURL, resultFileURL} = await fetchRemoveresultImageURL(
        imageURL
      );
      resultImage = resultImageURL;
      resultFile = resultFileURL;
    } finally {
      $loading = false;
    }
  }
</script>

{#if !$loading}
  <div class=" max-w-8xl mx-auto sm:px-6 lg:px-8">
    <div
      on:drop={handleDrop}
      on:dragover={handleDragOver}
      on:dragleave={handleDragLeave}
      class="flex flex-col items-center py-12 px-6 border-2 border-dashed border-gray-400 rounded-md {dragging
        ? 'border-yellow-500'
        : 'border-gray-400'}"
    >
      <svg
        class="w-12 h-12 text-gray-500"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
      >
        <path
          d="M38.65 15.3V11H34.35V8H38.65V3.65H41.65V8H46V11H41.65V15.3ZM4.7 44Q3.5 44 2.6 43.1Q1.7 42.2 1.7 41V15.35Q1.7 14.2 2.6 13.275Q3.5 12.35 4.7 12.35H12.05L15.7 8H29.7V11H17.1L13.45 15.35H4.7Q4.7 15.35 4.7 15.35Q4.7 15.35 4.7 15.35V41Q4.7 41 4.7 41Q4.7 41 4.7 41H38.7Q38.7 41 38.7 41Q38.7 41 38.7 41V20H41.7V41Q41.7 42.2 40.775 43.1Q39.85 44 38.7 44ZM21.7 36.7Q25.3 36.7 27.75 34.25Q30.2 31.8 30.2 28.15Q30.2 24.55 27.75 22.125Q25.3 19.7 21.7 19.7Q18.05 19.7 15.625 22.125Q13.2 24.55 13.2 28.15Q13.2 31.8 15.625 34.25Q18.05 36.7 21.7 36.7ZM21.7 33.7Q19.3 33.7 17.75 32.125Q16.2 30.55 16.2 28.15Q16.2 25.8 17.75 24.25Q19.3 22.7 21.7 22.7Q24.05 22.7 25.625 24.25Q27.2 25.8 27.2 28.15Q27.2 30.55 25.625 32.125Q24.05 33.7 21.7 33.7ZM21.7 28.2Q21.7 28.2 21.7 28.2Q21.7 28.2 21.7 28.2Q21.7 28.2 21.7 28.2Q21.7 28.2 21.7 28.2Q21.7 28.2 21.7 28.2Q21.7 28.2 21.7 28.2Z"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>

      <button on:click={handleClick}>
        <p
          class=" text-sm sm:text-2xl md:text-3xl lg:text-4xl my-4 text font-semibold font-sans {clicked
            ? ' text-cyan-200'
            : ' text-violet-200'}"
        >
          {i('Click or Drag & Drop')}
        </p>
        <input
          on:change={handleFileChange}
          bind:this={fileInput}
          type="file"
          name="file"
          multiple
          class="sr-only"
        />
      </button>

      <div class="flex flex-row">
        <p class=" text-gray-700">
          <button class="mt-2" on:click={() => window.modal.showModal()}>
            <p
              class=" text-sm sm:text-xl md:text-xl lg:text-2xl font-bold font-sans underline"
            >
              {i('URL')}
            </p>
          </button>
          <dialog id="modal" class="modal modal-bottom sm:modal-middle">
            <form method="dialog" class="modal-box">
              <h3 class="font-bold text-lg">
                {i('Type Image URL and Press Submit Button')}
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
                class="btn btn-active btn-primary">{i('Submit')}</button
              >
            </form>
            <form method="dialog" class="modal-backdrop">
              <button>i("close")</button>
            </form>
          </dialog>
        </p>
      </div>

      <p
        class="mt-4 text-sm sm:text-sm md:text-base lg:text-lg font-bold font-sans"
      >
        {i('Maximum file size must be 512MB')}
      </p>
    </div>
  </div>
{/if}

{#if (fileName || imageURL) && resultImage && resultFile}
  <ResultImage {fileName} {imageURL} {resultImage} {resultFile} />
{/if}

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
    font-size: 1rem;
  }
</style>
