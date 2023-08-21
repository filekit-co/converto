<script lang="ts">
  import '../app.css';
  import {page} from '$app/stores';
  import Nav from '@components/common/Nav.svelte';
  import Footer from '@components/common/Footer.svelte';

  import Header from '@components/common/Header.svelte';
  import {loading} from '@components/common/loading';
  import {errorStatus, errorMessage} from '@components/common/error';
  import {imgClicked} from '@components/RemoveBackground/imgPreview';
  import {navigating} from '$app/stores';
  import Loader from '@components/common/Loader.svelte';
  import ImagePreview from '@components/RemoveBackground/ImagePreview.svelte';
  import Alert from '@components/common/Alert.svelte';

  $: $loading = !!$navigating;
  $: $imgClicked;
  $: $errorStatus;
  $: $errorMessage;
</script>

<svelte:head>
  <!-- @ads: Banner 468x60 -->
  <!-- @ads: Banner 468x60 -->
  <script type="text/javascript">
    atOptions = {
      key: 'd8f239bc39bef71459fcda80043f8868',
      format: 'iframe',
      height: 60,
      width: 468,
      params: {}
    };
    document.write(
      '<scr' +
        'ipt type="text/javascript" src="http' +
        (location.protocol === 'https:' ? 's' : '') +
        '://www.profitablecreativeformat.com/d8f239bc39bef71459fcda80043f8868/invoke.js"></scr' +
        'ipt>'
    );
  </script>
  <!-- @ads: Banner 300x250 -->
  <!-- @ads: Banner 300x250 -->
  <script type="text/javascript">
    atOptions = {
      key: 'f753a0e63f622ab13acf363340b1493b',
      format: 'iframe',
      height: 250,
      width: 300,
      params: {}
    };
    document.write(
      '<scr' +
        'ipt type="text/javascript" src="http' +
        (location.protocol === 'https:' ? 's' : '') +
        '://www.profitablecreativeformat.com/f753a0e63f622ab13acf363340b1493b/invoke.js"></scr' +
        'ipt>'
    );
  </script>
  <!-- @ads: Native banner-->
  <!-- @ads: Native banner-->
  <script
    async
    data-cfasync="false"
    src="//pl20385591.highcpmrevenuegate.com/4c6464626ad7dfabdf46e641ba81dca5/invoke.js"
  ></script>
  <div id="container-4c6464626ad7dfabdf46e641ba81dca5" />
</svelte:head>

<Header />

{#if $page.error}
  <slot />
{:else}
  {#if $loading}
    <Loader />
  {/if}

  {#if $errorStatus}
    <Alert />
  {/if}

  {#if $imgClicked}
    <ImagePreview />
  {/if}
  <Nav />
  <slot />
  <Footer />
{/if}
