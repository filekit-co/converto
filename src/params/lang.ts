import { languageCodes } from '$lib/data';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
    return languageCodes.includes(param);
}) satisfies ParamMatcher;
