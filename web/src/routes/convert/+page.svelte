<script>
  import FileUploader from "@components/common/FileUploader.svelte";
</script>

<svelte:head>
  <meta charset="utf-8" />
  <link rel="icon" href="%sveltekit.assets%/favicon.ico" />
  <title>Converto — Convert Files</title>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
  />
  <meta name="author" content="filekit.co" />
  <meta
    property="og:title"
    content="Every files can convert - all for free - one click - within 5 seconds - filekit.co"
  />
  <meta property="og:image" content="" />
  <meta property="twitter:image" content="" />
  <meta property="og:url" content="https://www.filekit.co" />
  <meta property="og:site_name" content="filekit.co" />
  <meta
    property="og:description"
    content="Convert files, remove backgrounds, compress and decompress files, encrypt and decrypt PDFs, merge and arrange PDFs, and more – all for free in just 5 seconds. PDF to document, document to PDF, image to PDF, PDF to image conversions, and easy removal of background images."
  />
  <meta
    property="twitter:title"
    content="File convert, Background Image remove - filekit.co"
  />
  <meta property="twitter:url" content="https://www.filekit.co" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="%sveltekit.assets%/favicon.ico" />
  <meta
    name="description"
    content="Convert files, remove backgrounds, compress and decompress files, encrypt and decrypt PDFs, merge and arrange PDFs, and more – all for free in just 5 seconds. PDF to document, document to PDF, image to PDF, PDF to image conversions, and easy removal of background images."
  />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="%sveltekit.assets%/favicon.ico"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="%sveltekit.assets%/favicon.ico"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="%sveltekit.assets%/favicon.ico"
  />
  <link rel="mainfest" href="%sveltekit.assets%/favicon.ico" />
  <link rel="mask-icon" href="%sveltekit.assets%/favicon.ico" />
  <link rel="shortcut icon" href="%sveltekit.assets%/favicon.ico" />
  <meta name="apple-mobile-web-app-title" content="filekit.co" />
  <meta name="application-name" content="filekit.co" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#f7f9fa" />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:700"
    rel="stylesheet"
  />
</svelte:head>

<div class="w-full px-2 py-32 lg:px-10">
  <div class="text-center">
    <h2
      class="mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none max-[1280px]:!tracking-normal"
    >
      File Converter
      <br />
      <h2
        class="bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]"
      >
        Convert your files to any format
      </h2>
    </h2>
    <p class="text-base-content/60 font-title py-4 font-light md:text-2xl">
      Please <span class="underline underline-offset-4">drag & drop</span> files
      anywhere on the screen or click the
      <span class="underline underline-offset-4">dropzone</span>
      below.
    </p>

    <div class="h-12" />

    <div class="mx-10">
      <FileUploader />
    </div>
  </div>
</div>
