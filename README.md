# EGZOXÉ store

Boutique statique de compléments alimentaires (YUPI, LIVEGOOD). Les commandes partent sur WhatsApp. Réalisé par Code A-Z.

## Lancer le site en local

Il faut Node 22.23.4 ou plus récent.

```bash
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:4321.

## Construire le site

```bash
npm run build
```

Le résultat se trouve dans `dist/`.

## Où se trouve quoi

| Dossier ou fichier | Rôle |
|---|---|
| `src/content/products/` | Un fichier JSON par produit. Le nom du fichier sert d'identifiant. |
| `src/content/bundles/` | Un fichier JSON par forfait (pack). |
| `src/data/site.json` | Numéro WhatsApp, TikTok, couleurs des besoins, liste des marques. |
| `src/data/reviews.json` | Avis clients (pour l'instant, des exemples). |
| `src/i18n/fr.json`, `src/i18n/en.json` | Tous les textes affichés. |
| `src/components/pages/` | Les pages (accueil, boutique, fiche, forfaits, panier). |
| `src/assets/brand/` | Logo, nom de marque et capsule du héros (découpés du logo de Franck). |
| `docs/` | Le cahier des charges complet. |

## Ajouter un produit

1. Copier un fichier de `src/content/products/` et le renommer, par exemple `moringa-plus.json`.
2. Remplir les champs en français **et** en anglais.
   - `need` : `immunity`, `detox`, `energy` ou `digestion`.
   - `brand` : `YUPI` ou `LIVEGOOD`. Mettre aussi la liste à jour dans `src/data/site.json`.
   - `variants` : une ligne par taille, avec le prix en francs, sans espace.
3. Pour la photo, placer l'image à côté du fichier, par exemple `moringa-plus.jpg`. Écrire ensuite `"image": "./moringa-plus.jpg"`. Le site la redimensionne et la compresse tout seul.
4. Mettre `"isPlaceholder": false` pour retirer la mention « Exemple ».

Règle santé : pas de promesse de guérison, pas de nom de maladie (voir `CLAUDE.md`).

## Aperçu GitHub Pages (maquette)

Le workflow `.github/workflows/apercu-github-pages.yml` publie le site à chaque envoi sur `main`. La maquette est marquée `noindex` pour ne pas apparaître sur Google. Dans le dépôt GitHub, il faut activer **Settings → Pages → Source : GitHub Actions**.

Pour tester l'adresse avec le préfixe en local (sous Git Bash) :

```bash
MSYS_NO_PATHCONV=1 BASE_PATH=/egzoxe-store npm run build
```
