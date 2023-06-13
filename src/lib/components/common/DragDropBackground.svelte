<!-- https://svelte.dev/repl/b95ce66b0ef34064a34afc5c0249f313?version=3.59.1 -->

<script lang="ts">
  import { isDragDropping } from "@store/dragDrop";
</script>

{#if $isDragDropping}
  <div
    class="position: fixed z-100 w-full h-full bg-center bg-no-repeat bg-[url('/images/drag_background.png')] opacity-50 bg-error"
  />
{/if}
