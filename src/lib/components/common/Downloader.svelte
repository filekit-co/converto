<script lang="ts">
  import {onMount, onDestroy} from 'svelte';
  import {loading} from '@components/common/loading';

  export let uploadData: any;

  $: $loading;
  onMount(() => {
    $loading = true;
    console.log(uploadData);
    // $loading = false;
    // 1. loading
    // 2. fetch
    // 3. loading off
    // 4. render download
  });
</script>
