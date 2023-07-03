import {writable} from 'svelte/store';
import {browser} from '$app/environment';
import {init, register} from 'svelte-i18n';
import { COUNTRY_CODES } from '$lib/consts';

export const defaultLang = 'us';
export const currentLang = writable(defaultLang);
let initialLocale = '';

COUNTRY_CODES.forEach((code) => {
  register(code, () => import(`../../translation/${code}.json`));
});

init({
  fallbackLocale: defaultLang,
  initialLocale: browser ? window.navigator.language : defaultLang
});

export function setLang(lang: string) {
  init({
    fallbackLocale: initialLocale,
    initialLocale: lang
  });
}
