import type { Lang } from './i18n';

/** Toutes les adresses du site, en français et en anglais (voir docs/03). */
export const ROUTES = {
  home: { fr: '/', en: '/en/' },
  shop: { fr: '/boutique/', en: '/en/shop/' },
  bundles: { fr: '/boutique/forfaits/', en: '/en/shop/bundles/' },
  cart: { fr: '/panier/', en: '/en/cart/' },
  blog: { fr: '/blog/', en: '/en/blog/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  faq: { fr: '/faq/', en: '/en/faq/' },
  reviews: { fr: '/avis/', en: '/en/reviews/' },
  delivery: { fr: '/livraison/', en: '/en/delivery/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal/' },
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Pages pas encore construites : elles affichent « En préparation ». */
export const COMING_SOON = ['blog', 'about', 'faq', 'reviews', 'delivery', 'contact', 'legal'] as const satisfies readonly RouteKey[];

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Ajoute le préfixe de base (utile pour l'aperçu GitHub Pages). */
export function withBase(path: string): string {
  return `${BASE}${path}`;
}

export function route(key: RouteKey, lang: Lang): string {
  return withBase(ROUTES[key][lang]);
}

export function productPath(slug: { fr: string; en: string }, lang: Lang): string {
  return withBase(`${ROUTES.shop[lang]}${slug[lang]}/`);
}

export function routePair(key: RouteKey): Record<Lang, string> {
  return { fr: route(key, 'fr'), en: route(key, 'en') };
}
