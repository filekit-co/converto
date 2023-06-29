import * as path from 'path';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build'
    }),
    alias: {
      '@src': path.resolve('/src'),
      '@components': path.resolve('src/lib/components'),
      '@store': path.resolve('src/lib/store'),
      '@utils': path.resolve('src/utils')
    },
    // refs: https://kit.svelte.dev/docs/configuration#env
    env: {
      dir: '.',
      publicPrefix: 'PUBLIC_'
    }
  }
};

export default config;
