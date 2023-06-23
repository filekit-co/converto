<script lang="ts">
  import {page} from '$app/stores';
  import type {HeaderProps, UpdateHeaderProps} from '$lib/types';

  const defaultHeaderProps: HeaderProps = {
    title: 'Filekit.co - Free Online edit file Tool ',
    author: 'filekit.co',
    keywords:
      'Merge PDF, split PDF, combine PDF, extract PDF, compress PDF, convert PDF, Word to PDF, Excel to PDF, Powerpoint to PDF, PDF to JPG, JPG to PDF',
    siteName: 'filekit.co - Online tools for PDF, Images',
    url: 'https://www.filekit.co',
    image: '', // TODO:
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
  <title>{p.title}</title>
  <meta name="author" content={p.author} />
  <meta name="keywords" content={p.keywords} />
  <link rel="canonical" href={p.url} />
  <meta name="description" content={p.description} />

  <!-- TODO: upload app key -->
  <meta name="apple-itunes-app" content="" />
  <meta name="google-play-app" content="" />
  <meta name="google-site-verification" content="" />
  <!-- TODO fin -->

  <meta property="og:title" content={p.title} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={p.image} />
  <meta property="og:url" content={p.url} />
  <meta property="og:site_name" content={p.siteName} />
  <meta property="og:description" content={p.description} />
  <meta property="og:app_id" content="" />

  <!-- TODO -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="" />
  <meta name="twitter:creator" content="" />
  <meta property="twitter:title" content={p.title} />
  <meta property="twitter:description" content={p.description} />
  <meta name="twitter:image:src" content="" />
  <meta property="twitter:url" content={p.url} />
  <!-- TODO -->

  <meta name="apple-mobile-web-app-title" content="filekit.co" />
  <meta name="application-name" content="filekit.co" />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:700"
    rel="stylesheet"
  />
</svelte:head>
