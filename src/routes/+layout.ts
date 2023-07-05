import {browser} from '$app/environment';
import '@store/i18n';
import { currentLang } from '@store/i18n';
import {locale, waitLocale} from 'svelte-i18n';

export const prerender = true

export const load = async () => {
    if (browser) {
      locale.set(window.navigator.language.substring(3).toLowerCase());
      currentLang.set(window.navigator.language.substring(3).toLowerCase())
    }
    await waitLocale();
  };
