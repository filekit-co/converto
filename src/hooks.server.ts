import { getRuntimeFromLocals, addRuntimeToLocals, initSvelteKitServerRuntime } from '@inlang/sdk-js/adapter-sveltekit/server'
import type {Handle} from '@sveltejs/kit';
import {locale} from 'svelte-i18n';

const languages = ['de', 'en', 'ko']

export const handle: Handle = async ({event, resolve}) => {
  const lang = event.request.headers.get('accept-language')?.split(',')[0];
  if (lang) {
    locale.set(lang);
  }
  // const runtime = initSvelteKitServerRuntime({ language: lang, referenceLanguage: 'en', languages })
	// addRuntimeToLocals(event.locals, runtime)
  return resolve(event);
};


// export const handleError = async ({ error, event }) => {
// 	console.error(error)
// 	const { i } = getRuntimeFromLocals(event.locals)

// 	return {
// 		message: i('server.error.generic'),
// 	};
// };