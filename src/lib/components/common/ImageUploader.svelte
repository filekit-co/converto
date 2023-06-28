<script lang="ts">
  import {PUBLIC_IMG_API_URL} from '$env/static/public';
  import {_} from 'svelte-i18n';
  import { writable } from 'svelte/store';
  import RemoveImageFeature from '@components/pages/RemoveImageFeature.svelte';

  let droppedFiles: File[] = [];
  let selectedFile: any = null;
  let resultFile: any = null;
  let resultImage: any;
  let imageURL: any = null;
  let fileInput: any = null;
  let dragging: boolean;
  let fileName: string = '';
  let progress: number = 0;

  async function handleDrop(event) {
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    
    droppedFiles = Array.from(fileList);
    fileName = droppedFiles[0].name;
    progress = 0;

    const formData = new FormData();
    droppedFiles.forEach(file => {
      formData.append('image', file);
    });

    const response = await fetch(`${PUBLIC_IMG_API_URL}/bg/remove`, {
      method: 'POST',
      body: formData,
      mode: 'cors'
    });

    const totalSize = response.headers.get('content-length');
      let loadedSize = 0;

      const reader = response.body.getReader();
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        chunks.push(value);
        loadedSize += value.length;

        // 진행 상황 계산하여 progress 값 업데이트
        const currentProgress = Math.round((loadedSize / totalSize) * 100);
        progress = currentProgress;
        
      }

      const blob = new Blob(chunks, { type: response.headers.get('content-type') });
      const file = new File([blob], 'Result_Image', { type: blob.type });
      resultImage = URL.createObjectURL(blob)
      resultFile = URL.createObjectURL(file)
  }

  function handleDragOver(event) {
    event.preventDefault();
    dragging = true;
  }

  function handleDragLeave(event) {
    event.preventDefault();
    droppedFiles = [];
    dragging = false;
  }

  async function handleFileChange(event) {
    event.preventDefault();
    selectedFile = event.target.files[0];
    fileName = selectedFile.name;
    progress = 0;

    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await fetch(`${PUBLIC_IMG_API_URL}/bg/remove`, {
        method: 'POST',
        body: formData,
        mode: 'cors',
        headers: {
        'X-Requested-With': 'XMLHttpRequest'
        }
      });
      const totalSize = response.headers.get('content-length');
      let loadedSize = 0;

      const reader = response.body.getReader();
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        chunks.push(value);
        loadedSize += value.length;

        // 진행 상황 계산하여 progress 값 업데이트
        const currentProgress = Math.round((loadedSize / totalSize) * 100);
        progress = currentProgress;
        
      }

      const blob = new Blob(chunks, { type: response.headers.get('content-type') });
      const file = new File([blob], 'Result_Image', { type: blob.type });
      resultImage = URL.createObjectURL(blob)
      resultFile = URL.createObjectURL(file)
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
    const totalSize = response.headers.get('content-length');
    let loadedSize = 0;

    const reader = response.body.getReader();
    const chunks = [];

    while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        chunks.push(value);
        loadedSize += value.length;

        // 진행 상황 계산하여 progress 값 업데이트
        const currentProgress = Math.round((loadedSize / totalSize) * 100);
        progress = currentProgress;
        
    }

    const blob = new Blob(chunks, { type: response.headers.get('content-type') });
    const file = new File([blob], 'Result_Image', { type: blob.type });
    resultImage = URL.createObjectURL(blob)
    resultFile = URL.createObjectURL(file)
  }
</script>

<div class="py-12 px-4">
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div 
      on:drop={handleDrop}
      on:dragover={handleDragOver}
      on:dragleave={handleDragLeave}
      class="flex flex-col items-center py-12 px-6 border-2 border-dashed border-gray-400 rounded-md {dragging ? 'border-yellow-500' : 'border-gray-400'}">
      <svg
        class="w-12 h-12 text-gray-500" 
        aria-hidden="true" fill="none" stroke="currentColor"
        viewBox="0 0 48 48"
      >
        <path d="M38.65 15.3V11H34.35V8H38.65V3.65H41.65V8H46V11H41.65V15.3ZM4.7 44Q3.5 44 2.6 43.1Q1.7 42.2 1.7 41V15.35Q1.7 14.2 2.6 13.275Q3.5 12.35 4.7 12.35H12.05L15.7 8H29.7V11H17.1L13.45 15.35H4.7Q4.7 15.35 4.7 15.35Q4.7 15.35 4.7 15.35V41Q4.7 41 4.7 41Q4.7 41 4.7 41H38.7Q38.7 41 38.7 41Q38.7 41 38.7 41V20H41.7V41Q41.7 42.2 40.775 43.1Q39.85 44 38.7 44ZM21.7 36.7Q25.3 36.7 27.75 34.25Q30.2 31.8 30.2 28.15Q30.2 24.55 27.75 22.125Q25.3 19.7 21.7 19.7Q18.05 19.7 15.625 22.125Q13.2 24.55 13.2 28.15Q13.2 31.8 15.625 34.25Q18.05 36.7 21.7 36.7ZM21.7 33.7Q19.3 33.7 17.75 32.125Q16.2 30.55 16.2 28.15Q16.2 25.8 17.75 24.25Q19.3 22.7 21.7 22.7Q24.05 22.7 25.625 24.25Q27.2 25.8 27.2 28.15Q27.2 30.55 25.625 32.125Q24.05 33.7 21.7 33.7ZM21.7 28.2Q21.7 28.2 21.7 28.2Q21.7 28.2 21.7 28.2Q21.7 28.2 21.7 28.2Q21.7 28.2 21.7 28.2Q21.7 28.2 21.7 28.2Q21.7 28.2 21.7 28.2Z"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        />
      </svg>
      <p class="text-xl text-gray-700">Drop files to upload</p>
      <div class="flex flex-row">
        
        <p class="mb-2 text-gray-700">or,
          <button
            class="btn btn-active btn-ghost url-button"
            on:click={() => window.modal.showModal()}
          >
            URL
          </button>
          <dialog id="modal" class="modal modal-bottom sm:modal-middle">
            <form method="dialog" class="modal-box">
              <h3 class="font-bold text-lg">
                {@html $_('Type Image URL and Press Submit Button')}
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
                class="btn btn-active btn-primary">{@html $_('Submit')}</button
              >
            </form>
            <form method="dialog" class="modal-backdrop">
              <button>{@html $_('close')}</button>
            </form>
          </dialog>
        </p>

      </div>
      <label class="bg-white px-4 h-9 inline-flex items-center rounded border border-gray-300 shadow-sm text-sm font-medium text-gray-700 focus-within:ring-2 ring-offset-2 ring-yellow-500">
        Select files
        <input 
          on:change={handleFileChange}
          bind:this={fileInput} type="file" name="file" multiple class="sr-only" 
        />
      </label>
    </div>
  </div>

  <!-- {#if fileName && progress} -->
  <!-- 드래그앤드롭 or 파일 선택할 시 -->
  {#if fileName && progress }
  <ul class="my-6 bg-white rounded divide-y divide-gray-200 shadow ">
    <li class="p-3 flex items-center justify-between">
      <div class="w-9 h-9 bg-gray-300">
        <img src={resultImage} alt="image" />
      </div>
      <div class="text-sm text-gray-700">{fileName}</div>
      <div class="w-40 bg-gray-200 rounded-full h-5 shadow-inner overflow-hidden relative flex items-center justify-center">
        <div class="inline-block h-full bg-yellow-400 absolute top-0 left-0" style="width: {progress}%" />
        <div class=" relative z-10 text-xs font-semibold text-center text-white drop-shadow text-shadow">
          {progress}%
        </div>
      </div>
      <button class="w-40 bg-cyan-200 rounded-full h-5 shadow-inner overflow-hidden relative flex items-center justify-center">
        <div class=" relative z-10 text-xs font-semibold text-center text-white drop-shadow text-shadow">
          <a target="_blank" rel="noopener" href={resultFile} download="Result_Image">
            {@html $_('Download')}
          </a>
        </div>
      </button>
    </li>
  </ul>
  {/if}

  <!-- {#if resultImage && urlExist && resultFile && progress} -->
  <!-- url 입력할 시 -->
  {#if resultImage && imageURL && resultFile}
  <ul class="my-6 bg-white rounded divide-y divide-gray-200 shadow ">
    <li class="p-3 flex items-center justify-between">
      <div class="w-9 h-9 bg-gray-300">
        <img src={resultImage} alt="image" />
      </div>
      <div class="text-sm text-gray-700">{imageURL}</div>
      <div class="w-40 bg-gray-200 rounded-full h-5 shadow-inner overflow-hidden relative flex items-center justify-center">
        <div class="inline-block h-full bg-yellow-400 absolute top-0 left-0" style="width: {progress}%" />
        <div class=" relative z-10 text-xs font-semibold text-center text-white drop-shadow text-shadow">
          {progress}%
        </div>
      </div>
      <button class="w-40 bg-cyan-200 rounded-full h-5 shadow-inner overflow-hidden relative flex items-center justify-center">
        <div class=" relative z-10 text-xs font-semibold text-center text-white drop-shadow text-shadow">
          <a target="_blank" rel="noopener" href={resultFile} download="Result_Image">
            {@html $_('Download')}
          </a>
        </div>
      </button>
    </li>
  </ul>
  {/if}

  <RemoveImageFeature />

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
    font-size: 1rem;
  }
</style>
