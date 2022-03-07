# Module et Framework

## Table des matières

### Introduction
Les Framework et Librairie on pour but d’éviter au développeur de réécrire un code qui à déjà était écrit, pour cela ont importe des codes déjà existant qui sont stockée dans des frameworks est des librairie. 

Les Librairies sont un ensemble de fonction ou classes dont le code source est accessible.

Les frameworks sont un ensemble de fonction ou classes dont le code source compilé est donc privée.

Les API «Application Interface» est la parti publique d’un framework, la parti non-nécessaire aux publiques étant compilé est donc privée
```
OS : 
import os                   // Permet de manipuler les fichiers sur l'ordinateur

AUDIO :
import librosa	            // Permet d'utiliser des functions de traitement des audio

IMAGE & VIDEO : 
import opencv-python        // Permet d'utiliser des functions de traitement des image et video

MICROCONTROLEUR :
import micropython          // Permet d'utiliser des functions pour les microcontroleurs

LANGAGE : 
import NLTK                 // Permet d'utiliser des functions de traitement langage naturel

MATHEMATIQUE :
import math                 // Permet d'utiliser des functions mathématiques
import numpy                // Permet d'utiliser des functions calcul numérique

SCIENTIFIQUE :      
import scipy                // Permet d'utiliser des functions scientifiques

DONNNES : 
import pandas               // Permet d'utiliser des functions d'analyse de données
import scrapy               // Permet d'utiliser des functions de collecte de données
import BeautifulSoup        // Permet d'utiliser des functions de collecte de données
import scikit-learn         // Permet d'utiliser des functions de modélisation des donnés
import plotly               // Permet d'utiliser des functions de visualisation données

IA :
import pytorch              // Permet d'utiliser des functions d'apprentissage profond'


WEB : 
import django               // Permet d'utiliser des functions de développement web

TEST : 
import pytest               // Environnement de test
    
```
Tous les fichiers on des extensions différenciation
```
Extension fichier :

.py  Extension d’un fichier python (non compilé)
.pye Extension d’un fichier python (compilé en bytecode «011010»)
.pyd Extension d’un fichier python dll (compilé pour windows)
.pyw Extension d’un fichier python script (compilé pour windows)
.csv Extension d’un fichier contenant une liste brut (pandas)
```