import {browser} from '$app/environment';
import '@store/i18n';
import {locale, waitLocale} from 'svelte-i18n';
import type {Config} from '@sveltejs/adapter-vercel';

export const prerender = true

export const config: Config = {
  runtime: 'nodejs18.x'
};

export const load = async () => {
  if (browser) {
    locale.set(window.navigator.language);
  }
  await waitLocale();
};
