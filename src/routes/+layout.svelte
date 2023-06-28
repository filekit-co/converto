<script lang="ts">
  import '../app.css';
  import Nav from '@components/common/Nav.svelte';
  import Footer from '@components/common/Footer.svelte';

  import Header from '@components/common/Header.svelte';
  import {loading} from '@components/common/loading';
  import {navigating} from '$app/stores';
  import Loader from '@components/common/Loader.svelte';

  $: $loading = !!$navigating;
</script>

{#if $loading}
  <Loader />
{/if}

<Header />
<Nav />
<slot />
<Footer />
