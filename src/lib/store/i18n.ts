import {derived, writable} from 'svelte/store';
import {browser} from '$app/environment';
import {init, locales, register} from 'svelte-i18n';

const defaultLocale = 'en';
let initialLocale = '';

const path = '../../translation';
export const defaultLang = 'en';
export const currentLang = writable(defaultLang);
export const langs = ['en', 'ko', 'in', 'ch', 'vi', 'ja'];

register('en', () => import('../../translation/en.json'));
register('ch', () => import('../../translation/ch.json'));
register('in', () => import('../../translation/in.json'));
register('ja', () => import('../../translation/ja.json'));
register('ko', () => import('../../translation/ko.json'));
register('vi', () => import('../../translation/vi.json'));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale
});

export function setLang(lang: string) {
  init({
    fallbackLocale: initialLocale,
    initialLocale: lang
  });
}
