# JavaScript

---

---

## Table des matières

0.  [Introduction](#introduction)
1.  [Environnement](#environnement)
    1. [Gestionnaire de paquet NODEJS](#nodejs)
2.  [Javascript](#Javascript)
    1. [Javascript](#Javascript)
       1. [Javascript](#Javascript)

---

---

### Introduction

### 1. Environnement

---

#### <ins>1.1 PYCHARM : IDE Python</ins>

#### <ins>1.2 TERMINAL : Créer et naviguer à partir du projet </ins>

Pour pouvoir créer, supprimer ou encore naviguer dans un projet nous nous servons du terminal
Raccourcie IDE :

```
Commande TERMINAL :

mkdir name_directory                                // Permet de créer un dossier
touch file.js                                       // Permet de créer un fichier avec extension

rm name_directory                                   // Permet de supprimer un dossier
rm file.js                                          // Permet de supprimer un fichier

ls-la                                               // Permet de voir dossier et fichier à la racine

./file.js                                           // Execute le fichier

cd C:\path/directory/                               // Navigue dans le chemin indiquer
cd ./path/directory/                                // Navigue dans le chemin a partir du dossier racine
cd ../path/directory/                               // Recule d'un dossier et navigue dans le chemin indiquers
```

#### <ins>1.2 GIT : Versioning d'un projet</ins>

Nous pouvons à présent créer un projet et lui attribué une version et ainsi sauvegarde chaque avancé du projet avec
gestionnaire de version [GIT](https://git-scm.com/downloads)

```
Create PROJECT :

mkdir App                                           // Créer un dossier contenant le projet
cd ./App                                            // Naviguer dans ce dossier
git init                                            // Initialisation du versionning
touch .gitignore                                    // Permet d'ignoré fichier et dossier ne devant pas etre sauvegarder


Commande GIT :

git init                                            // Initialisation du versionning
git remote add https://github.com/path origin main  // Permet d'associer un projet à un repo distant
git clone https://github.com/path                   // Permet de recuperé un projet d'un repo distant
---
git add *                                           // Ajoute vaut modifications au commit
git commit -m "Message du commit"                   // Sauvegarde vos modifications avec un message des modifs apporter
git push                                            // Envois votre commit au repo distant
git pull                                            // Permet de récuperer les modifications apporté au repo distant
---
git branch name_branch                              // Permet de créer un branche secondaire de développement
git branch list                                     // Permet de voir les branches actives
git checkout name branch                            // Permet de naviger dans la branche
---
git merge                                           // !! Ajoute modifs de la branche secondaire dans la main !!
```

#### <ins>1.3 NodeJS : Installateur de paquets de Javascript</ins>

#### <ins>1.6 ARCHITECTURE : Architecture d'un projet</ins>

```text
    |-- LICENSE                                // Licence du projet
    |-- README.md                              // Documentation du projet
    |--.gitignore                              // Contient fichier à ignorer
    |-- fichier.js                             // Contient le programme
```

### <ins>2. LANGAGE DE PROGRAMMATION JAVASCRIPTS</ins>

---

#### <ins>2.1 IMPORT / EXPORT : Importez un paquet JavaScript</ins>

#### <ins>2.2 STOCKAGE DES DONNEES : Stocker vos données</ins>

```code
_COMMENTAIRE_
// Ceci est un commentaire
```

---

```code
_VARIABLE_
let name_variable = "valeur"                        // Variable contenant une donnée modifiable
print(name_variable)                                // response : "valeur"
print()

_CONSTANTE_
const NAME_CONSTANTE = "valeur"                     // Variable contenant une donnée non-modifiable
print(NAME_CONSTANTE)                               // response : "valeur"
```

---

### <ins>3. DOM Document Objet Model

Le document va parcourir les éléments à partir de l'éléments racine, par défault celui-ci est <html></html>.

```code
|- document
    |- <html>
        |- <head>
            |- <title>
    |- <body>
        |- <h1>
        |- <p>
```

Pour lire un fichier DOM il vous faut simplement importer votre fichier JS dans la page HTML

```code
<script src="fichier.js" async defer></script>
```

#### <ins>3.1 RECUPARTION ELEMENT

Permet de recuperer les élementS choisit dans le fichier HTML

```code
_optionI_
let nameID = document.getElementById('nameID');                 // Récupére un ID
let nameClass = document.getElementsByClassName('nameClass');   // Récupére une Class
let baliseHTML = document.getElementsByTagName('nameBalise');   // Récupére element HTML
let nameAttribut = document.getElementsByName('nameAttribut');  // Récupére l'attribut

_optionII_
let nameID = document.querySelector('#nameID');                 // Récupére un ID
let nameClass = document.querySelectorAll('.nameClass');        // Récupére une Class
let nameBalise = document.querySelectorAll('nameBalise'):       // Récupére element HTML
let nameAttribut = document.querySelectorAll('nameBalise[src]');// Récupére l'attribut

_optionIII_
<div id="parent">
    <div id="previous"></div>
    <div id="main">
        <p>content</p>
    </div>
    <div id="next"></div>
</div>
<script type='text/javascript'>
    let main = document.querySelector("#main");                 // Selection un element(#main)
    let enfant = main.children;                                 // Selection enfant de main(p)
    let parent = main.parent;                                   // Selection le parent de l'élément(#parent)
    let precedent = main.previous                               // Selection precedent de l'élément(#previous)
    let suivant = main.next;                                    // Selection suivant de l'élément(#next)
</script>
```

#### <ins>3.2 AJOUT / MODIFIER / SUPPRIMER

```code
// HTML & TEXTUEL
const elementParent = document.createElement("div");            // Creation d'un nouvelle element(div)
elementParent.innerHTML = '<balise>texte</balise>';             // Creation d'un element HTML et TEXTUEL
elementParent.texteContent = 'texte';                           // Creation d'un TEXT

// ID
elementParent.id = 'nameID';                                    // Creation d'un ID

// CLASS
elementParent.classList.add('nameClass');                       // Creation d'une nouvelle class
elementParent.classList.contains('nameClass');                  // Retourne TRUE si la class existe
elementParent.classList.replace('oldClass', 'newClass');        // Remplace une class par une autre class
elementParent.classList.remove('nameClass');                    // Supprime class

// ATTRIBUT
elementParent.setAttribute('nameAttribut', 'valeur');           // Creation d'un attribut
elementParent.setAttribute('oldAttribut', 'newAttribut');       // Modifier le type d'attribut
elementParent.setAttribute('oldValeur', 'newValeur');           // Modifier la valeur de l'attribut

// STYLE
elementParent.style.namestylecss = "valeur";                    // Creer un element style
elementParent.style = "namestyle:valeur; namestyle:valeur;";    // Creer des elements style
_
```

#### <ins>3.3 PARENTAGE & PLACEMENT

```code
// ENFANT
elementParent.appendChild(elementEnfant);                       // Ajoute elementEnfant a elementParent
elementParent.removeChild(elementEnfant);                       // Supprimer elementEnfant de elementParent
elementParent.replaceChild(oldEnfant, newEnfant);               // Remplace un elementEnfant de element parent

// PLACEMENT
elementParent.insertBefore(elementAAjouter, elementEnfant);     // Insertion elementAAjouter avent elementEnfant
elementParent.insertAdjacentHTML(position, elementAAjouter);    // Insertion de l'element HTML a la position choisit
elementParent.insertAdjacentText(position, elementAAjouter);    // Insertion de l'element TEXT a la position choisit
elementParent.insertAdjacentElement(position, elementAAjouter); // Insertion de l'element ELEMENT a la position choisit

// POSITION POSSIBLE
beforebegin                                                     // Avent que elementEnfant commence
afterbegin                                                      // Apres que elementEnfant commence
beforeend                                                       // Avent que elementEnfant finisse
afterend                                                        // Apres que elementEnfant finisse
```

---

### <ins>4. AJAX / Fetch (Appel d'API)

AJAX (Asynchronous JavaScript + XML)
