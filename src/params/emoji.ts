import { EmojiSlugs } from '$lib/data';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
  return EmojiSlugs.includes(param);
}) satisfies ParamMatcher;
