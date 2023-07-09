export const referenceLanguage = 'en'
export type LanguageCode = string | 'ar' | 'az' | 'bg' | 'ca' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'es' | 'es-419' | 'eu' | 'fr' | 'he' | 'hr' | 'hu' | 'id' | 'it' | 'iw' | 'ja' | 'ko' | 'nl' | 'no' | 'pl' | 'pt' | 'ro' | 'ru' | 'sr' | 'sv' | 'ta' | 'tr' | 'uk' | 'vi' | 'zh-CN' | 'zh-TW' | 'mr-IN';
export const languageCodes: LanguageCode[] = ['ar', 'az', 'bg', 'ca', 'cs', 'da', 'de', 'el', 'en', 'es', 'es-419', 'eu', 'fr', 'he', 'hr', 'hu', 'id', 'it', 'iw', 'ja', 'ko', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'sr', 'sv', 'ta', 'tr', 'uk', 'vi', 'zh-CN', 'zh-TW', 'mr-IN']

export const languageCountryMap: { [languageCode in LanguageCode]: string } = {
  'ar': 'ae',
  'az': 'az',
  'bg': 'bg',
  'ca': 'es',
  'cs': 'cz',
  'da': 'dk',
  'de': 'de',
  'el': 'gr',
  'en': 'us',
  'es': 'es',
  'es-419': 'mx',
  'eu': 'es',
  'fr': 'fr',
  'he': 'il',
  'hr': 'hr',
  'hu': 'hu',
  'id': 'id',
  'it': 'it',
  'iw': 'il',
  'ja': 'jp',
  'ko': 'kr',
  'nl': 'be',
  'no': 'no',
  'pl': 'pl',
  'pt': 'pt',
  'ro': 'ro',
  'ru': 'ru',
  'sr': 'rs',
  'sv': 'se',
  'ta': 'in',
  'tr': 'tr',
  'uk': 'ua',
  'vi': 'vn',
  'zh-CN': 'cn',
  'zh-TW': 'tw',
  'mr-IN': 'in',
};
export const languageTextMap: { [langCode in LanguageCode]: string } = {
  'ar': 'العربية',
  'az': 'Azərbaycanca',
  'bg': 'български',
  'ca': 'català',
  'cs': 'čeština',
  'da': 'dansk',
  'de': 'Deutsch',
  'el': 'ελληνικά',
  'en': 'English',
  'es': 'español',
  'es-419': 'español (Latinoamérica)',
  'eu': 'euskera',
  'fr': 'français',
  'he': 'עברית',
  'hr': 'hrvatski',
  'hu': 'magyar',
  'id': 'Bahasa Indonesia',
  'it': 'italiano',
  'iw': 'עברית',
  'ja': '日本語',
  'ko': '한국어',
  'nl': 'Nederlands',
  'no': 'norsk',
  'pl': 'polski',
  'pt': 'português',
  'ro': 'română',
  'ru': 'русский',
  'sr': 'српски',
  'sv': 'svenska',
  'ta': 'தமிழ்',
  'tr': 'Türkçe',
  'uk': 'українська',
  'vi': 'Tiếng Việt',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'mr-IN': 'मराठी',
};