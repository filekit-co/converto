<script lang="ts">
  import { Dropdown, DropdownItem } from "flowbite-svelte";
  import { i, language, languages, switchLanguage } from "@inlang/sdk-js";
  import De from "../../utils/flags/De.svelte";
  import Es from "../../utils/flags/Es.svelte";
  import It from "../../utils/flags/It.svelte";
  import Ja from "../../utils/flags/Ja.svelte";
  import Kr from "../../utils/flags/Kr.svelte";
  import No from "../../utils/flags/No.svelte";
  import Us from "../../utils/flags/Us.svelte";

  async function handleLanguageChange(lang: string) {
    await switchLanguage(lang);
  }

  let dropdownOpen = false;
  const sfLanguages = [
    {
      lang: "de",
      value: "Deutsch",
      icon: De,
    },
    {
      lang: "en",
      value: "English",
      icon: Us,
    },
    {
      lang: "es",
      value: "Español",
      icon: Es,
    },
    {
      lang: "it",
      value: "Italiano",
      icon: It,
    },
    {
      lang: "ja",
      value: "日本語",
      icon: Ja,
    },
    {
      lang: "ko",
      value: "한국어",
      icon: Kr,
    },
    {
      lang: "no",
      value: "Norsk",
      icon: No,
    },
  ];
</script>

<div class="p-2 text-gray-900 dark:text-white font-medium" id="countries">
  {language.toUpperCase()}
</div>
<Dropdown triggeredBy="#countries" bind:open={dropdownOpen}>
  {#each sfLanguages as { lang, value, icon }}
    <DropdownItem
      on:click={() => handleLanguageChange(lang)}
      on:keydown={() => handleLanguageChange(lang)}
      on:click={() => (dropdownOpen = false)}
    >
      <div class="inline-flex items-center">
        <svelte:component this={icon} />
        <span class="p-2">
          {value}
        </span>
      </div>
    </DropdownItem>
  {/each}
</Dropdown>
