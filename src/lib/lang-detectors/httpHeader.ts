import type { Detector, DetectorInitializer } from '@inlang/sdk-js/detectors';

type Language = string;
type HeadersObject = { get: (key: string) => string | null }
type DetectorParameters = [HeadersObject]

const REGEX_ACCEPT_LANGUAGE_SPLIT = /;|,/

const acceptLanguageHeaderDetector = ((headers) =>
	(headers.get("Accept-Language") as Language)
		?.split(REGEX_ACCEPT_LANGUAGE_SPLIT)
		.filter((part) => !part.startsWith("q"))
		.map((part) => part.trim())
		.filter((part) => part !== "*")
		.filter(Boolean) || []) satisfies Detector<DetectorParameters>

/**
 * Initializes the detector by passing the necessary parameters and returns a detection function without parameters in return
 * @param headers The HTTP Request Headers used in detection (https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
 * @param headers.get A function with which a certain header can be retrieved, returning either a string or null.
 * @returns A detection function that takes no parameters and returns an array of detected languages (strings) upon invocation
 */
export const initAcceptLanguageHeaderDetector = ((headers) => () =>
	acceptLanguageHeaderDetector(headers)) satisfies DetectorInitializer<DetectorParameters>