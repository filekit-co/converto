import type { UpdateHeaderProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({url, locals}) => {
  const {i} = getRuntimeFromLocals(locals)

  const title = i("Emojis 🚀🌈 - Copy & Paste with Ease 🎯 | filekit.co's Emoji Vault")
  const description = i("🧑‍💻 Explore filekit.co's expansive Emoji Vault. Express your feelings in the most unique way possible with our vast collection of emojis. Copy, paste and use as you please!")
  const keywords = i("Emoji Copy, Paste Emojis, Online Emoji, Emoji Selection, Filekit Emojis, Emoji Vault, Express Feelings with Emojis, Unique Emojis, Extensive Emoji Collection, Emojis for Communication")

  const headerProps: UpdateHeaderProps = {
    title,
    url: canonicalUrl(url?.pathname ?? ''),
    description,
    keywords,
  };
  return {headerProps}
})