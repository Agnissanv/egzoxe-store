// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH sert pour l'aperçu GitHub Pages (ex. /egzoxe-store).
// En production sur egzoxe.com, on laisse « / ».
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://egzoxe.com';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  // Garde les espaces entre éléments en ligne (Astro 7 les supprime par défaut).
  compressHTML: true,
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
