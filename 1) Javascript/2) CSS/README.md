# Css

---

---

 ## Table des matières

 0. [Introduction](#introduction)


---
---
### Introduction

---

### 1. CSS

Pour lire votre fichier CSS il faudra qu'il soit en liaison avec votre page HTML, pour cela insère dans le fichier.html 
```
<head>
    ...
    <link rel="stylesheet" type="text/css" href="./path/style.css">
    ...
<head>
```
Les unités de mesure dans le css pour le responsive
```
_Container_
.class_container{
    whith: 10%;                  // Pour les elements responsive on utilisera les pourcentage
}

.class_title{
    font-size: 1.2rem;           // Pour la police on utilisera les rem
}

.class_fixe{
    whith: 450px;               // Pour les elements fixe on utilisera les px
    heigt: 450px;
}

/* Permet l'adaptation fluid et responsive d'un contenue textuelle  */
Selecteur {
	font-size: min(max(1rem, calc(1rem + ((1vw - 0.48rem) * 0.6944))), 1.5rem);
	min-height: 0vw;
}

```
#### <ins>1.1 Selecteur CSS : Les selecteurs CSS</ins>
```
SELECTEUR : 


// Selection de class <div class="name_class">
.name_class {               
    propiete: valeur;          
}          
 
// Selection de ID <div id="name_id">
#name_id {
    propiete: valeur;          
}

// Selection de ID'un element html <div>
div{
    propiete: valeur;          
}          

// Selection de l'élément p dans la class
.class > p{
    ...
}

// Selection de l'élément h1 qui est juste aprés la class
.class + h1{
    ...
}

// Selection tout les elements ul qui suivent li
li~ul{
   ...
}

// Selection d'un selecteur(class, id, h1..) contenant l'attibut(title, target..)
selecteur[Nom_attribut_HTML]{   
	...
}

// Selection d'un selecteur(class, id, h1..) contenant l'attibut avec valeur
selecteur[Nom_attribut_HTML="Nom_valeur"]{  
	...
}
```

```
_Selecteur spéciale_

a:link{...}                                 // Lien non-visite
a:visited{...}                              // Lien visite
a:active{...}                               // Lien active
a::hover{...}                               // Survole
input:focus{...}                            // Selection   
input:checked{...}                          // Checked
imput:disabled{...}                         // Desactivé
imput:enabled{...}                          // Autorisé
imput:empty{...}                            // Vide
input:invalid{...}                          // Invalide
imput:in-range{...}                         // Range <input type="number" min="1" max="10">
:not(p){...}

div::before{...}                            // Affichage avant
div::after{...}                             // Affichage après
div::first-child{...}                       // Selection premier element fils par rapport au parent.
div:last-child{...}                         // Selection dernier element fils par rapport au parent.
div:nth-child(3){...}                       // Selection l'element(3) fils par rapport au parent.
	
p::first-letter{...}                        // Selection premiere lettre
p::first-line{...}                          // Selection premiere ligne
p:first-of-type{...}                        // Selection premiere element de chaque type
p:lang(fr)                                  // Selection lang  
:not(selecteur){...}                        // Selection tout sauf le selecteur

``` 

#### <ins>1.2 POLICE : les polices</ins>
```
_police de base_
    -> Arial
    -> Arial Black
    -> Comic Sans MS
    -> Courrier New (Favoris)
    -> Georgia
    -> Impact
    -> Times New Roman (défault)
    -> Trebuchet MS
    -> Verdana

_Police personnalisée_
    -> Télécharger les polices sur  un site commme dafont.com
    -> Décompressez le document(enlevez les majuscules et les espaces) 
    -> Placer dans votre dossier ../src/assets/fonts
    -> Les polices personnalissé doivent être déclarer en fin de page.

_Police importation_
@font-face {
    font-family: 'nom_police';
    src: url('../src/nom_police.ttf') format('truetype');
}

@font-face {
    font-family: 'nom_police';
    src: url('../src/nom_police.ttf') format('truetype'),
    src: url('../src/nom_police.eot') format('eot'),
    src: url('../src/nom_police.svg') format('svg');
}

_Police GoogleFont_
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');


_Police ajout_
selecteur {
    font-family: name_police;
}

selecteur {
    font-family: name_police1, name_police2, Courrier New, sans-serif, serif;
}

```
#### <ins>1.2 TEXTUEL : Contenu textuel</ins>
```
selecteur {

    _decoration_
    font-weight: bolt;                  // Texte en gras
    font-style: italic;                 // Texte en italic
    font-style: oblique 40deg; 
    text-decoration: underline;         // Texte souslignezBot
    text-decoration: overline;          // Texte souslignezTop
    text-decoration: line-through;      // Texte barrer
    text-decoration: none;              // Texte n'affiche pas decoration
    text-decoration-color: color;       // Texte couleur decoration
    color: #212121;                     // Texte couleur
    texte-shadow: 6px 6px 0px black;    // Texte ombrage
    transform: uppercase;               // Texte en majuscule
    transform: lowercase;               // Texte en minuscule
   
    text_align: center;
    text_align: left;
    text_align: right;                  
    line-height: 1rem;                  // Espacement entre le texte
    text-indent: 1rem;                  // Indatation du texte
    
    _positionnement_
    text_align: center;                 // Texte alignement centre
    text_align: start;                  // Texte alignement gauche
    text_align: end;                    // Texte alignement droite
    vertical-align: top;                // L'alignement verticale en haut
    vertical-align: bottom;             // L'alignement verticale en bas
    vertical-align: middle;             // L'alignement verticale au centre
    white-space: pre-line;              // Le texte ne dépasse pas le block

    _colonneTexte_
    column-count: 3;                    // Texte separer en colonne
    column-width: 200%;                 // Texte largeur
    column-gap: 10%;                    // Texte espacement colonne
    column-span: all;                   // Texte etend element(titre) sur tout les colonnes
    column-rule: 10% dotted color;      // Texte ajoute decoration serparation
}
```
#### <ins>1.2 CONTAINER : </ins>
```
selecteur{

    _decoration_
    background-color: #212121;                      // Color background
    background-image: url("image/destin.png");      // Image background
    box-shadow: 1% 1% 1% color;                     // Ombre
    border-radius: 1rem, 1rem, 1rem, 1rem           // Arrondis bordure
    opacity : 1;                                    // Transparence
    brackground-attachment: fixed;                  // Image fixe
    background-attachment: scroll;                  // Image suit
    background-position: right;                     // Position du background
    background-size: cover;                         // Agrandit l'image
    background-size: contain;                       // Image prend container
    background: linear-gradient(#e66465, #9198e5);  // Degrader lineaire
    background: radial-gradient(#e66465, #9198e5);  // Degrader radial
	
    _positionnement_
    float: center;                     // Object alignement centre
    float: left;                       // Object alignement gauche
    float: right;                      // Object alignement droite

    padding: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 1%;
    padding-right: 1%;
    padding-inline-start: 1%           // Norme PWA padding gauche
    padding-inline-end: 1%             // Norme PWA padding droite
    padding-block-start: 1%            // Norme PWA padding haut
    padding-block-end: 1%              // Norme PWA padding bas


    margin: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: 1%;
    margin-right: 1%;
    margin-inline-start: 1%            // Norme PWA margin gauche
    margin-inline-end: 1%              // Norme PWA margin droite
    margin-block-start: 1%             // Norme PWA margin haut
    margin-block-end: 1%               // Norme PWA margin bas
    
    max-width: 90%;                    // Largeur max 
    min-width: 10%;                    // Largeur min
    width: 60%                         // Largeur 
    max-height: 90%;                   // Hauteur max
    min-height: 10%;                   // Hauteur min
    height: 60%;                       // Hauteur
    
    
    position: absolute;                // Placer objet à un endroit fixe
    position: static;                  // Suit le long de la page
    top: 10%;                          // Positionnement par rapport en haut
    bottom: 10%;                       // Positionnement par rapport en bas
    left: 10%;                         // Positionnement par rapport à gauche
    right: 10%;                        // Positionnement par rapport à droite
    z-index: 2;                        // Emplacement dans la superposition

	
    _bordure_
    border: 0.5% black solid;
    border-top: 0.5% black solid;
    border-right: 0.5% black solid;
    border-bottom: 0.5% black solid;
    border-left: 0.5% black solid;
    border-radius: 1% 1% 1% 1%;
}
```

#### <ins>1.2 POSITIONNEMENT : Positionnement de votre contenu</ins>

```
selecteur{
    
    display: block;
    display: flex;
    display: inline-block;

}

```
#### <ins>1.2 Animation : Animation de votre contenu</ins>
```
selecteur{
    transition: 2s;             // Permet de faire une transition (:hover, ...)
}
```