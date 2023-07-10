import { languageCodes, referenceLanguage } from '$lib/data';
import { detectLanguageOrFallback } from '$lib/utils';
import { getRuntimeFromLocals, addRuntimeToLocals, initSvelteKitServerRuntime } from '@inlang/sdk-js/adapter-sveltekit/server'
import type { Handle } from '@sveltejs/kit';

const excludeI18nRoute = ['inlang', 'sitemap.xml']

export const handle: Handle = (async ({ event, resolve }) => {
	// top level route
	const tlr = event?.url?.pathname.split('/').at(1)
	if (tlr && excludeI18nRoute.includes(tlr)) {
		const response = await resolve(event);
		return response;		
	} 

	const language = await detectLanguageOrFallback(
			event?.url, 
			event?.request?.headers, 
			referenceLanguage
	)
	if (!tlr) {
		return new Response('Redirect', {status: 302, headers: { Location: `/${language}` }});
	}
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