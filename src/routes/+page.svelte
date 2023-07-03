<script lang="ts">
  import Companies from '@components/home/Companies.svelte';
  import Feature from '@components/home/Feature.svelte';
  import Hero from '@components/home/Hero.svelte';
  import {onMount} from 'svelte';
  import {currentLang} from '@store/i18n';

  onMount(() => {
    const url = window.location.href;
    const lang = window.navigator.language.substring(0, 2);
    const newUrl = `${url}${lang}`;

    currentLang.set(lang);
    window.location.replace(newUrl);
  });
</script>

<Hero />
<div class="divider bg-base-200 mb-0 mt-0" />
<Companies />
<div class="divider bg-base-200 mb-0 mt-0" />
<Feature bgColor="bg-base-200" />
<div class="divider bg-base-200 mb-0 mt-0" />
