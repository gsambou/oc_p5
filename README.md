# Base de code du projet P6 - Parcours Front-end

## Démarrer le projet

Rien à installer ici, il suffit d'ouvrir le fichier `index.html`.

### Page d'accueil:

-   [x] -   Liste de tous les photographes avec nom, slogan, localisation...
-   [x] -   Lorsque l'utilisateur clique sur la vignette d'un photographe il est amené à sa page

### Page des photographes (generation dynamique du contenu en fonction du photographe)

-   [x] -   Affiche une galerie des travaux du photographe
-   [x] -   Les photographes peuvent montrer à la fois des photos et des vidéos
        -   [-] Dans le cas d'une video, montrer une image en miniature dans la galerie
-   [x] -   Chaque media comprend un titre et un nombre de likes
        -   [-] Lorsque l'utilisateur clique sur l'icone "Like", le nombre de likes affiché est incrémenté
        -   [-] Le nombre de likes total d'un photographe doit correspondre à la somme des likes de chacun de ses medias

-   [x] -   Les medias peuvent être triés par <mark>popularité </mark> ou <mark>titre</mark>
-   [x] -   Lorsque l'utilisateur clique sur un media, celui-ci doit s'ouvrir dans une lightbox
        -   [-] - Lorsque la lightbox est affichée, il y a une croix dans le coin pour fermer la fenêtre.
        -   [-] - Des boutons de navigation permettent de passer un élément media à l'autre dans la lightbox (les users peuvent cliquer sur ces boutons pour naviguer)
        -   [-] - Les touches fléchées du clavier permettent également de naviguer entre les médias dans la lightbox
-   [x] -   Afficher un bouton pour contacter le photographe
        -   [-] - Le formulaire de contact est une modale qui s'affiche par dessus le reste
        -   [-] - Il comprendre des champs pour les noms, l'adresse électronique et le message
        -   [-] - Afficher le content des trois champs dans les logs de la console
