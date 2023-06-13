<!-- https://svelte.dev/repl/f467fe36446444f09a2a7633b1faa6a1?version=3.20.1 -->
<svelte:options accessors={true} />

<script lagn="ts">
  import { createEventDispatcher } from "svelte";

  let shown = false;

  let dispatch = createEventDispatcher();

  export function show() {
    shown = !shown;
    dispatch("show", shown);
  }
</script>

{#if shown}
  <div
    class="position: fixed z-100 w-full h-full bg-center bg-no-repeat bg-[url('/images/drag_background.png')] opacity-50 bg-error"
  />
{/if}
