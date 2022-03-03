# UNIX

---

Les commandes UNIX permet d'intéragir avec avec votre ordinateur à l'aide de votre terminal de commande.

---

## 1. Commande UNIX de visualisation

---

### 1.1 Répertoire actuelle

Permet de voir dans quel répertoire on se trouve.

```code
pwd
```

### 1.1 Visualisation fichier et dossier

Permet de voir les repertoires (d) et fichier (-) dans le répertoire actuelle

```code
ls -la                                  // Voir tout les fichier et dossiers
ls -la "./path/name_dossier             // Voir fichier et dossier dans un répertoire
ls -la *.extension                      // Voir seulement les fichiers avec cette extension
```

### 1.2 Visualisation du contenue d'un fichier

Permet la visualisation du contenue d'un fichier

```code
cat "fichier.extension"                 // Fichier lu intégralement
grep mot_rechercher "fichier.extension" // Fichier lu partielement (ligne contenant mot rechercher)
```

---

## 2. Commande UNIX de gestion de fichier et dossier

---

### 2.1 Création de dossier

Permet de créer un dossier

```code
mkdir "name_dossier"
```

### 2.2 Création de fichier

Permet de créer un fichier

```code
touch "name_fichier.extension"
```

### 2.3 Suppression de fichier ou dossier

Permet de supprimer un fichier ou un dossier

```code
rm -r "name_dossier"                     // Permet de supprimer un dossier
rm "name_fichier.extension"              // Permet de supprimer un fichiers
```

### 2.4 Déplacer un fichier ou dossier

Permet de déplacer votre fichier ou dossier dans un autre dossier

```code
mv "name_fichier.extension" ./path/other // Permet de déplacer fichier dans un autre dossier
mv "name_dossier" ./path/other           // Permet de déplacer dossier dans un autre dossier
```

### 2.4 Copier un fichier ou dossier

Permet de copier votre fichier ou dossier dans un autre dossier

```code
cp "name_fichier.extension" ./path/other // Permet de copier fichier dans un autre dossier
cp "name_dossier" ./path/other           // Permet de copier dossier dans un autre dossier
```

---

## 3. Autres commandes UNIX

---

## 3.1 Voir les autres commandes UNIX

Permet de visualiser toutes les autres commandes possibles.

```code
help                                     // Permet de voir les autres commandes
```

## 3.2 Videz le terminal

Permet de videz le terminal de son contenu

```code
clear                                   // Permet de videz le terminal de son contenue
```
