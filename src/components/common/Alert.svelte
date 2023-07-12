<script lang="ts">
  import {i} from '@inlang/sdk-js';
  import {errorStatus, errorMessage} from './error';
  $: $errorStatus;
  $: $errorMessage;

  function handleClick(event: Event) {
    $errorStatus = false;
  }
</script>

<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
  <div class="flex justify-between">
    <p class="font-bold">Warning</p>
    <button
      on:click={handleClick}
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      OK
    </button>
  </div>
  <p>{$errorMessage}</p>
</div>
