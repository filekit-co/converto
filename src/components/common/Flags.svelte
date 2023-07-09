<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<script lang="ts">
  import {IconWorld} from '@tabler/icons-svelte';
  import type {DivFocusEvent} from '$lib/types';
  import {switchLanguage, loadResource} from '@inlang/sdk-js';
  import {
    languageCountryMap,
    languageTextMap,
    type LanguageCode,
    languageCodes,
    referenceLanguage
  } from '$lib/data';
  import {goto} from '$app/navigation';
  import {page} from '$app/stores';

  let isDropdownOpen = false;

  function handleFlagOnClick(code: string): void {
    switchLanguage(code);

    // $page.url.pathname => i.g /menu, /img/remove-background
    const newRoute = newLangRoute(code, $page.url.pathname);
    isDropdownOpen = false;
    goto(newRoute, {replaceState: false});
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

  function newLangRoute(givenLang: LanguageCode, route: string) {
    const routeParts = route.split('/');

    if (languageCodes.includes(routeParts[1])) {
      // If language code exists in the route, replace it with givenLang
      routeParts[1] = givenLang;
    } else {
      routeParts.splice(1, 0, referenceLanguage);
    }
    return routeParts.join('/');
  }
</script>

<div
  tabindex="0"
  class="dropdown dropdown-end"
  on:focusout={handleDropdownFocusOut}
>
  <button
    tabindex="0"
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
