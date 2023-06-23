import type { UpdateHeaderProps } from '$lib/types';
import type { PageLoad } from './$types';
import type { Config } from '@sveltejs/adapter-vercel';

export const config:Config = {
  runtime: 'edge'
};

export const load = (({ }) => {
  const headerProps: UpdateHeaderProps = {
    titleContent:
      'Every files can convert - all for free - one click - within 5 seconds - best file compression software - filekit.co',
    description: `Best file compression software. File Conversion and Compression Services.
    Convert documents, images, and PDFs to any format. Compress files to reduce their size. Encrypt and decrypt PDFs. Merge, delete, and arrange PDFs.
    We offer a wide range of file conversion and compression services to meet your needs. Whether you need to convert a document to PDF, compress a large file, or encrypt a PDF, we can help.
    Our services are easy to use and affordable. You can convert, compress, and encrypt files online or through our desktop app.
    Try our file conversion and compression services today and see the difference.`
  };
    return {headerProps}
}) satisfies PageLoad;
