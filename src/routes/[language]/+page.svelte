<script lang="ts">
  import {page} from '$app/stores';
  import {locale, waitLocale} from 'svelte-i18n';
  import {currentLang} from '@store/i18n';
  import {onMount} from 'svelte';
  import Hero from '@components/home/Hero.svelte';
  import Companies from '@components/home/Companies.svelte';
  import Feature from '@components/home/Feature.svelte';
  // console.log($page.params);
  const lang = $page.params.language;

  onMount(() => {
    locale.set(lang);
    currentLang.set(lang);
  });
</script>

<Hero />
<div class="divider bg-base-200 mb-0 mt-0" />
<Companies />
<div class="divider bg-base-200 mb-0 mt-0" />
<Feature bgColor="bg-base-200" />
<div class="divider bg-base-200 mb-0 mt-0" />
