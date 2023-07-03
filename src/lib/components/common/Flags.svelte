<script lang="ts">
  import {setLang} from '@store/i18n';
  import {IconWorld} from '@tabler/icons-svelte';
  import {COUNTRIES} from '$lib/consts';
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="dropdown dropdown-end">
  <label tabindex="0" class="m-1 btn bg-transparent border-transparent">
    <IconWorld class="h-10" />
  </label>

  <ul
    tabindex="0"
    class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
  >
    {#each Object.entries(COUNTRIES) as [code, value]}
      <li>
        <button on:click={() => setLang(code)}>
          <span class="flag flag-country-{code}" />
          {value}
        </button>
      </li>
    {/each}
  </ul>
</div>
