# EGZOXÉ store — instructions pour Claude Code

Lis ce fichier en entier avant toute action, puis les documents de `docs/` selon la tâche.

## Le projet en bref
Boutique en ligne **100 % statique** (aucune base de données, aucun serveur) qui présente et vend des compléments alimentaires des marques **YUPI GLOBAL INTERNATIONAL** et **LIVEGOOD INT**. Pour le visiteur, ça se comporte comme une boutique complète ; techniquement, **toutes les commandes arrivent sur WhatsApp** via un message pré-rempli (lien `wa.me`).

- Marque : **EGZOXÉ store** (toujours en majuscules, avec l'accent sur le É). Domaine : `egzoxe.com` (sans accent).
- Client et propriétaire de la marque : Tégbo Franck, Abidjan, Côte d'Ivoire.
- Réalisé par l'agence **Code A-Z** (Abidjan) — responsable du projet : Isaac.
- Public : jeunes et moins jeunes, toutes classes sociales, Abidjan, intérieur du pays, international. Visites surtout depuis un **téléphone**, souvent d'entrée de gamme et avec une connexion limitée.
- Langues : **français (par défaut) et anglais**.
- Mise en ligne visée : **fin novembre 2026**. Les dates exactes sont à recalculer avec Isaac (voir `docs/08-planning-et-a-faire.md`).

## Décisions définitives (ne pas les remettre en question)
1. Site statique uniquement. Tout ce qui demande une base de données ou un serveur est retiré ou remplacé par une alternative statique.
2. Commande = message WhatsApp pré-rempli. WhatsApp n'envoie rien automatiquement : le client appuie lui-même sur « envoyer ».
3. Paiement : **cash à la livraison en Côte d'Ivoire** ; à l'étranger, modalités convenues sur WhatsApp. Aucun paiement en ligne.
4. Frais de livraison : à la charge du client, **jamais affichés ni calculés sur le site** (ils dépendent du lieu) ; ils sont confirmés sur WhatsApp.
5. Produits en **placeholders** pendant toute la construction (`src/content/products/`, un fichier par produit). Les vrais produits (environ 80) arrivent à la fin. Lancement possible avec les ~30 produits prioritaires.
6. Logo : celui de Franck, refait et détouré (voir `assets/`). Pas de nouveau logo à inventer.
7. Domaine au nom de Franck ; hébergement Cloudflare Pages ; e-mail pro Zoho Mail ; newsletter et formulaire via Brevo (voir `docs/07-technique.md`).
8. Animations : **discrètes, sur l'accueil seulement**. Pages boutique simples et rapides. Le modèle « Site Immersif » n'est PAS utilisé tel quel.

## Stack (en place)
**Astro 7 en sortie statique** (pas d'adaptateur), contenus en JSON / Markdown, un petit script pour le panier. Détails dans `docs/07-technique.md` et `README.md`.
- Aperçu de la maquette : GitHub Pages sur le compte d'Isaac (workflow `.github/workflows/apercu-github-pages.yml`, pages en `noindex`). L'hébergement final reste Cloudflare Pages.
- Pages construites : accueil, boutique (filtres), fiches produit, forfaits, panier + message WhatsApp, en FR et EN. Les autres pages (blog, à propos, FAQ, avis, livraison, contact, mentions) affichent « En préparation » (`src/lib/routes.ts`, `COMING_SOON`).
- Ajout de produits : fait par l'agence pour l'instant. Garder **un fichier par produit** pour pouvoir brancher un espace d'admin (ex. Pages CMS) plus tard sans recoder.

## Règles de contenu (importantes — produits de santé)
- Ne jamais promettre une guérison ni nommer une maladie. Interdits : « guérit », « soigne », « traite », « remède », « miracle », noms de pathologies (diabète, AVC, paludisme, etc.).
- Formulations autorisées : « contribue à », « soutient », « pour ton confort », « un coup de pouce à… ».
- Chaque fiche produit et le pied de page portent : *Complément alimentaire, ne remplace pas un traitement médical ni une alimentation variée.*
- Les produits sont classés par **besoin** (immunité, détox, énergie, digestion) et par marque, jamais par maladie.
- Les textes officiels des marques doivent être repris avec les mêmes précautions. Franck a confirmé l'autorisation d'utiliser logos, images et descriptions de YUPI et LIVEGOOD.
- **Ne jamais inventer** un fait sur Franck, la marque, les délais, les retours, un RCCM ou des témoignages. Les passages `[entre crochets]` des textes sont des informations manquantes : garde-les visibles tant qu'elles ne sont pas fournies.
- Les 3 témoignages et les 12 produits sont des **exemples** : ils doivent rester clairement remplaçables.

## Conventions de code
- Identifiants de code en anglais ; textes affichés dans les fichiers de contenu (FR/EN), jamais codés en dur dans les composants.
- Mobile d'abord. Accessibilité : contrastes suffisants, focus clavier visible, `prefers-reduced-motion` respecté, `lang` correct, textes alternatifs.
- Performance : images WebP/AVIF compressées en chargement différé, aucune bibliothèque lourde, polices hébergées avec le site.
- URLs : français à la racine (`/`, `/boutique/`, `/boutique/<slug>/`), anglais sous `/en/` (`/en/shop/<slug>/`). Balises `hreflang` entre les deux versions.
- Prix affichés au format `16 875 F` (espace insécable entre les milliers, jamais « CFA16875 »).

## Façon de travailler avec Isaac
- Réponses en **français**, courtes et claires, lisibles sur téléphone.
- Isaac dicte souvent ses messages à la voix : il peut y avoir des erreurs de transcription (ex. « stark » pour « stack ») ; comprends l'intention.
- Il décide du prix et du périmètre : ne lui demande pas de faire valider la liste des fonctionnalités par le client.
- En cas de doute réel, pose **une** question précise plutôt que de deviner. Vérifie les informations avant de les affirmer.
- Ne pas ajouter de fonctionnalité dynamique ni changer le périmètre sans accord.

## Carte des documents
| Fichier | Contenu |
|---|---|
| `docs/01-projet.md` | Contexte, parties prenantes, objectifs |
| `docs/02-cahier-des-charges.md` | Besoin du client, inclus / retiré / remplacé |
| `docs/03-structure-et-parcours.md` | Pages, contenu de chaque page, panier, message WhatsApp |
| `docs/04-design.md` | Palette, polices, signature visuelle, logo, animations |
| `docs/05-textes-fr.md` / `docs/06-textes-en.md` | Tous les textes du site |
| `docs/07-technique.md` | Stack, hébergement, e-mail, newsletter, mise en ligne |
| `docs/08-planning-et-a-faire.md` | Planning, informations manquantes, tâches |
| `src/content/products/`, `src/content/bundles/` | 12 produits et 2 forfaits d'exemple (FR/EN), un fichier chacun |
| `src/data/site.json` | Numéro WhatsApp, TikTok, besoins (couleurs), marques |
| `src/i18n/fr.json` / `en.json` | Tous les textes de l'interface |
| `content/blog/` | 3 articles de blog FR et EN |
| `assets/` | Logo et icône (voir `assets/README.md`) |
