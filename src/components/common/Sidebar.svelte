<script lang="ts">
  import {IconHome2, IconX} from '@tabler/icons-svelte';
  import {_} from 'svelte-i18n';
  import {handleOnClose} from '@store/nav';
  import {pages} from '$lib/data';

  export let navId: string;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="drawer-side z-40">
  <label for={navId} class="drawer-overlay" />
  <aside class="bg-base-200 w-80 h-screen">
    <ul class="menu p-4">
      <a on:click={handleOnClose} href="/">
        <IconHome2 class="w-6 text-gray-400  hover:text-gray-900 " />
      </a>

      <button
        type="button"
        on:click={handleOnClose}
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <IconX class="w-5 h-5" />
        <span class="sr-only">Close menu</span>
      </button>
    </ul>

    {#each pages as page}
      <div
        tabindex="0"
        class="collapse collapse-arrow bg-base-200 rounded-none"
      >
        <input type="checkbox" />
        <div class="collapse-title font-medium">{page.key}</div>
        <ul class="collapse-content menu menu-md">
          {#each page.value as link}
            <li>
              <a on:click={handleOnClose} href={link.href}>{link.text}</a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="divider bg-base-200 mb-0 mt-0 h-min px-4" />
    {/each}
  </aside>
</div>
