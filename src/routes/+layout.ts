import {browser} from '$app/environment';
import '@store/i18n';
import {locale, waitLocale} from 'svelte-i18n';

export const prerender = true

export const load = async () => {
  if (browser) {
    locale.set(window.navigator.language);
  }
  await waitLocale();
};
