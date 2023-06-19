<script lang="ts">
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

    const response = await fetch('http://localhost:8000/bg/remove', {
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

      const response = await fetch('http://localhost:8000/bg/remove', {
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
      `http://localhost:8000/bg/remove?url=${imageURL}`,
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
  <!-- 백그라운드 사라진 이미지가 있을 때  -->
  {#if resultImage && downloadedFile}
    <img class="image" src={resultImage} alt="image" />
    <a
      class="btn btn-primary btn-download mr-2 mr-md-0"
      target="_blank"
      rel="noopener"
      href={downloadedFile}
      download="downloaded_Image">Download</a
    >
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
          class="!border !border-transparent rounded-full font-bold transition ease-in-out text-center font-body no-underline hover:no-underline inline-flex items-center justify-center text-2xl px-8 py-2.5 text-white !bg-primary hover:!bg-primary-hover active:!bg-primary-hover active:scale-[0.98] focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover"
        >
          Upload
        </button>
      </form>

      <div class="hidden sm:flex flex-col gap-1.5">
        <p class="m-0 font-bold text-xl text-typo-secondary">Or Drag a File,</p>
        <span class="text-xs text-typo-secondary text-center"
          >Insert Image or,
          <button
            class="btn btn-active btn-ghost"
            on:click={() => window.my_modal_5.showModal()}>URL</button
          >
          <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
            <form method="dialog" class="modal-box">
              <h3 class="font-bold text-lg">
                Type Image URL and Press Submit Button
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
                class="btn btn-active btn-primary">Submit</button
              >
            </form>
            <form method="dialog" class="modal-backdrop">
              <button>close</button>
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
  .image {
    padding-bottom: 20px;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
  }
  .container {
    display: flex;
    align-items: center;
    gap: 40px;
  }

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
