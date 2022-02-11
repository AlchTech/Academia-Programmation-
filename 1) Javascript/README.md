# Markown

---
---
## Table des matières
* [Markown](#markown)
  * [Introduction](#Introduction)
  * [Titres](#titres)
  * [Formatage](#formatage)
  * [Liste à puces](#Liste a puces)
  * [Citation](#citation)
  * [Ecrire du code](#ecrire du code)
  * [Lien](#lien)
  * [Image](#image)
  * [Image](#image)
  * [Barre de séparation](#barre de séparation)
  * [Architecture](#architecture)
  * [Tableau](#tableau)
---
---
## <ins>Introduction :</ins>
Markown est un langage permettant d'écrire du texte pour de la doccumentation.

---

## <ins>Formatage :</ins>

italique : _italique_

```code
italique : _italique_
```

gras : **en gras** !

```code
gras : **en gras** !
```

surlignage : `surlignage`

```code
surlignage : `surlignage`
```

soulignement : <ins>soulignement</ins>

```code
soulignement : <ins>soulignement</ins>
```

Aller à la ligne : Votre ligne doit se terminer par deux espaces.

```code
Allez à la ligne . .
```

---

## <ins>Titres :</ins>

```code
# Titre de niveau 1

## Titre de niveau 2

### Titre de niveau 3

#### Titre de niveau 4

##### Titre de niveau 5

###### Titre de niveau 6
```

---

## <ins>Liste à puces :</ins>

- Puce
  - Puce imbriquer
    - Puce imbriquer

1. Puce
   1. Puce imbriquer
      1. Puce imbriquer

```code
- Puce
  - Puce imbriquer
    - Puce imbriquer

1. Puce
   1. Puce imbriquer
      1. Puce imbriquer
```

---

## <ins>Citation :</ins>

> Ceci est un texte cité. Vous pouvez répondre à cette citation en écrivant un paragraphe normal juste en-dessous !

```code
    > Ceci est un texte cité. Vous pouvez répondre à cette citation en écrivant un paragraphe normal juste en-dessous !
```

---

## <ins>Ecrire du code :</ins>

```code
echo("Hello world")
```

````code
```code
echo("Hello world")
```
````

---

## <ins>Lien :</ins>

Rendez-vous sur [Lien](https://harmonyfidelis.com/views/jeremysaletteswozniak.html) !

```code
Rendez-vous sur [Lien](https://harmonyfidelis.com/views/jeremysaletteswozniak.html) !
```

---

## <ins>Image :</ins>

![Wikipedia](https://robertsspaceindustries.com/rsi/static/images/SC-fb.jpg)

```code
![Star Citizen](https://robertsspaceindustries.com/rsi/static/images/SC-fb.jpg)
```

---

## <ins>Barre de séparation :</ins>

---

```code
---
```

---

## <ins>Architecture :</ins>

```text
    |-- node_modules
    |-- src
        |-- fonts
            |-- roboto.ttf
        |-- images
            |-- 100890.jpg
        |-- public
            |-- index.html
        |-- style
            |-- sass
            |-- style.css
            |-- style.scss
        |-- app.js
    |--.gitignore
```

```code
    ```text
        |-- node_modules
        |-- src
            |-- fonts
                |-- roboto.ttf
            |-- images
                |-- 100890.jpg
            |-- public
                |-- index.html
            |-- style
                |-- sass
                |-- style.css
                |-- style.scss
            |-- app.js
        |--.gitignore
    ```
```

---
## <ins>Tableau :</ins>

| Align à gauche | Center | Align à droite |
|:---------------|:------:|---------------:|
| Align à gauche | Center | Align à droite |
| Align à gauche | Center | Align à droite |
| Align à gauche | Center | Align à droite |

```code
| Align à gauche | Center | Align à droite |
|:---------------|:------:|---------------:|
| Align à gauche | Center | Align à droite |
| Align à gauche | Center | Align à droite |
| Align à gauche | Center | Align à droite |
```
