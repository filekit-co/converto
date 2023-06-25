<script lang="ts">
  import '../app.css';
  import Nav from '@components/common/Nav.svelte';
  import Footer from '@components/common/Footer.svelte';

  import Header from '@components/common/Header.svelte';
</script>

<Header />
<Nav />
<slot />
<Footer />
