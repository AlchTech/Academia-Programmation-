# Python

---

---

 ## Table des matières

 0. [Introduction](#introduction)
 1. [Environnement](#environnement)
    1. [Gestionnaire de paquet PIP](#pip)
    2. 
 2. [Python](#Python)
    1. [Python](#Python)
       1. [Python](#Python)


---

---

### Introduction

---

Python est un langage de programmation dit de haut niveau, il permet la transmission  entre le langage humaine en 
langage machine, qui lui est binaire.

| Humain  |     Ordinateur      |
|:-------:|:-------------------:|
|  Hello  | 0100100001100101001 |
---
Python est un langage orienté objet, ce qui signifie qu’il peut modéliser une idée  ou une entité du monde réel .

```
 car = {
    "marque": "Tesla",
    "color": "black",
    "kilometre": "10 000km" 
 }    
```
---
Il est typé dynamiquement, car il vérifie les type de donnée pour que le résultat correspond bien à nos attentes.

|  Text   | Integral | Decimal | Complex |   Boolean    |
|:-------:|:--------:|:-------:|:-------:|:------------:|
|   str   |   int    |  float  | complex |     bool     |
| "hello" |    10    |  10.5   |   10j   | true / false |
---
Il est interprété ligne par ligne, cela facilite le débogage.

```
1. var = "SpaceX"               // True
2. print(var)                   // True
3. print(variable)              // Error
```
---

Il permet de faire : 
 - Du développement d’interface graphique "GUI" avec Tkinter.
 - Du développement de site web avec Django.
 - Du traitement des données.
 - Du marchin learning et de l'apprentissage profond.

---

Il est portable  ce qui veut dire qu’il fonctionne sur Mac, Microsoft, Linux...


Télécharger et Installer le langage PYTHON avec [ANACONDA](https://www.anaconda.com/products/individual)


### 1. Environnement

---

#### <ins>1.1 PYCHARM : IDE Python</ins>

[PYCHARM](https://www.jetbrains.com/fr-fr/pycharm/) est environnement de développement permettant d'avoir un éditeur 
de code, un terminal et des fonctionnalités dans un seul programme.

```texte
Raccourcie IDE :

SHIFT*2                                             // Recherche n'importe quel fichier, class, ...
Ctrl+Shift+A                                        // Recherchez commande IDE et exécutez-la
Ctrl+/                                              // Permet de mettre un commentaire
```
#### <ins>1.2 TERMINAL : Créer et naviguer à partir du projet </ins>
Pour pouvoir créer, supprimer ou encore naviguer dans un projet nous nous servons du terminal
Raccourcie IDE :

```
Commande TERMINAL :

mkdir name_directory                                // Permet de créer un dossier
touch file.py                                       // Permet de créer un fichier avec extension

rm name_directory                                   // Permet de supprimer un dossier
rm file.py                                          // Permet de supprimer un fichier

ls-la                                               // Permet de voir dossier et fichier à la racine

./file.py                                           // Execute le fichier

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

#### <ins>1.3 PIP : Installateur de paquets de Python</ins>
Certaines functions on était créé par des développeurs et permet de faire certaine action connue sous le nom de paquet.

Bibliothèque sur [PYPI](https://pypi.org/)

On se sert de [PIP](https://pip.pypa.io/en/stable/installation/) un gestionnaire de paquet pour les installers.

```code
PIP :

pip install name_package                         // Installe un package
pip install name_package==2.1.0                  // Installe une version specifique d'un package
---
pip uninstall name_package                       // Desinstalle un package
---
pip list                                         // Verifie les paquets installé
pip freeze                                       // Verifie les paquets installé
pip show                                         // Information relative aux packages
pip show name_package                            // Information relative au package

VERSIONNING :

 name_package==1.1.1                             // Modification mineur "no_break_code"
 name_package==1.2.0                             // Modification normale "no_break_code"
 name_package==2.0.0                             // Modification majeur "chance_break_code"

EXEMPLE :

pip install matplotlib
---
import matplotlib.pyplot as plt
plt.figure()
plt.plot([1, 2, 2, 4, 5])
plt.show()
---
py generate_graph.py

```

#### <ins>1.4 VENV : Les environnements virtuels</ins>

Pour éviter les problems de compatibilité entre les logiciels, nous utilisons les environnements virtuels. 
Environment virtuel va simuler un environment indépendant qui nous permettra l'installation des dépendances
nécessaires au projet en ne prennent pas en compte les dépendances installez sur votre ordinateur local.

Maintenant installer vos dépendances à votre projet sur l'environment virtuel

```code
VIRTUEL ENVIRONMENT :

python -m venv env                            // Créer un environnement virtuel à la racine de votre app
---
env\Scripts\activate.ps1                      // Command poweshell pour activez environnement virtuel
env\Scripts\activate.bat                      // Command cmd pour activez environnement virtuel
---
deactivate                                    // Desactive l'environnement virtuel
```


Configurer interpreter PYTHON de votre IDE PYCHARM, cela vous permettra d'utiliser votre terminal directement dans votre
environnement. Attention verifier que l'interpreter correspond bien à l'env du projet 

```
PYCHARM INTERPRETER :

File -> Settings -> Project: name_app -> Python Interpreter -> ~/projects/name_app/env/bin/python


EXEMPLE :

(env) ~/projects/name_app$ pip list
```
#### <ins>1.5 REQUIREMENT.TXT : Liste et installation des packages d'un projet</ins>

Pour informer les autres développeurs des packages nécessaires au fonctionnement du code, nous utilisons requirement.txt

```code
REQUIREMENT.TXT :

pip freeze > requirements.txt                  // Permet d'automatiser la déclaration des packages dans requirement.txt
---
matplotlib==3.2.2                              // Contenu du requirement.txt
numpy==1.19.0                                  // Informe des packages essentiels au fonctionnement du code
---
pip install -r requirements.txt                // Permet d'installer packages l'aide d'un fichier du requirement.txt
```

#### <ins>1.6 ARCHITECTURE : Architecture d'un projet</ins>

```text
    |-- LICENSE                                // Licence du projet
    |-- README.md                              // Documentation du projet
    |--.gitignore                              // Contient fichier à ignorer
    |-- requirements.txt                       // Contient package et dependence
    |-- fichier.py                             // Contient le programme
    |-- test                                   // Contient les results de PYTEST

```



###  <ins>2. LANGAGE DE PROGRAMMATION PYTHON</ins>

---

#### <ins>2.1 IMPORT / EXPORT : Importez un paquet Python</ins>

Pour utiliser les paquets, il faut les importer dans votre fichier.py.

<a href="#import"></a>
```code
IMPORT / EXPORT:

import name_package                            // Import un package
print(name_package.nameFunction())
print(help(name_package))                      // Permet de voir les différentes functions du package
---
import name_package.nameFunction               // Import une function spécifique
print(name_package.nameFunction())
---
from name_package import nameFunc1, nameFunc1
---
import name_package as name_alias              // Import un package sous un alias
print(name_alias.nameFunction())
---
import ./path/name_file                        // Import un script python
print(name_file.nameVariable)                  // Appele une variable spécifique
print(name_file.nameFunction())                // Appele une function spécifique
```

#### <ins>2.3 STOCKAGE DES DONNEES : Stocker vos données</ins>
```code
COMMENTAIRE : 
# Ceci est un commentaire               
```
---
```code             
VARIABLE :   

name_variable = "valeur"                            // Variable contenant une donnée modifiable
print(name_variable)                                // response : "valeur"
print()

NAME_CONSTANTE = "valeur"                           // Variable contenant une donnée non-modifiable
print(NAME_CONSTANTE)                               // response : "valeur"
```
---
```code 
LIST :   

name_variable = ["valeur1", "valeur2", "valeur3"]   // Liste contenant un ensemble de données modifiable
print(name_variable)                                // response : ["valeur1", "valeur2", "valeur3"]
print(name_variable[0])                             // response : "valeur1"
print(name_variable[2])                             // response : "valeur3"

_ajoute_
name_variable = []                                  // Creer une liste vide
name_variable.append("valeur1")                     // Ajoute une valeur à la list  [valeur1] 
name_variable.append("valeur2")                     // Ajoute une valeur à la list  [valeur1, valeur2] 
name_variable.insert(0, ”Valeur0”)                  // Ajoute une valeur à l’index[] choisit 	      
nomVariable = list(range(5)                         // Creer une liste numérique [0, 1, 2, 3, 4] 
nomVariable = list(range(95, 100)                   // Creer une liste numérique compris entre [95, 96 .. 99] 
nomVariable = list(range(1, 10, 2)                  // Creer une liste numérique intervalle [1, 3, 5, 7, 9]

_modifie_
name_variable[3] = "valeur4"                        // Modifie une valeur à la list
print(name_variable)                                // response : ["valeur1", "valeur2", "valeur3", "valeur4"]

_supprime_
name_variable.remove("valeur4")                     // Supprime une valeur à la list
name_variable.pop()                                 // Supprime la dernière valeur de la list et la retourne
name_variable.pop(1)                                // Supprime la valeur indexer[] et la retourne
del name_variable[0]	                            // Supprime la valeur à l’index[] choisit

_copier_ 
new_variable = name_variable[:]                     // Fait une copie de la liste				    

_classer_
print(sorted(nomVariable))                          // Trie de manière alphanumérique			    
nomVariable.sort()                                  // Trie de manière alphanumérique			    
print(sorted(nomVariable, reverse = True))          // Trie de manière alphanumérique inverse  
nomVariable.reverse()                               // Trie de manière alphanumérique inverse   


_index_
print(name_variable[:])                             // all            // response : ["valeur1", "valeur2", "valeur3"]
print(name_variable[0:2])                           // start:end      // response : ["valeur1", "valeur2"]
print(name_variable[0:3:2])                         // start:end:step // response : ["valeur1", "valeur3"]
print(name_variable[1:])                            // start:         // response : ["valeur2", "valeur3"]
print(name_variable[:1])                            // end:           // response : ["valeur1", "valeur2"]
print(name_variable[:1])                            // end:           // response : ["valeur1", "valeur2"]
print(name_variable[::2])                           // step:          // response :["valeur1", "valeur3"]
```
---
```
TURPLE :

name_variable = ("valeur1", "valeur2", "valeur3")   // Liste contenant un ensemble de données non-modifiable
```
---
```code
DICTIONNAIRE :

name_variable = {                                   // Dictionnaire c'est une liste contenant une clef avec definition
    "key":"valeur1",                                // Ajoute une valeur
    "key": nameFunction(),                          // Ajoute une function
    "key":["valeurA", "ValeurB"],                   // Ajoute une liste
}
print(name_variable)                                // response : { key1:"valeur1", key2: nameFunction(), ...}
print(name_variable.key)                            // response : "valeur1"

_function & spéciaux_
name_variable = {}                                  // Creer un dictionnaire vide
name_variable['key'] = valeur                       // Ajoute une valeur
name_variable['key'] = nameFunction()               // Ajoute une function
name_variable['key'] = ["valeurA", "ValeurB"]       // Ajoute une liste
name_variable.items()                               // retourne toutes les clés:valeur
name_variable.keys()                                // retourne toutes les clés
name_variable.values()                              // retourne toutes les valeurs   
name_variable.get(“key1“)                           // retourne la valeur associé à la clé   
del meal['key1']                                    // Supprimer la key:valeur correspondant à la key                               
```
---
```code
FUNCTION :        

_functionNormale_                                  
def nameFunction(arg1, arg2):                       // Definit une function avec deux arguments
    arg1 = this.arg1                               // Attribue l'arguement1 a une variable             
    arg2 = this.arg2                               // Attribue l'arguement2 a une variable
    arg3 = arg1 + arg2                             // Fait une concatenation
    return(arg3)                                   // Retourne la valeur de arg3

nameFunction("Hello", "World")                     // response: HelloWorld
nameFunction("10", "5")                            // response: 15

_functionListe_  
name_variable = [10, 50, 80]                       // Une liste de valeur
def nameFunction(*name_variable)                   // L'étoile * parcoure la liste
   return name_variable[0] + name_variable[1]      // response: 60

_functionDictionnary_  
def nameFunction(**args) :
    return args
    
nameFunction(a=23, b=42)                           

_functionArgFalcutatif_  
def nameFunction(arg1, arg2, *arg3):               // L'étoile * rend l'arg3 facultative
    arg1 = this.arg1
    arg2 = this.arg2
    return arg1 + arg2

nameFunction("Hello", "World")
```
---
Les classes est une usine à fabriquer des types d’objet représentant un objet du monde réel auquel nous allons donné des attributs(caractéristique) avec une valeur.

Les attributs correspondent aux caractéristiques de l’objet (name = "John" / age = 36)

Les instances correspondent à un objet qu’on aura créé (personnage1 / personnage10 / voiture1)

Les méthodes correspondent à une fonction de class (def _init _(self, name, age))
```
CLASS : 

class  Name_class:
  attribut_creer = 0
 
  def __init__(self, name, age):
    self.name = name
    self.age = age
    Name_class.attribut_creer += 1

personnage1  = Name_class("John", 36)
print(personnage1.name)
print(personnage1.age)
print(Name_class.attribut_creer)
```
#### <ins>2.4 TYPE DE DONNEES : Les différents types</ins>
```code
TYPE DE DONNEES :
  
let name_variable = str("Hello")                    // Textuelle : str
let name_variable = int(10)                         // Numerique : int
let name_variable = long()                          // Numerique : int (infinie)
let name_variable = float(10.5)                     // Numerique : float
let name_variable = complex(5, -10)                 // Numerique : complex j(py) = i(math) (5-10j)
let name_variable = bool(true)                      // Numerique : boolean (true or false)   

STR :

name_variable = (“c'est une chaîne de caractère“)   // response: ”ceci est une chaîne de caractère”
name_variable = str(2025)                           // response: ”2025”
name_variable = str(10.5)                           // response: ”10.5”

_opérateur_
nomVariable = (“Une” + “concaténation”)	            // “Une concaténation”
nomVariable = (f”appelle cette {variable}")         // Permet d’appeler une variable dans du texte.

_function & spéciaux_
nomVariable = “ceci \t fait une tabulation“
nomVariable = “ceci \n fait un retour à la ligne“
nomVariable.title() 	                            //  Majuscule début de chaque mot
nomVariable.upper()                                 //  Majuscule partout
nomVariable.lower()                                 //  Minuscule partout
nomVariable.strip()                                 //  Supprime caractères qui sont entre parenthèse de la variable
nomVariable.rstrip()                                //  Partant de la droite supprime caractères entre parenthèse 
nomVariable.lstrip()	                            //  Partant de la gauche supprime caractères entre parenthèse

INT :

nomVariable = (5)                                   // Ceci est un intégrale (5)
nomVariable = int(“2025“)                           // Ceci convertit un str en int (2025)
nomVariable = int(10.5)                             // Ceci convertit un float en int (10)

_function & spéciaux_
nomVariable = round(3.1415, 2)                      // Arrondi après la virgule	(3.14)
nomVariable = round(1234, -2)                       // Arrondi avent la virgule	(1200)
nomVariable = abs(-10)                              // Retourne valeur Réel sans signe (10)
nomVariable = bin(20)                               // Convertie en binaire(Base 2)	(0b10100)
nomVariable = oct(20)                               // Convertie en octal(Base 8) (0o24)
nomVariable = hex(20)                               // Convertie en hexadecimal(Base 16) (0x14)

FLOAT :

nomVariable = (10.5)                                // Ceci est un flottant (10.5)
nomVariable = float("2025")                         // Ceci convertit un str en float (2025.0)
nomVariable = float(10)                             // Ceci convertit un int en float (10.0)

_function & spéciaux_
nomVariable = round(3.1415, 2)                      // Arrondi après la virgule	(3.14)
nomVariable = round(1234, -2)                       // Arrondi avent la virgule	(1200)
nomVariable = abs(-10.5)                            // Retourne valeur Réel sans signe (10)
```

#### <ins>2.5 OPERATORS MATHEMATICS : Les opérateurs mathématiques</ins>

| Symbole |      Opération       |       Type        |       Exemple       | 
|:-------:|:--------------------:|:-----------------:|:-------------------:|
|   ()    | Ordre des opérations | int / float / str | (3+2,5) *  5 = 27,5 | 
|   **    |      Puissance       | int / float / str |    12 ** 2 = 144    |
|    +    |       Positif        |    int / float    |         4,5         |
|    -    |       Négatif        |    int / float    |        -4,5         |
|    *    | Multiplier(produit)  | int / float / str |    1,5 * 5 = 7,5    |
|    /    |  Diviser(quotient)   |    int / float    |     6 / 4 = 1,5     |
|   //    |  Diviser(quotient)   |    int / float    |      6 / 4 = 1      |
|    %    |    Diviser(reste)    |        int        |      6 % 4 = 2      |
|    +    |       Addition       | int / float / str |     6 + 4 = 10      |
|    -    |     Soustraction     |   int / float /   |      6 – 4 = 2      |

#### <ins>2.6 OPERATORS COMPARATEUR : Les opérateurs de comparaisons</ins>

Les opérateurs de comparaison retourne true ou false.

| Symbole |                Opération                |       Type        |  Exemple   | 
|:-------:|:---------------------------------------:|:-----------------:|:----------:|
|    <    |          Strictement inférieur          | int / float / str |   5 < 10   | 
|    >    |          Strictement supérieur          | int / float / str |   10 > 5   | 
|   <=    |            inférieur ou égal            | int / float / str |  10 <= 5   | 
| 	&gt;=  |      Strictement supérieur ou égal      | int / float / str |  10 >= 5   | 
|   ==    |                  Egal                   | int / float / str |   2 == 2   | 
|   !=    |                Différent                | int / float / str |   2 != 5   | 
|   is    |   Renvoie true si les deux sont true    | int / float / str |   x is y   | 
| is not  | Renvoie true si les deux sont différent | int / float / str | x is not y | 

#### <ins>2.7 OPERATORS AFFECTATION : Les opérateurs d'affectation</ins>

Les opérateurs d'affectation attribue des valeurs à un nom (variable)

| Symbole |            Opération            |       Type        |                      Exemple                      | 
|:-------:|:-------------------------------:|:-----------------:|:-------------------------------------------------:|
|    =    |  Affectation simple (variable)  | int / float / str |                   var = valeur                    | 
|   ===   | Affectation multiple (variable) | int / float / str |               var1 = var2 = valeur                | 
|   ,=,   | Affectation parallel (variable) | int / float / str | var1, var2 = 10, 15<br> var1 // 10<br> var2 // 15 | 

#### <ins>2.7 OPERATORS LOGIC : Les opérateurs logique</ins>

Les opérateurs de comparaison retourne true ou false.

| Symbole |                 Opération                  |       Type        |         Exemple         | 
|:-------:|:------------------------------------------:|:-----------------:|:-----------------------:|
|   or    | Si une des deux valeur est true alors true | int / float / str |   (x > 3  or  x < 4)    | 
|   and   |   Si les deux valeur est true alors true   | int / float / str |   (x > 3  and x < 10)   | 
|   not   |  Renvoie False si les résultat sont true   | int / float / str | (not(x > 3  and x < 10) | 

#### <ins>2.8 OPERATORS APPARTENANCE : Les opérateurs d'appartenance</ins>

Les opérateurs de comparaison retourne true ou false.

| Symbole |                        Opération                        |       Type        |     |                  Exemple                  | 
|:-------:|:-------------------------------------------------------:|:-----------------:|:----|:-----------------------------------------:|
|   in    | Renvoie True si la variables contient l’une des valeurs | int / float / str |     |   X =[“hi”, “bye”]<br> print(“hi” in X)   | 
|  notin  |      Renvoie True si la valeur n’est pas présente       | int / float / str |     | X =[“hi”, “bye”]<br> print(“slt” notin X) | 

#### <ins>2.9 FLUX DE CONTROL : Les flux de contrôle</ins>

```code
IF / ELIF / ELSE : 

if(condition):
    print("si condition true execute ce code")
elif(condtion):
    print("sinon si condition précédente est false et que cette condition est true execute ce code")
elif(condtion):
    print("sinon si condition précédente est false et que cette condition est true execute ce code")
else:
    print("sinon si toutes les conditions précédente sont false execute ce code")
    break

break                                               // Arrête le code
continue                                            // Continue le code
```

```
FOR :

_tableau_
name_variable = ["value1", "value2", "value3"]
for item in name_variable:
    print(item)                                     // response: "value1", "value2", "value3"
_numerique_
for  item in range(0, 10):
    print(item)                                     // response: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 
```
```
WHILE : 

i = 0
while (i < 4):                                       // Repete tant que la condition n'est pas atteinte 
    print(i)                                         // response: 0, 1, 2, 3
    i = i + 1                                        // ajoute un à i a chaque passage de boucle
```
### 3. Module / Package

Voir le dossier <ins>3) FRAMEWORK