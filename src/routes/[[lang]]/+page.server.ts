import { languageCodes } from '$lib/data';
import type { EntryGenerator } from './$types';

export const entries = (() => {
  return languageCodes.map((s) => {
    return {slug: s}
  })
}) satisfies EntryGenerator;

export const prerender = true;
