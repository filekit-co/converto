<script lang="ts">
import { useState } from "@store/hooks";

  const [imageState, setImageState] = useState(true)
  let rawFiles: string[] =[];
  let images: any[] = [];
  let fileinput: HTMLInputElement;
  let resultImage;
  let link;

  const handleImageState = (e: any) => {
    setImageState((e) => !e);
  }

  const onFileSelected = e => {
    const data = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(data);
    rawFiles = rawFiles.concat(data);
    reader.onload = e => {
      if (e.target?.result === undefined) {
        return;
      }
      let b64Image = e.target?.result as string
      images = images.concat(b64Image);
    };
  };
  
  async function removeBackground() {
    if (!(images && images.length > 0)) {
      return;
    }
    const formData = new FormData();
    // console.log(formData);
    formData.append('image', rawFiles[0]);

    const response = await fetch('http://localhost:8000/bg/remove', {
      method: 'POST',
      body: formData,
      mode: 'cors'
    })
    const blob = await response.blob();
    const newBlob = new Blob([blob])

    const blobUrl = window.URL.createObjectURL(newBlob)

    const link = document.createElement('a');
    link.href = blobUrl;
    link.setAttribute('download', `${filename}.${extension}`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);

    // clean up Url
    window.URL.revokeObjectURL(blobUrl);
    

      // .then(response => response 
      // )
      // .then(result => {
      //   console.log('Success: ', result);
      // })
      // .catch(error => {
      //   console.error('Error: ', error);
      // });
  }
</script>

<div>
  <button class="btn btn-ghost" on:click={handleImageState}>원본</button>
  <button class="btn btn-ghost" on:click={handleImageState}>수정</button>
</div>

<div id="app">
  {#if images}
    {#each images as image, i}
      <img class="image" src={image} alt="image" />
    {/each}
  {/if}
</div>

<div
  class="dropzone-enabled w-full flex flex-col sm:justify-center sm:items-center sm:gap-8 sm:pt-36 sm:pb-16 rounded-4xl bg-white shadow-2xl"
>
  <button on:click={() => fileinput.click()} type="button" class="!border !border-transparent rounded-full font-bold transition ease-in-out text-center font-body no-underline hover:no-underline inline-flex items-center justify-center text-2xl px-8 py-2.5 text-white !bg-primary hover:!bg-primary-hover active:!bg-primary-hover active:scale-[0.98] focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover">
    이미지 업로드
  </button>
  <button on:click={removeBackground}>remove</button>

  <div class="hidden sm:flex flex-col gap-1.5">
    <p class="m-0 font-bold text-xl text-typo-secondary">또는 파일 놓기,</p>
    <span class="text-xs text-typo-secondary text-center">이미지 붙여넣기 또는 
      <a href="#" class="text-typo-secondary select-photo-url-btn underline">
        URL
      </a>  
    </span>
  </div>
  <input
    style="display:none"
    type="file"
    accept=".jpg, .jpeg, .png"
    on:change={e => onFileSelected(e)}
    bind:this={fileinput}
  />
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
