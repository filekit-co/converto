<script>
  import Heading from "./heading.svelte";
  import Logos from "./customer_logos.svelte";
  import Footer from "./footer.svelte";
  import Features from "./feature.svelte";

  import "../app.css";
</script>

<!-- <svelte:head>
  <title>Converto</title>
  <link rel="icon" href="https://fav.farm/📂" />
</svelte:head> -->
<Heading />
<slot />
<div class="divider bg-base-200 mb-0 mt-0" />
<Features />
<div class="divider bg-base-200 mb-0 mt-0" />
<Logos />
<Footer />
