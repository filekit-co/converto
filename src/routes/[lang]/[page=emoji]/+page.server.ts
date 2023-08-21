import type { Faq, UpdateHeaderProps } from '$lib/types';

import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({url, locals}) => {
  const {i} = getRuntimeFromLocals(locals)

  const title = i("Emojis 🚀🌈 - Copy & Paste with Ease 🎯 | filekit.co's Emoji Vault")
  const description = i("🧑‍💻 Explore filekit.co's expansive Emoji Vault. Express your feelings in the most unique way possible with our vast collection of emojis. Copy, paste and use as you please!")
  const keywords = i("Emoji Copy, Paste Emojis, Online Emoji, Emoji Selection, Filekit Emojis, Emoji Vault, Express Feelings with Emojis, Unique Emojis, Extensive Emoji Collection, Emojis for Communication")

  const headerProps: UpdateHeaderProps = {
    title,
    description,
    keywords,
  };


  const faqs: Faq[] = [
    {
    question: i("How do I copy and paste emojis online?"),
    answer: i("Visit filekit.co to quickly find, copy, and paste a wide array of emojis online.")
  },  
  {
  question: i("Where can I find a comprehensive list of emojis?"),
    answer: i("Filekit.co offers an extensive collection of emojis across various categories.")
  },
    
    {
  question: i("How can I express my feelings with emojis?"),
    answer: i("Emojis can be a fun way to express your feelings. Explore unique and diverse emojis at filekit.co to find the perfect one.")
},
    
    {
  question: i("Can I use emojis in my social media posts?"),
    answer: i("Yes, emojis can be easily copied from filekit.co and used in your social media posts to make them more engaging.")
},
    
    {
  question: i("What is the best place to find unique emojis?"),
    answer: i("Filekit.co offers a unique selection of emojis that you can use to spice up your communication.")
},
    
    {
  question: i("Are there any tips for using emojis effectively?"),
    answer: i("When using emojis, remember to choose the ones that best fit the tone and context of your message. Visit filekit.co for a diverse selection of emojis.")
},
    
    {
      question: i("How often are new emojis added?"),
    answer: i("At filekit.co, we regularly update our emoji vault to include the latest and most popular emojis.")
},
    {
    question: i("Can emojis be used in professional communication?"),
    answer: i("While it depends on the context and the corporate culture, in many cases, appropriate use of emojis can add a personal touch to your communication.")
},
  ]
  return {headerProps, faqs}
})