import { languageCodes } from '$lib/data';
import { detectLanguageOrFallback } from '$lib/utils';
import { getRuntimeFromLocals, addRuntimeToLocals, initSvelteKitServerRuntime } from '@inlang/sdk-js/adapter-sveltekit/server'
import type { Handle } from '@sveltejs/kit';

const referenceLanguage = 'en'

export const handle: Handle = (async ({ event, resolve }) => {
	const language = await detectLanguageOrFallback(
		event?.url, 
		event?.request?.headers, 
		referenceLanguage
	)
  const runtime = initSvelteKitServerRuntime({ language, referenceLanguage, languages: languageCodes })
	addRuntimeToLocals(event.locals, runtime)

	const response = await resolve(event);
  return response;
})

export const handleError = async ({ error, event }) => {
	const { i } = getRuntimeFromLocals(event.locals)
	return {
		message: i("Something went wrong")
	};
};