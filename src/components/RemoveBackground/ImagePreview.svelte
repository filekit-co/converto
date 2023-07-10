<script lang="ts">
  import {imgData, imgClicked} from '@components/RemoveBackground/imgPreview';

  $: $imgData;
  $: $imgClicked;

  function handleClick() {
    $imgClicked = false;
  }
</script>

<div on:click={handleClick} class="fixed w-full h-full z-20">
  <div class="absolute w-full h-full bg-black opacity-50 z-10" />
  <div class="absolute w-full h-full flex justify-center items-center z-20">
    <img src={$imgData} alt="Image Preview" />
  </div>
</div>
