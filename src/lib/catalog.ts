import { getCollection, type CollectionEntry } from 'astro:content';
import site from '../data/site.json';
import type { Lang } from './i18n';
import { productPath } from './routes';

export type Product = CollectionEntry<'products'>;
export type Bundle = CollectionEntry<'bundles'>;
export type Need = Product['data']['need'];
export type Shape = 'jar' | 'bottle' | 'dropper' | 'box' | 'pouch';

export const NEED_ORDER: Need[] = ['immunity', 'detox', 'energy', 'digestion'];

export function needColor(need: Need): string {
  return site.needs[need].disc;
}

export async function getProducts(): Promise<Product[]> {
  const all = await getCollection('products');
  return all.sort(
    (a, b) =>
      NEED_ORDER.indexOf(a.data.need) - NEED_ORDER.indexOf(b.data.need) ||
      a.data.name.fr.localeCompare(b.data.name.fr, 'fr'),
  );
}

export async function getBundles(): Promise<Bundle[]> {
  const all = await getCollection('bundles');
  return all.sort((a, b) => NEED_ORDER.indexOf(a.data.need) - NEED_ORDER.indexOf(b.data.need));
}

export function minPrice(product: Product): number {
  return Math.min(...product.data.variants.map((v) => v.price));
}

/** Variante proposée par défaut sur les cartes : la moins chère. */
export function defaultVariant(product: Product) {
  return [...product.data.variants].sort((a, b) => a.price - b.price)[0];
}

/** Silhouette utilisée tant qu'il n'y a pas de vraie photo. */
export function placeholderShape(product: Product): Shape {
  const name = product.data.name.fr.toLowerCase();
  const label = product.data.variants[0].label.fr.toLowerCase();
  if (name.includes('goutte')) return 'dropper';
  if (/\bml\b/.test(label)) return 'bottle';
  if (label.includes('sachet')) return 'box';
  if (/\d\s?g\b/.test(label)) return 'pouch';
  return 'jar';
}

export function bundleProducts(bundle: Bundle, products: Product[]) {
  return bundle.data.items
    .map((item) => {
      const product = products.find((p) => p.id === item.product);
      const variant = product?.data.variants.find((v) => v.id === item.variant);
      return product && variant ? { product, variant } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
}

/** Catalogue compact envoyé au panier (navigateur) pour une langue. */
export function buildCartCatalog(products: Product[], bundles: Bundle[], lang: Lang) {
  return {
    products: Object.fromEntries(
      products.map((p) => [
        p.id,
        {
          name: p.data.name[lang],
          url: productPath(p.data.slug, lang),
          variants: Object.fromEntries(p.data.variants.map((v) => [v.id, { label: v.label[lang], price: v.price }])),
        },
      ]),
    ),
    bundles: Object.fromEntries(bundles.map((b) => [b.id, { name: b.data.name[lang], price: b.data.price }])),
  };
}

export type CartCatalog = ReturnType<typeof buildCartCatalog>;
