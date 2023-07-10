<script lang="ts">
  import '../app.css';
  import {page} from '$app/stores';
  import Nav from '@components/common/Nav.svelte';
  import Footer from '@components/common/Footer.svelte';

  import Header from '@components/common/Header.svelte';
  import {loading} from '@components/common/loading';
  import {imgClicked} from '@components/RemoveBackground/imgPreview';
  import {navigating} from '$app/stores';
  import Loader from '@components/common/Loader.svelte';
  import ImagePreview from '@components/RemoveBackground/ImagePreview.svelte';

  $: $loading = !!$navigating;
  $: $imgClicked;
</script>

{#if $page.error}
  <slot />
{:else}
  {#if $loading}
    <Loader />
  {/if}

  {#if $imgClicked}
    <ImagePreview />
  {/if}

  <Header />
  <Nav />
  <slot />
  <Footer />
{/if}
