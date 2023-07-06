import {sveltekit} from '@sveltejs/kit/vite';
import inlangPlugin from '@inlang/sdk-js/adapter-sveltekit';
import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [inlangPlugin(), sveltekit()],
  resolve: {
    alias: {
      '@src': path.resolve('/src'),
      '@static': path.resolve('/static'),
      '@components': path.resolve('/src/components')
    }
  }
});
