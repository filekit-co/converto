<script lang="ts">
  import {
    IconChevronDown,
    IconFileDescription,
    IconHome2,
    IconX
  } from '@tabler/icons-svelte';
  import {_} from 'svelte-i18n';
  import {checked, handleOnClose} from '@store/nav';
  import routes from '$lib/routes';

  export let navId: string;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="drawer-side !overflow-visible">
  <label for={navId} class="drawer-overlay" />
  <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
    <h5 class="font-semibold text-gray-500 uppercase dark:text-gray-400">
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
    <li>
      <button type="button" class="flex items-center">
        <IconHome2 class="w-6" />
        <a class="" href="/">{@html $_('Home')}</a>
      </button>
    </li>

    <div tabindex="0" class="collapse collapse-arrow">
      <input type="checkbox" />
      <div class="collapse-title font-medium">File Convert</div>
      <ul class="collapse-content menu">
        {#each routes.conversion as link}
          <li>
            <a href={link.href}>{link.text}</a>
          </li>
        {/each}
      </ul>
    </div>

    <div tabindex="0" class="collapse collapse-arrow">
      <input type="checkbox" />
      <div class="collapse-title font-medium">File Convert</div>
      <ul class="collapse-content menu">
        {#each routes.conversion as link}
          <li>
            <a href={link.href}>{link.text}</a>
          </li>
        {/each}
      </ul>
    </div>

    <div tabindex="0" class="collapse collapse-arrow">
      <input type="checkbox" />
      <div class="collapse-title font-medium">File Convert</div>
      <ul class="collapse-content menu">
        {#each routes.conversion as link}
          <li>
            <a href={link.href}>{link.text}</a>
          </li>
        {/each}
      </ul>
    </div>
  </ul>
</div>
