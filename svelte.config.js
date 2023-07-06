/* eslint-disable import/namespace */
import * as path from 'path';
// eslint-disable-next-line import/default, import/no-named-as-default, import/no-named-as-default-member
import adapter from '@sveltejs/adapter-cloudflare';
// eslint-disable-next-line import/no-unresolved
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess()],

  kit: {
    adapter: adapter({ routes: { include: ['/*'], exclude: ['<all>', '/sitemap.xml'] } }),
    alias: {
      '@src': path.resolve('/src'),
      '@components': path.resolve('src/components'),
      '@store': path.resolve('src/lib/store'),
      '@utils': path.resolve('src/utils')
    },
  },

  // refs: https://kit.svelte.dev/docs/configuration#env
  env: {
    dir: '.',
    publicPrefix: 'PUBLIC_'
  }
}


export default config;
