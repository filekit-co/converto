<script lang='ts'>
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
            style="background:none"
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

<div class="container">
    <div class="upload-list">
        <div class="upload d-flex flex-column" data-v-38fa4bd8>
            <div data-v-38fa4bd8 style="flex: 1 1 0%;">
                <div class="row" data-v-38fa4bd8 style="height: 100%; min-height: 245px;">
                    <div class="col-md-8" data-v-38fa4bd8>
                        <ul class="nav" data-v-38fa4bd8 style="margin-left: -8px;">
                            <button class="btn btn-active btn-ghost" style="background:none">Origin</button>
                            <button class="btn btn-active btn-ghost" style="background:none">Result</button>
                        </ul>
                        <div class='upload-tabs' data-v-38fa4bd8>
                            <img class="image" src={resultImage} alt="image" />
                        </div>
                    </div>
                        <div class="d-flex flex-grow-1 flex-shrink-1 flex-column align-items-center justify-content-center download-buttons" data-v-38fa4bd8>
                            <div class="d-flex flex-md-column right-column" data-v-38fa4bd8>
                                <a
                                    class="btn btn-primary btn-download mr-2 mr-md-0"
                                    target="_blank"
                                    rel="noopener"
                                    href={downloadedFile}
                                    download="downloaded_Image">Download</a
                                >
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>


<style>
.container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%
}

@media(min-width: 576px) {
    .container {
        max-width:540px
    }
}

@media(min-width: 768px) {
    .container {
        max-width:720px
    }
}

@media(min-width: 992px) {
    .container {
        max-width:960px
    }
}

@media(min-width: 1200px) {
    .container {
        max-width:1140px
    }
}

.container-fluid,.container-lg,.container-md,.container-sm,.container-xl {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%
}

@media(min-width: 576px) {
    .container,.container-sm {
        max-width:540px
    }
}

@media(min-width: 768px) {
    .container,.container-md,.container-sm {
        max-width:720px
    }
}

@media(min-width: 992px) {
    .container,.container-lg,.container-md,.container-sm {
        max-width:960px
    }
}

@media(min-width: 1200px) {
    .container,.container-lg,.container-md,.container-sm,.container-xl {
        max-width:1140px
    }
}

.upload-list {
    box-sizing: border-box;
}

.upload[data-v-38fa4bd8] {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 3px rgba(0,0,0,.161);
    margin: 20px auto;
    max-width: 990px;
    min-height: 300px;
    padding: 15px;
    position: relative
}

.right-column[data-v-38fa4bd8] {
    width: 100%
}

@media(min-width: 768px) {
    .right-column[data-v-38fa4bd8] {
        width:200px
    }
}

@media(max-width: 767px) {
    .download-buttons div[data-v-38fa4bd8],.download-buttons[data-v-38fa4bd8] {
        width:100%
    }
}

.btn-download[data-v-38fa4bd8] {
    width: 100%
}

@media(min-width: 768px) {
    .btn-download[data-v-38fa4bd8] {
        min-width:190px
    }
}

.ph-button[data-v-38fa4bd8] {
    height: 40px;
    width: 100%
}

@media(min-width: 768px) {
    .ph-button[data-v-38fa4bd8] {
        width:190px
    }
}

.ph-info[data-v-38fa4bd8] {
    height: 19px;
    width: 100%
}

@media(min-width: 768px) {
    .ph-info[data-v-38fa4bd8] {
        width:190px
    }
}

@media(min-width: 576px) {
    .upload[data-v-38fa4bd8] {
        margin-bottom:40px;
        margin-top: 40px;
        padding: 20px 30px
    }
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px
}

.col-md-8 {
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 100%
}

@media(min-width: 768px) {
    .col-md-8 {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%
    }
    .pb-md-3,.py-md-3 {
        padding-bottom: 1rem!important
    }
    .col-md-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
    }
    .mt-md-0,.my-md-0 {
        margin-top: 0!important
    }
}

@media(min-width: 768px) {
    .flex-md-row {
        flex-direction:row!important
    }

    .flex-md-column {
        flex-direction: column!important;
    }
}

.upload-tabs[data-v-38fa4bd8] {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 10px
}

.nav {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
}

.fade-in-on-render[data-v-38fa4bd8] {
    -webkit-animation: fadeInOnRender-38fa4bd8 .3s;
    animation: fadeInOnRender-38fa4bd8 .3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    opacity: 0
}

.text-center {
    text-align: center!important;
}

.align-items-center {
    align-items: center!important
}

.align-items-center {
    align-items: center!important;
}

.justify-content-center {
    justify-content: center!important;
}

.flex-column {
    flex-direction: column!important;
}

.d-flex {
    display: flex!important;
}

.flex-shrink-1 {
    flex-shrink: 1!important;
}

.flex-grow-1 {
    flex-grow: 1!important;
}

@media(min-width: 768px) {
    .right-column[data-v-38fa4bd8] {
        width:200px
    }
}

.right-column[data-v-38fa4bd8] {
    width: 100%
}

.flex-row {
    flex-direction: row!important
}

.w-100 {
    width: 100%!important;
}

.mb-1,.my-1 {
    margin-bottom: .25rem!important
}

</style>