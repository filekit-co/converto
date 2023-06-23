<script lang="ts">
  import {page} from '$app/stores';
  import type {HeaderProps, UpdateHeaderProps} from '$lib/types';

  const defaultHeaderProps: HeaderProps = {
    title: 'Filekit.co — Handle Every file',
    siteName: 'filekit.co',
    url: 'https://www.filekit.co',
    image: '%sveltekit.assets%/favicon.ico',

    titleContent:
      'Every files can convert - all for free - one click - within 5 seconds - best file compression software - filekit.co',
    description: `Best file compression software. File Conversion and Compression Services.
    Convert documents, images, and PDFs to any format. Compress files to reduce their size. Encrypt and decrypt PDFs. Merge, delete, and arrange PDFs.
    We offer a wide range of file conversion and compression services to meet your needs. Whether you need to convert a document to PDF, compress a large file, or encrypt a PDF, we can help.
    Our services are easy to use and affordable. You can convert, compress, and encrypt files online or through our desktop app.
    Try our file conversion and compression services today and see the difference.`
  };

  const pageHeaderProps: UpdateHeaderProps = $page.data?.headerProps || {};

  const p = {...defaultHeaderProps, ...pageHeaderProps};
</script>

<svelte:head>
  <meta charset="utf-8" />
  <link rel="icon" href="%sveltekit.assets%/favicon.ico" />
  <title>{p.title}</title>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
  />
  <meta name="author" content={p.siteName} />

  <meta property="og:title" content={p.titleContent} />

  <meta property="og:image" content={p.image} />
  <meta property="twitter:image" content={p.image} />
  <meta property="og:url" content={p.url} />
  <meta property="og:site_name" content={p.siteName} />
  <meta property="og:description" content={p.description} />
  <meta property="twitter:title" content={p.title} />

  <meta property="twitter:url" content={p.url} />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="%sveltekit.assets%/favicon.ico" />
  <meta name="description" content={p.description} />
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
