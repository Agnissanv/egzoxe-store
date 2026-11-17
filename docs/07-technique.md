# 07 — Choix techniques

Les offres gratuites ci-dessous ont été vérifiées par recherche pendant la planification. Elles changent : **revérifier le jour de l'installation**.

## Stack
- **Recommandé : Astro en sortie statique** (aucun adaptateur Cloudflare nécessaire pour un site statique). À confirmer avec Isaac avant d'initialiser le projet.
- Pourquoi : il génère de **vraies pages HTML** pour chaque produit et chaque langue à partir d'un seul fichier de données (80 produits × 2 langues) — important pour le référencement (« compléments alimentaires », « yupi abidjan ») ; le blog s'écrit en fichiers Markdown (voir `content/blog/`) ; très peu de JavaScript envoyé ; le panier est le seul bout dynamique (petit script).
- Alternatives écartées : HTML/CSS/JS simples avec fichier de produits (pages produit construites dans le navigateur, moins bonnes pour le référencement) ; Next.js statique (plus lourd, plus de JavaScript pour rien).
- Contraintes qui ne changent jamais : pas de base de données, pas de serveur, panier dans le navigateur, commande par message WhatsApp.

## Données
- Produits : un fichier de données (JSON ou collection de contenu), schéma illustré par `data/produits-fictifs.json`. Champs en français et en anglais (nom, bénéfices, durée, mode d'emploi, variantes). Une ligne ou un objet par produit : c'est ce que remplira Isaac avec les vrais produits.
- Blog : Markdown avec `lang`, `slug`, `translationOf`.
- Textes de l'interface : fichiers de traduction FR/EN (voir `05-textes-fr.md` et `06-textes-en.md`).

## Hébergement : Cloudflare Pages (gratuit)
- Plan gratuit : bande passante et requêtes statiques illimitées, 500 mises en ligne (builds) par mois, domaines personnalisés, HTTPS gratuit.
- Déploiement avec Astro : connexion Git ; commande de build `npm run build` ; dossier de sortie `dist`. Chaque envoi sur la branche principale reconstruit et publie le site. Définir la version de Node dans les variables d'environnement de Pages si le build l'exige.
- Le domaine est le plus simple à gérer s'il est sur Cloudflare (DNS).

## Domaine
- **`egzoxe.com`**, enregistré **au nom de Franck** (propriétaire). Disponibilité vérifiée par Isaac.
- À acheter dès réception du premier versement du client. Prix à regarder chez le registrar au moment de l'achat.
- Pour le compte du registrar : utiliser une adresse e-mail **personnelle** de Franck (pas @egzoxe.com), activer la **double vérification** et le **renouvellement automatique**, noter la date de renouvellement.
- Informations demandées à Franck pour l'enregistrement : nom complet, ville et adresse, téléphone, e-mail personnel.

## E-mail professionnel : Zoho Mail (offre gratuite)
- Offre gratuite : 5 utilisateurs, 5 Go chacun, 1 domaine personnalisé, accès web et application uniquement (pas de IMAP/POP).
- **Point à vérifier à l'inscription** : l'offre gratuite n'est proposée que dans certains centres de données ; disponibilité depuis la Côte d'Ivoire non confirmée. Sinon, offre payante d'environ 4 $ par utilisateur et par mois.
- Adresses prévues : `contact@egzoxe.com` (site) et une adresse pour Franck.
- Configurer les enregistrements DNS (MX, SPF, DKIM) pour éviter le spam.

## Newsletter et formulaire de contact : Brevo (offre gratuite)
- Plan gratuit : 300 e-mails par jour, contacts illimités, éditeur par glisser-déposer ; le logo Brevo apparaît dans les messages.
- Intégrer le formulaire d'inscription et le formulaire de contact sans base de données propre. Messages de succès et d'erreur : voir `03-structure-et-parcours.md`.

## WhatsApp
- Numéro de commande : +225 05 05 26 75 74 (à reconfirmer) → lien `https://wa.me/2250505267574?text=<message encodé avec encodeURIComponent>`.
- Message construit côté navigateur à partir du panier (voir `03-structure-et-parcours.md`).
- Tester le seuil de longueur du lien avant de fixer la limite du repli « Copier la commande ».

## Référencement et technique de base
- Titres et descriptions par page et par langue, `hreflang` FR/EN, `sitemap.xml`, `robots.txt`, balises Open Graph.
- Mots-clés visés : « compléments alimentaires », « yupi abidjan ».
- Pas de données structurées de produit avec des allégations de santé.

## Ordre d'installation (après le premier versement)
1. Acheter egzoxe.com (au nom de Franck, compte avec e-mail personnel).
2. Relier le domaine à Cloudflare.
3. Créer le dépôt Git et le projet Cloudflare Pages.
4. Créer l'e-mail pro (Zoho) et les enregistrements DNS.
5. Brancher Brevo (newsletter, contact).
6. Tester le lien WhatsApp sur plusieurs téléphones.
7. Mettre en ligne.
