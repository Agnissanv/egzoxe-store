# 04 — Direction visuelle (A « Vitalité », choisie par Franck)

Ambiance : jeune et dynamique, mais professionnelle et rassurante. Chaleureuse, pas clinique. Mobile d'abord.

## Palette (jetons)
Les verts et l'orange viennent du logo de Franck.

| Nom | Hex | Usage |
|---|---|---|
| Vert nuit | `#032710` | En-tête, pied de page, texte. C'est exactement le fond du logo : le logo s'y fond sans bord visible |
| Crème | `#FFF9F0` | Fond des pages |
| Vert feuille | `#1F7A2A` | Boutons secondaires, liens (texte blanc lisible dessus) |
| Orange | `#F67A06` | Bouton principal, accents (orange du O du logo) |
| Vert vif | `#6FD12A` | Petits accents sur fond sombre uniquement |

Variables CSS suggérées : `--green-night`, `--cream`, `--green-leaf`, `--orange`, `--green-bright`.
Vérifier les contrastes (texte vert nuit sur orange et sur crème ; texte blanc sur vert feuille). Ne jamais mettre du vert vif en petit texte sur fond crème.

## Typographie
- **Poppins** (700 pour les titres, 500 pour les boutons et labels) et **Inter** (400/500 pour les textes) — polices validées par le client.
- Héberger les polices avec le site (WOFF2, sous-ensemble latin avec accents), `font-display: swap`.
- Échelle de tailles claire (titre de page, titre de section, texte, légende) ; interlignes confortables ; prix lisibles.

## Signature : le « O » orange
Le O orange du logo devient un disque qui revient partout :
- **Héros** : un grand disque orange (comme un soleil) se lève derrière la capsule et les feuilles du logo, qui flottent très légèrement.
- **Cartes produit** : chaque produit est posé sur un petit disque (couleur selon le besoin, dans la palette).
- **Titres de section** : petit disque comme marqueur.
Rien d'autre ne doit rivaliser avec cette signature : tout le reste reste sobre.

## Héros (schéma mobile)
```
[ Livraison partout · frais sur WhatsApp ]
[ logo            FR|EN   panier ]

  Prends soin
  de toi, chaque jour
       ◯ disque orange
   capsule + feuilles
  [ Voir les produits ]
```
Le visuel capsule + feuilles vient du vrai logo (zone haute de l'image, sur fond transparent).

## Utilisation du logo
- Fichiers dans `assets/` (voir `assets/README.md`). Le logo est conçu pour **fond sombre** : l'utiliser sur le vert nuit `#032710` (en-tête et pied de page).
- Ne pas recolorer, étirer ni modifier le logo. Sur une zone crème, le poser dans une pastille vert nuit.
- Sous-titre : « COMPLÉMENTS ALIMENTAIRES » en français ; une version « FOOD SUPPLEMENTS » est à produire pour l'anglais (à faire par Isaac).
- Icône carrée (`assets/egzoxe-icone-v2.png`) pour favicon, TikTok et WhatsApp ; générer les tailles nécessaires (favicon 32 px, Apple touch icon 180 px).

## Mouvement
- **Seul le héros** est animé : apparition douce du disque, léger flottement de la capsule. Pas de défilement piloté, pas de scènes épinglées sur les pages boutique.
- Uniquement `transform` et `opacity`. Durées courtes. **Toute animation s'arrête avec `prefers-reduced-motion`.**
- Le modèle « Site Immersif » n'est pas utilisé tel quel (site d'une page, animations lourdes). On peut s'en inspirer pour un moment précis de l'accueil, jamais pour les pages boutique.

## Images
- Photos : celles de Franck, plus des images libres de droits (Unsplash, Pexels). Style cohérent : lumière chaude, verts et oranges, visages africains pour que les clients d'Abidjan s'y reconnaissent. Pas de marques visibles sauf les produits officiels.
- Recherches utiles : `supplement bottles flat lay`, `fresh fruits green background`, `healthy lifestyle africa`, `moringa leaves`, `ginger and turmeric`, `african family smiling`, `active african woman outdoors`.
- Produits : photos officielles YUPI/LIVEGOOD (autorisation confirmée), cadrage homogène sur disque. Format WebP/AVIF, tailles responsives, chargement différé hors écran.

## Ce qu'on évite (rendu « générique IA »)
- Grille de trois cartes identiques avec petites icônes.
- Statistiques inventées, dégradés violets, grands titres creux.
- Titre centré sur une photo floue.
- Animations partout.
- Numérotations décoratives (« 01 / 02 / 03 ») : seulement pour « Comment commander », qui est une vraie séquence.
- En-tête surchargé, vert sur vert, publicités, WhatsApp qui cache un contenu.

## Plancher de qualité
Responsive de 320 px à ordinateur, focus clavier visible, `prefers-reduced-motion` respecté, contrastes vérifiés, `alt` sur toutes les images, cibles tactiles d'au moins 44 px.

## Performance (objectifs à vérifier)
Page d'accueil légère sur téléphone d'entrée de gamme et connexion lente : peu de JavaScript (hors panier), images compressées, aucune bibliothèque lourde, polices locales.
