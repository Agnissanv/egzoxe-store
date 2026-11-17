# 08 — Planning et tâches

## Planning
- Mise en ligne visée : **fin novembre 2026**. Les dates d'origine (démarrage le 8 novembre) sont **dépassées** : à recalculer avec Isaac à partir de la date réelle de début.
- Hypothèse de capacité d'Isaac : environ 2 h 15 par jour en semaine, jusqu'à 5 h le week-end. Charge estimée du projet : environ 68 heures.
- Jalons (à reporter sur de vraies dates) :
  1. **Cœur du site** : accueil, fiche produit, fichier de données avec les 12 produits fictifs, panier et message WhatsApp testés sur plusieurs téléphones.
  2. **Maquette envoyée à Franck** (accueil et une fiche produit). C'est le jalon de la deuxième tranche de paiement convenue par Isaac.
  3. **Le reste** : À propos, Blog, FAQ, Contact, Livraison, Avis, mentions légales ; bouton FR/EN et textes anglais ; domaine, hébergement, e-mail pro, Brevo.
  4. **Produits réels et relecture** par Franck, corrections.
  5. **Mise en ligne**, avec 2 à 3 jours de marge.
- **Risque principal** : la saisie des ~80 produits avec variantes (environ 8 à 10 heures, plus images et descriptions officielles). **Recommandation** : lancer avec les ~30 produits les plus demandés, ajouter les autres ensuite dans la maintenance mensuelle. Cette saisie peut être confiée à un collaborateur.

## À fournir par Franck
- [ ] Nom complet du fondateur pour À propos et mentions légales (prévu : Tégbo Franck, à valider)
- [ ] Délais de livraison par zone (Abidjan, intérieur du pays, étranger)
- [ ] Politique de retours et échanges
- [ ] Numéro RCCM s'il existe
- [ ] Confirmation du numéro WhatsApp de commande (+225 05 05 26 75 74)
- [ ] Informations pour enregistrer le domaine (nom, adresse, téléphone, e-mail personnel)
- [ ] Vrais produits : nom, marque, prix, variantes, images, descriptions officielles, durée conseillée, mode d'emploi (les 30 prioritaires d'abord)
- [ ] Quelques photos personnelles ou de l'équipe
- [ ] 3 vrais témoignages (TikTok @frateg) à remplacer aux exemples

## À faire par Isaac
- [ ] Confirmer la stack (Astro recommandé)
- [ ] Déposer le logo et l'icône finaux dans `assets/`
- [ ] Produire le logo avec le sous-titre anglais « FOOD SUPPLEMENTS »
- [ ] Acheter le domaine et créer les comptes (Cloudflare, Zoho, Brevo)
- [ ] Choisir et télécharger les images libres de droits (Unsplash, Pexels)
- [ ] Faire relire les mentions légales pour la conformité en Côte d'Ivoire
- [ ] Tester le seuil de longueur du lien WhatsApp

## Ordre de construction suggéré pour Claude Code
1. Initialiser le projet, la structure de dossiers et le routage FR/EN.
2. Jetons de design (couleurs, polices, échelle), mise en page de base, en-tête, pied de page, barre d'annonce, bouton WhatsApp flottant.
3. Chargement des données (`data/produits-fictifs.json`) et génération des pages produit.
4. Carte produit, boutique avec filtres besoin/marque.
5. Fiche produit.
6. Panier (`localStorage`), formulaire, message WhatsApp FR/EN, repli « Copier la commande ».
7. Accueil complet avec le seul moment animé (le héros).
8. Pages À propos, FAQ, Livraison, Contact, Avis, Mentions légales.
9. Blog à partir de `content/blog/`.
10. Formulaires Brevo (newsletter, contact), SEO, sitemap.
11. Tests et correction.
12. Déploiement sur Cloudflare Pages.

## Tests avant mise en ligne
- Lien WhatsApp sur plusieurs téléphones (iPhone, Android), paniers courts et longs.
- Chaque page en FR et en EN, sélecteur de langue.
- Navigation clavier, contrastes, `prefers-reduced-motion`.
- Largeurs de 320 px à ordinateur ; aucun défilement horizontal.
- Vitesse sur connexion lente.
- Aucun texte de santé non prudent ; mention santé présente sur chaque fiche.
- Aucun `[crochet]` visible en production sans décision d'Isaac.
