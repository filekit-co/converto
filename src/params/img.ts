import { imgSlugs, languageCodes } from '$lib/data';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
    return imgSlugs.includes(param)
}) satisfies ParamMatcher;

