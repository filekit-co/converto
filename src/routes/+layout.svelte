<script>
  import Nav from "@components/common/Nav.svelte";
  import Footer from "@components/common/Footer.svelte";
  import "../app.css";
</script>

<!-- <svelte:head>
  <title>Converto</title>
  <link rel="icon" href="https://fav.farm/📂" />
</svelte:head> -->
<Nav />
<slot />
<Footer />
