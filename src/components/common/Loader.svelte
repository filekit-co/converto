<script lang="ts">
  import {Circle3} from 'svelte-loading-spinners';
</script>

<div class="fixed w-full h-full z-10 in:fade={{duration: 150}}">
  <div
    class="absolute w-full h-full bg-white dark:bg-cyan-800 opacity-50 z-10"
  />
  <div class="absolute w-full h-full flex justify-center items-center z-20">
    <Circle3 />
  </div>
</div>
