# 02 — Cahier des charges (synthèse du formulaire rempli par le client)

## Activité et projet
- Marque : EGZOXÉ store. Ville : Abidjan, Côte d'Ivoire. Pas de site existant.
- Activité : présenter dans une boutique en ligne tous les compléments alimentaires de **YUPI GLOBAL INT** et ceux de **LIVEGOOD INT**.
- Franck est membre de YUPI GLOBAL et de LIVEGOOD et a l'autorisation d'utiliser logos, images et descriptions officielles (confirmé).

## Identité visuelle
- Aucune charte au départ. Logo retrouvé plus tard, utilisé tel quel (voir `assets/`). Voir `04-design.md`.

## Contenu demandé
- Pages : accueil, à propos, services/offres (→ boutique), blog/actualités, témoignages, FAQ, contact. Pas de portfolio.
- Photos : quelques-unes fournies par le client + images libres de droits (Unsplash, Pexels).
- Langues : français et anglais.
- Textes : le client souhaite de l'aide pour les rédiger (déjà rédigés : `05-textes-fr.md`, `06-textes-en.md`).

## Fonctionnalités demandées
Cochées : formulaire de contact, bouton WhatsApp, newsletter, liens réseaux sociaux (TikTok), espace client avec compte, chat en direct, tableau de bord d'administration.
Non cochées : prise de rendez-vous, carte et itinéraire, galerie photos/vidéos.

## Visibilité
- Mots-clés : « compléments alimentaires », « yupi abidjan ».
- Réseaux : compte TikTok https://www.tiktok.com/@frateg (quelques témoignages dessus). Pas de Google Business, Facebook, Instagram ni LinkedIn.

## Technique
- Pas de nom de domaine ni d'hébergement au départ (→ `egzoxe.com`, voir `07-technique.md`). Adresses e-mail professionnelles souhaitées.

## Délais et suivi
- Mise en ligne souhaitée fin novembre 2026.
- Après la mise en ligne : mises à jour confiées à l'agence (maintenance mensuelle, notamment ajout des produits).

## Boutique
- Environ **80 produits** au lancement, avec tailles/variantes.
- Livraison partout en Côte d'Ivoire et à l'étranger.
- Cochés : commander sans compte, créer un compte client, suivre sa commande.

## Inclus, retiré, remplacé

**Inclus tel quel** : accueil, à propos, boutique, fiches produits, blog, témoignages, FAQ, contact ; 80 produits avec variantes ; bouton WhatsApp ; liens réseaux ; formulaire de contact ; site pensé d'abord pour le téléphone ; bilingue FR/EN.

**Remplacé par une alternative statique**
| Demandé | Alternative |
|---|---|
| Panier et commande en ligne | Panier gardé dans le navigateur (`localStorage`) ; bouton « Commander sur WhatsApp » avec récapitulatif pré-rempli |
| Espace client / suivi de commande | Bouton « Suivre ma commande » qui ouvre WhatsApp avec un message pré-rempli |
| Chat en direct | Bouton WhatsApp flottant sur toutes les pages |
| Tableau de bord d'administration | Fichier de données des produits mis à jour par Isaac |
| Newsletter et formulaire de contact | Service externe (Brevo), sans base de données propre |
| Deux langues | Deux versions de chaque page (`/` et `/en/`) et bouton de changement de langue |

**Limites connues**
- Les liens WhatsApp ont une longueur maximale (valeur exacte à tester). Très bien pour un panier normal ; pour un panier trop long → repli : bouton « Copier la commande ».
- Pas de paiement en ligne.
- Le panier est propre à l'appareil : il ne suit pas le client d'un téléphone à l'autre.
