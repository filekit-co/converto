
<script lang="ts">
  import {_} from '@store/i18n'
  import {PUBLIC_IMG_API_URL} from '$env/static/public';

  export let resultImage;
  export let downloadedFile;

  let droppedFiles = [];
  let selectedFile: any = null;
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

<div
  class="drop-zone w-full flex flex-col sm:justify-center sm:items-center sm:gap-8 sm:pt-36 sm:pb-16 rounded-4xl bg-white shadow-2xl"
  style="height: 300px; padding-top: 32px; padding-bottom: 10px;"
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
      {@html $_('Upload')}
    </button>
  </form>

  <div class="hidden sm:flex flex-col gap-1.5">
    <p class="m-0 font-bold text-xl text-typo-secondary">{@html $_('Or Drag a File,')}</p>
    <span class="text-xs text-typo-secondary text-center"
      >{@html $_('Insert Image or,')}
      <button
        class="btn btn-active btn-ghost url-button"
        on:click={() => window.my_modal_5.showModal()}>URL</button
      >
      <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
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
    </span>
  </div>
</div>

<div class="container">
  <div class="upload-list">
    <div class="upload d-flex flex-column">
      <div style="flex: 1 1 0%">
        <div class="row" style="height: 100%; min-height: 245px;">
          <div class="col-md-8">
            <img class="image" src={resultImage} alt="image" />
          </div>
          <div
            class="col-md-4 py-md-3 d-flex flex-column align-items-center justify-content-center text-center"
          >
            <a
              class="btn btn-primary text-white text-xs"
              style="height: 60px;
                            width: 100%;
                            margin-top: 16px;
                            margin-bottom: 16px;"
                            target="_blank"
                            rel="noopener"
                            href={downloadedFile}
                            download="downloaded_Image">{@html $_('Download')}</a
                        >
                        <!-- <button class="btn btn-primary text-white text-xs"                             
                        style="height: 60px;
                        width: 100%;
                        margin-top: 16px;
                        margin-bottom: 16px;">share</button> -->
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  <div>
</div>

<style>
  .container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  .container-fluid,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }

  @media (min-width: 576px) {
    .container,
    .container-sm {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container,
    .container-md,
    .container-sm {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      max-width: 1140px;
    }
  }

  .upload-list {
    box-sizing: border-box;
  }

  @media (min-width: 576px) {
    .upload {
      margin-bottom: 40px;
      margin-top: 40px;
      padding: 20px 30px;
    }
  }

  .upload {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.161);
    margin: 20px auto;
    max-width: 990px;
    padding: 15px;
    position: relative;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .d-flex {
    display: flex !important;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
  }

  @media (min-width: 768px) {
    .col-md-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }
    .col-md-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }
    .py-md-3 {
      padding-top: 1rem !important;
    }
  }

  .col-md-4,
  .col-md-8 {
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 100%;
  }

  .justify-content-center {
    justify-content: center !important;
  }

  .align-items-center {
    align-items: center !important;
  }

  .text-center {
    text-align: center !important;
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
