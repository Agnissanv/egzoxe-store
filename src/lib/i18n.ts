import fr from '../i18n/fr.json';
import en from '../i18n/en.json';

export type Lang = 'fr' | 'en';
export type Dict = typeof fr;

const dicts: Record<Lang, Dict> = { fr, en };

export const LANGS: Lang[] = ['fr', 'en'];

export function t(lang: Lang): Dict {
  return dicts[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}

/** Remplace {n} dans une chaîne de traduction. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));
}
