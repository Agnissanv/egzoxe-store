# 03 — Structure du site et parcours de commande

## Arborescence
**En-tête (5 liens max)** : Accueil · Boutique · Blog · À propos · Contact — plus le sélecteur de langue FR | EN et l'icône panier avec compteur.

**Sous la boutique** : Forfaits (packs par besoin) · Fiche produit (une page générée par produit à partir du fichier de données) · Panier (récapitulatif + formulaire + bouton WhatsApp).

**Pied de page, sur toutes les pages** : FAQ · Avis clients · Livraison · Mentions légales · liens réseaux (TikTok) · logos YUPI GLOBAL et LIVEGOOD · newsletter · mention santé.

**Sur toutes les pages** : barre d'annonce en haut, bouton WhatsApp flottant (placé pour ne jamais cacher un produit ni un bouton d'action).

## URLs
| Page | Français | Anglais |
|---|---|---|
| Accueil | `/` | `/en/` |
| Boutique | `/boutique/` | `/en/shop/` |
| Fiche produit | `/boutique/<slug>/` | `/en/shop/<slug>/` |
| Forfaits | `/boutique/forfaits/` | `/en/shop/bundles/` |
| Panier | `/panier/` | `/en/cart/` |
| Blog | `/blog/` · `/blog/<slug>/` | `/en/blog/` · `/en/blog/<slug>/` |
| À propos | `/a-propos/` | `/en/about/` |
| FAQ | `/faq/` | `/en/faq/` |
| Avis | `/avis/` | `/en/reviews/` |
| Livraison | `/livraison/` | `/en/delivery/` |
| Contact | `/contact/` | `/en/contact/` |
| Mentions légales | `/mentions-legales/` | `/en/legal/` |

## Accueil, de haut en bas
1. Barre d'annonce : livraison partout, frais confirmés sur WhatsApp.
2. En-tête (logo, langue, panier).
3. Héros : titre, sous-titre, bouton « Voir les produits », visuel capsule + feuilles du logo sur un disque orange (seule zone animée).
4. Besoins : Immunité, Détox, Énergie, Digestion (liens vers la boutique filtrée).
5. Produits vedettes.
6. Forfaits.
7. Comment commander : 3 étapes (séquence réelle, la numérotation est justifiée ici).
8. Avis clients (3 témoignages d'exemple pour l'instant).
9. FAQ courte.
10. Newsletter.
11. Pied de page.

## Boutique
- Filtres : **besoin** (immunité, détox, énergie, digestion) et **marque** (YUPI, LIVEGOOD). Tri par défaut. Recherche simple côté navigateur.
- Carte produit : photo sur disque, nom, prix (« à partir de » si plusieurs variantes), **Durée conseillée**, **Mode d'emploi** (une ligne chacun), bouton principal « Ajouter au panier », lien « En savoir plus ».
- Pagination légère ou chargement progressif (prévoir 80 produits).

## Fiche produit
Titre fort · photo · 3 à 5 bénéfices courts avec coche (formulations prudentes) · choix de variante et quantité · prix · durée conseillée · mode d'emploi · ingrédients/précautions (quand fournis) · mention santé · bouton « Ajouter au panier » · produits du même besoin.

## Parcours de commande
1. **Fiche produit** : choix de la variante et de la quantité → « Ajouter au panier ».
2. **Panier** : liste, quantités modifiables, total des produits. Gardé dans le navigateur (`localStorage`, clé `egzoxe_cart_v1`, éléments `{id, variantId, qty}`).
3. **Coordonnées** : nom, téléphone, pays (Côte d'Ivoire par défaut), ville, adresse de livraison. Validation simple, messages d'erreur clairs.
4. **« Commander sur WhatsApp »** : ouvre `https://wa.me/2250505267574?text=<message encodé>`. *(Numéro à reconfirmer avec Franck : +225 05 05 26 75 74.)*
5. **Franck confirme** sur WhatsApp : stock, frais de livraison, délai.
6. **Livraison et paiement** : cash à la livraison en Côte d'Ivoire ; à l'étranger, modalités convenues avant l'envoi.

Aucun frais de livraison n'est calculé sur le site. Aucun paiement en ligne.

### Message WhatsApp pré-rempli (français)
```
Bonjour EGZOXÉ store, je souhaite commander :

• Défense Plus (60 capsules) × 2 : 28 000 F
• Vitamine C+ (60 gélules) × 1 : 6 500 F

Total produits : 34 500 F
Frais de livraison : à confirmer

Nom : …
Téléphone : …
Ville / pays : …
Adresse de livraison : …

Paiement : à la livraison
```
- Si le pays n'est pas la Côte d'Ivoire, la dernière ligne devient « Paiement : à convenir ».
- Version anglaise (site `/en/`) : « Hello EGZOXÉ store, I would like to order: … Products total: … Delivery fees: to be confirmed … Payment: cash on delivery / to be agreed ».
- Les lignes de produits viennent du fichier de données (nom + variante + quantité + sous-total).

### Commande trop longue
La longueur maximale d'un lien WhatsApp est **à tester** pendant la construction. Si le lien encodé dépasse le seuil retenu (prévoir une marge prudente) : afficher « Ta commande est longue », proposer **« Copier la commande »** puis ouvrir `https://wa.me/2250505267574` sans texte, pour que le client la colle dans la conversation.

### Suivre ma commande
Bouton qui ouvre WhatsApp avec : « Bonjour EGZOXÉ store, je souhaite suivre ma commande. Nom : … Date de commande : … » (version EN équivalente).

## Formulaire de contact et newsletter
Service externe (Brevo, voir `07-technique.md`). Messages :
- Succès : « Merci, ton message est bien parti. Nous te répondons rapidement. »
- Erreur : « Le message n'est pas parti. Vérifie ton e-mail ou ton téléphone, ou écris-nous sur WhatsApp. »

## Page Avis
Témoignages issus de TikTok (@frateg). **Placeholders** au début ; Isaac mettra les vrais. Prévoir un composant simple (nom ou prénom, ville facultative, texte) alimenté par un fichier de données. Ne pas fabriquer de faux témoignages présentés comme réels : les exemples doivent être clairement marqués dans le code et faciles à remplacer.
