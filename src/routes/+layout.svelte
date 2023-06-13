<script>
  import Nav from "@components/common/Nav.svelte";
  import Footer from "@components/common/Footer.svelte";
  import "../app.css";
  import DragDropBackground from "@components/common/DragDropBackground.svelte";
</script>

<!-- <svelte:head>
  <title>Converto</title>
  <link rel="icon" href="https://fav.farm/📂" />
</svelte:head> -->
<DragDropBackground />
<Nav />
<slot />
<Footer />
