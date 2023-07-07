import { languages } from '$lib/data';
import { getRuntimeFromLocals, addRuntimeToLocals, initSvelteKitServerRuntime } from '@inlang/sdk-js/adapter-sveltekit/server'
import type {Handle} from '@sveltejs/kit';


export const handle: Handle = ({event, resolve}) => {
  const lang = event.request.headers.get('accept-language')?.split(',')[0];
  
  const runtime = initSvelteKitServerRuntime({ language: lang, referenceLanguage: 'en', languages })
	addRuntimeToLocals(event.locals, runtime)
  return resolve(event);
};


export const handleError = async ({ error, event }) => {
	const { i } = getRuntimeFromLocals(event.locals)
	return {
		message: i("Something went wrong")
	};
};