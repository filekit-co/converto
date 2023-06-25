import {derived, writable} from 'svelte/store';

export const subString = (input, from, to) => {
  return input.slice(input.indexOf(from) + from.length, input.lastIndexOf(to));
};

const translations = import.meta.glob(`../../translation/*.json`, {
  eager: true
});

let localesArray = [];
Object.entries(translations).map(([path]) => {
  let localeFileName = subString(path, '/translation/', '.json');
  localesArray.push(localeFileName);
});

const path = '../../translation';
export const defaultLang = 'en';
export const currentLang = writable(defaultLang);
export const langs = localesArray;

function translate(currentLang, key, vars) {
  if (!key) throw new Error('no key provided to $t()');

  let text = translations[`${path}/${currentLang}.json`].default[key];

  if (!currentLang) throw new Error(`no translation for key "${key}"`);

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  Object.keys(vars).map(k => {
    const regex = new RegExp(`{{${k}}}`, 'g');
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(
  currentLang,
  $currentLang =>
    (key, vars = {}, lang = $currentLang) =>
      translate(lang, key, vars)
);

export const setLang = lang => {
  currentLang.set(lang);
};
