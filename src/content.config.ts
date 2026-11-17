import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const NEEDS = ['immunity', 'detox', 'energy', 'digestion'] as const;

const localized = z.object({ fr: z.string(), en: z.string() });
const localizedList = z.object({ fr: z.array(z.string()), en: z.array(z.string()) });

// L'identifiant d'un produit = le nom de son fichier (ex. defense-plus.json → defense-plus).
const idFromFile = ({ entry }: { entry: string }) => entry.replace(/\.json$/, '');

const products = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/products', generateId: idFromFile }),
  schema: ({ image }) =>
    z.object({
      slug: localized,
      need: z.enum(NEEDS),
      brand: z.string(),
      name: localized,
      variants: z
        .array(z.object({ id: z.string(), label: localized, price: z.number().int().nonnegative() }))
        .min(1),
      benefits: localizedList,
      duration: localized,
      directions: localized,
      ingredients: localized.optional(),
      precautions: localized.optional(),
      // « placeholder » tant que la vraie photo n'est pas fournie.
      image: z.union([z.literal('placeholder'), image()]),
      featured: z.boolean().default(false),
      isPlaceholder: z.boolean().default(false),
    }),
});

const bundles = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/bundles', generateId: idFromFile }),
  schema: z.object({
    name: localized,
    need: z.enum(NEEDS),
    items: z.array(z.object({ product: z.string(), variant: z.string() })).min(2),
    price: z.number().int().nonnegative(),
    regularPrice: z.number().int().nonnegative().optional(),
    isPlaceholder: z.boolean().default(false),
  }),
});

export const collections = { products, bundles };
