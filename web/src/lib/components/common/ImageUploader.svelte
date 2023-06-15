<script lang="ts">
  import type {Files} from 'filedrop-svelte';
  import {filedrop} from 'filedrop-svelte';
  import {filesize} from 'filesize';
  let files: Files;
  let options = {multiple: true};
  $: totalFileSizes =
    files && files.accepted
      ? files.accepted.reduce((sum, file) => sum + file.size, 0)
      : 0;
  function imageName(imageName: string) {
    return imageName.substring(0, 7) + '...';
  }
  let rawFiles: string[] =[];
  let images: any[] = [];
  let fileinput: HTMLInputElement;

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
    // console.log(formData);
    const response = await fetch('http://localhost:8000/bg/remove', {
      method: 'POST',
      body: formData,
      mode: 'cors'
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success: ', result);
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  }
</script>

<div id="app">
  {#if images}
    {#each images as image, i}
      <img class="image" src={image} alt="image" />
    {/each}
    <button
      class="btn btn-accent btn-sm sm:btn-block sm:btn-lg"
      on:click={removeBackground}>Remove</button
    >
  {/if}
  <!-- 업로드 된 이미지가 없을 때 -->
</div>
<div
  on:click={() => fileinput.click()}
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
<input
  style="display:none"
  type="file"
  accept=".jpg, .jpeg, .png"
  on:change={e => onFileSelected(e)}
  bind:this={fileinput}
/>

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