<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<script lang="ts">
  import {IconWorld} from '@tabler/icons-svelte';
  import type {DivFocusEvent} from '$lib/types';
  import {switchLanguage, loadResource} from '@inlang/sdk-js';
  import {
    languageCountryMap,
    languageTextMap,
    type LanguageCode
  } from '$lib/data';

  let isDropdownOpen = false;

  function handleFlagOnClick(code: string): void {
    switchLanguage(code);
    isDropdownOpen = false;
  }

  const getFullLanguageText = (code: string) => {
    return languageTextMap[code as LanguageCode];
  };

  const handleDropdownClick = () => {
    isDropdownOpen = !isDropdownOpen; // togle state on click
  };

  const handleDropdownFocusOut = ({
    relatedTarget,
    currentTarget
  }: DivFocusEvent) => {
    // use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
    if (
      relatedTarget instanceof Element &&
      currentTarget.contains(relatedTarget)
    )
      // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null)
      return;
    isDropdownOpen = false;
  };
</script>

<div class="dropdown dropdown-end" on:focusout={handleDropdownFocusOut}>
  <button
    class="m-1 btn bg-transparent border-transparent"
    on:click={handleDropdownClick}
  >
    <IconWorld class="h-10" />
  </button>

  <ul
    style:visibility={isDropdownOpen ? 'visible' : 'hidden'}
    class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
  >
    {#each Object.entries(languageCountryMap) as [code, value]}
      <li>
        <button
          on:focus={() => loadResource(code)}
          on:click={() => handleFlagOnClick(code)}
        >
          <span class="flag flag-country-{value}" />
          {getFullLanguageText(code)}
        </button>
      </li>
    {/each}
  </ul>
</div>
