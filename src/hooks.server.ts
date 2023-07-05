// hooks.server.ts
import { currentLang } from '@store/i18n';
import type {Handle} from '@sveltejs/kit';
import {locale} from 'svelte-i18n';

export const ssr = true;
export const csr = true;

export const handle: Handle = async ({event, resolve}) => {
  const url = new URL(event.request.url)
  let lang = event.request.headers.get('accept-language')?.split(',')[0];
  lang = lang?.substring(3).toLowerCase();

  locale.set(lang)
  
  const response = await resolve(event)

  return response
};

