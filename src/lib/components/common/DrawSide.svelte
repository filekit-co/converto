<script lang="ts">
  import {IconX} from '@tabler/icons-svelte';
  import {_} from 'svelte-i18n';
  import {checked, handleOnClose} from '@store/nav';

  export let navId: string;
</script>

<!-- TODO: fill sidebar -->
<!-- drawer side content -->
<div class="drawer-side">
  <label for={navId} class="drawer-overlay" />
  <ul class="menu p-4 w-80 h-full bg-base-200">
    <h5
      class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      Menu
    </h5>
    <button
      type="button"
      on:click={handleOnClose}
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <IconX class="w-5 h-5" />
      <span class="sr-only">Close menu</span>
    </button>
    <!-- Sidebar content here -->
  </ul>
</div>
