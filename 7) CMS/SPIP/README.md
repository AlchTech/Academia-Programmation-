# SPIP

```texte
SPIP est un CMS qui facilite l'implantation dynamique de contenue à l'aide d'une interface graphique simplifier. Il s’agit d’un ensemble de fichiers, installés sur votre serveur, qui vous permettent de bénéficier d’un certain nombre d’automatismes : gérer un site à plusieurs,mettre en page vos articles sans avoir à taper de HTML, modifier très facilementla structure de votre site...
```

## <ins>TABLE DES MATIERES

- [SPIP](#spip)
  - [<ins>TABLE DES MATIERES](#instable-des-matieres)
    - [<ins>SPIP : 1. INSTALLATION](#insspip--1-installation)
    - [<ins>SPIP : 2. REDACTION](#insspip--2-redaction)
    - [<ins>SPIP : 3. ARCHITECTURE](#insspip--3-architecture)
    - [<ins>SPIP : 4. BOUCLE & BALISE](#insspip--4-boucle--balise)
      - [<ins>SPIP : 4.1 TYPE DE BOUCLE](#insspip--41-type-de-boucle)
      - [<ins>SPIP : 4.2 TYPE DE CRITERE](#insspip--42-type-de-critere)
      - [<ins>SPIP : 4.3 TYPE DE BALISE](#insspip--43-type-de-balise)
    - [<ins>SPIP : 5. ADVANCED FUNCTIONS <a id="advanced"></a>](#insspip--5-advanced-functions-)

---

<a id="installation"></a><details><summary>INSTALLATION</summary>

### <ins>SPIP : 1. INSTALLATION

```texte
PREREQUIS :
  
  - XAMPP                                               // Permet de simuler votre serveur
  - SPIP                                                // Permet d'utiliser le CMS SPIP

INSTALLATION :

  - Decompressez le fichier SPIP.
  - Placer SPIP à la racine du serveur.
  - Renommée le "app".

EXECUTEZ SPIP :

  - http://localhost/app/ecrire/
  - Choisir la langue
  - Configurer l'acces à la DB
  - Information de connection a spip
  - Accedez au site http://localhost/app/

```

</details>

---
 <a id="redaction"></a><details><summary>REDACTION</summary>

### <ins>SPIP : 2. REDACTION

```texte
TEXTE :

Ceci est un exemple de texte rédigé avec la syntaxe de SPIP. Si j’oublie les espaces de ma ponctuation, SPIP les ajoute automatiquement! sans oublier les «guillemets».

TITRE :

Le titre sera generer automatiquement via une balise #TITRE     // TITRE
{{{SOUS_TITRE}}}                                                // SOUS-TITRE

TYPOGRAPHIE :

{ITALIQUE}                                                      // Mot en italique
{{GRAS}}                                                        // Mot en gras
{{ {ITALIQUE & GRAS} }}                                         // Mot en gras et italique
---                                                             // Séparateur

LIEN :

[-> https://www.spip.net]                                       // https://www.spip.net
Lien vers [SPIP->https://www.spip.net]                          // Lien vers site
Lien vers [Article->12]                                         // Lien vers article interne
Lien vers [Article->art12]                                      // Lien vers article interne
Lien vers [Article->article 12]                                 // Lien vers article interne
Lien vers [Article->rub5]                                       // Lien vers rubrique interne
Lien vers [Article->rubrique 5]                                 // Lien vers rubrique interne
Lien vers [Breve->br9]                                          // Lien vers breve interne
Lien vers [Breve->breve 9]                                      // Lien vers breve interne
Lien vers [Auteur->aut20]                                       // Lien vers auteur interne
Lien vers [Auteur->auteur 20]                                   // Lien vers auteur interne
Lien vers un [mot->mot32]                                       // Lien vers mot interne
Lien vers un [site syndiqué->site1]                             // Lien vers site syndiqué interne
Lien vers un [document->doc17]                                  // Lien vers document interne
Lien vers un [document->document 17]                            // Lien vers document interne
Lien vers une [image->img13]                                    // Lien vers image interne
Lien vers une [image->image 13]                                 // Lien vers image interne
Lien vers source wikipedia[?Marcel Proust]                      // Lien vers source wikipedia de Marcel Proust

LISTE_A_PUCE :

-* Une liste                                                    // °
-* Une liste                                                    // °
-** Sous élément de liste                                       //   °

-# Une liste ordonnée                                           // 1.
-# Une liste ordonnée                                           // 2.
-## Sous élément de liste ordonnée                              //   2.1

ANCRAGE :

[->#nameEncrage]                                                // Lien vers l'ancrage
[nameEncrage<-]                                                 // Zone d'encrage

TABLEAU :

||Légende|Résumé||                                              // Titre de Tableau
| {{Nom}} | {{Date de naissance}} | {{Ville}} |                 // Entete de tableau
| Jacques | 5/10/1970 | Paris |                                 // Contenu du tableau
| Claire | 12/2/1975 | Belfort |                                // Contenu du tableau
| Martin | 1/31/1957 | Nice |                                   // Contenu du tableau
| Marie | 23/12/1948 | Perpignan |                              // Contenu du tableau

NOTE_BAS_PAGE :

Mot à definir[[Note afficher en bas de page]]                   // Permet une definition en bas de page automatique
Mot à definir[[<23> Note afficher en bas de page]]              // Permet une definition en bas de page manuel

CITATION :

<quote>Une citation</quote>

CODE :

<code><?php  echo "bonjour"; ?></code>                           // Code PHP
```

</details>

---

<a id="architecture"></a><details><summary>ARCHITECTURE</summary>

### <ins>SPIP : 3. ARCHITECTURE

Architecture dossier:

```text
www
 |- app
     |- config              // ACCES DB
     |- ecrire              // ACCES LOGICIEL SPIP
     |- img                 // ACCES ASSETS (img, video, pdf, ...)
     |- local               // ACCES CACHE
     |- plugin-dist         // ACCES FUNCTION SPIP (installés, actifs et non désactivables)
     |- prive               // ACCES SQUELETTE SPIP (interface privée)
     |- squelettes          // ACCES SQUELETTE SITE (votre site)
     |- squelettes-dist     // ACCES SQUELETTE EXEMPLE (exemple d'un site SPIP)
     |- tmp                 // ACCES TEMPORAIRE (recueille caches, logs, ...)
     |- index.php           // ACCES ENTRER SPIP
```

Architecture dossier:
```text

squelettes                  // ACCES SQUELETTE SITE (votre site)
 |- sommaires.html          // ACCES ENTRER DU SITE (index.html)
 |- css                     // ACCES FEUILLE CSS
 |- formulaire              // ACCES FORMULAIRE
     |- nameForme.html
     |- nameForme.php
 |- icon                    // ACCES ICONE( vos icon )
 |- img                     // ACCES ASSETS (img, video, pdf, ...)
 |- inclure                 // ACCES FICHIER A INCLURE DANS PAGE (head, footer, nav, ...)
     |- nameInclure.html
 |- lang                    // ACCES TRADUCTION (Generation des différents lang)
     |- paquet_fr.php
     |- paquet_en.php
 |- modeles                 // ACCES MODELES
     |- lesauteurs.html
 |- police                  // ACCES POLICE
     |- roboto.ttf
 |- 404.html                // ACCES OTHER PAGE
 |- article.html            // ACCES OTHER PAGE
 |- auteur.html             // ACCES OTHER PAGE
 |- rubrique.html           // ACCES OTHER PAGE
 |- ...                     // VOIR SQUELETTES-DIST
```

Architecture interface

```text
|- Accueil                  // ACCES ACCUEIL SPIP
|- Edition                  // ACCES EDITION (Création d'articles, auteurs, document, ...)
|- Publication              // ACCES PUBLICATION (publication et suivis)
|- Squelette                // ACCES INTEGRATION et ASSETS ()
|- Maintenance              // ACCES MAINTENANCE (Videz cache, maintenance DB, ...)
|- Configuration            // ACCES CONFIGURATION (titre, description, url, gestion plugin...)
```

</details>

---
<a id="boucle"></a><details><summary>BOUCLE</summary>

### <ins>SPIP : 4. BOUCLE & BALISE

```TEXTE
Le contenue dynamic du site et placé dans une base de données et pour les affichés on utilise les boucles.

Etape I : le webmaster definit le squelette de la page, qui est un model de page HTML

Etape II : Tout le contenu d’un site est géré part SPIP est installé dans une base de données MySQL.

Etape III : Losque l'utilisateur se connecte a SPIP il va appellé des fichiers, qui contient des instructions pour generer le contenu.
```

```code
FONCTIONNEMENT D'UNE BOUCLE :

<BB_nameBoucle>
  GENERE DU CODE AVENT SANS CONDITION DE RESULTAT (OPTIONEL)
  <B_nameBoucle>
    GENERE DU CODE AVENT QUE SI IL Y A AU MOINS UN RESULTAT
    <BOUCLE_nameBoucle(TYPE_BOUCLE){critère1}{critère2}...{critèrex}>
      GENERE DU CODE ET AFFICHE LES RESULTAT AVEC BALISE SPIP
    </BOUCLE_nameBoucle>
    GENERE DU CODE APRES QUE SI IL Y A AU MOINS UN RESULTAT
  </B_nameBoucle>
    GENERE CE CODE SI AUCUN RESULTAT
  <//B_nameBoucle>
    GENERE DU CODE APRES SANS CONDITION DE RESULTAT (OPTIONEL)
</BB_nameBoucle>

EXEMPLE BOUCLE :

<BOUCLE_rubriques(RUBRIQUES){par titre}>                       // Recupere rubriques classez part titre
  <div> #TITRE </div>                                          // Affiche le titre de la rubrique
  <BOUCLE_articles(ARTICLES){id_rubrique}{par date}>           // Recupere articles de l'id rubrique classez par date
    <div> #TITRE </div>                                        // Affiche le titre de l'article
  </BOUCLE_articles>
<BOUCLE_rubriques
```

<a id="typeBoucle"></a><details><summary>TYPE BOUCLE</summary>

#### <ins>SPIP : 4.1 TYPE DE BOUCLE

```CODE
<BOUCLE_articles(ARTICLES){critères...}></BOUCLE_articles>      // RECUPERE LES ARTICLES ECRIT SUR SPIP
<BOUCLE_rubriques(RUBRIQUES){critères...}></BOUCLE_rubriques>   // RECUPERE LES RUBRIQUES ECRIT SUR SPIP
<BOUCLE_breves(BREVES){critères...}></BOUCLE_breves>            // RECUPERE LES BREVES ECRIT SUR SPIP
<BOUCLE_auteurs(AUTEURS){critères...}></BOUCLE_auteurs>         // RECUPERE LES AUTEURS ECRIT SUR SPIP
<BOUCLE_forums(FORUMS){critères...}></BOUCLE_forums>            // RECUPERE LES FORUMS ECRIT SUR SPIP
<BOUCLE_mots(MOTS){critères...}></BOUCLE_mots>                  // RECUPERE LES MOTS ECRIT SUR SPIP
<BOUCLE_groupes(GROUPES_MOTS)</BOUCLE_groupes>                  // RECUPERE LES GROUPES ECRIT SUR SPIP
<BOUCLE_documents(DOCUMENTS){critères...}></BOUCLE_documents>   // RECUPERE LES DOCUMENTS ECRIT SUR SPIP
<BOUCLE_sites(SITES){critères...}></BOUCLE_sites>               // RECUPERE LES SITES ECRIT SUR SPIP
<BOUCLE_syndic(SYNDIC_ARTICLES){critères...}></BOUCLE_syndic>   // RECUPERE LES SYNDIC_ARTICLES ECRIT SUR SPIP
<BOUCLE_signatures(SIGNATURES){critères...}></BOUCLE_signatures>// RECUPERE LES SIGNATURES ECRIT SUR SPIP
<BOUCLE_hierarchie(HIERARCHIE){critères...}></BOUCLE_hierarchie>// RECUPERE LES HIERARCHIE ECRIT SUR SPIP
<BOUCLE_data(DATA){critères...}></BOUCLE_data>                  // RECUPERE LES DATA ECRIT SUR SPIP
<BOUCLE_test(CONDITION){critères...}></BOUCLE_test>             // RECUPERE LES CONDITION ECRIT SUR SPIP

<BOUCLEx …>
  <li>#TITRE
    <BOUCLEn(BOUCLEx)></BOUCLEn>                                // RECUPERE LA BOUCLEx ET LA COLLE DANS BOUCLEn
  </li>
</BOUCLEx>

```

</details>

<a id="typeCritere"></a><details><summary>TYPE CRITERE</summary>

#### <ins>SPIP : 4.2 TYPE DE CRITERE

ARTICLE :

```CODE
_critèresSélection_

{branche}                           // SELECTIONNE ARTICLES DE RUBRIQUE ET DE SES SOUS-RUBRIQUE
{branche 10}                        // SELECTIONNE ARTICLES DE RUBRIQUE ET DE SES SOUS-RUBRIQUE
{branche?}                          // SELECTIONNE ARTICLES DE ... SI IL Y A ID_RUBRIQUE SINON ALL ARTICLE SITE

{id_secteur=valeur}                 // SELECTIONNE ARTICLES DE RUBRIQUE VALEUR
{id_secteur}                        // SELECTIONNE ARTICLES DE RUBRIQUE EN COURS
{id_rubrique=valeur}                // SELECTIONNE ARTICLES DE RUBRIQUE VALEUR
{id_rubrique}                       // SELECTIONNE ARTICLES DE RUBRIQUE EN COURS
{id_article=valeur}                 // SELECTIONNE UN ARTICLE PRECIS VALEUR
{id_article}                        // SELECTIONNE UN ARTICLE PRECIS EN COURS
{id_auteur=valeur}                  // SELECTIONNE ARTICLES DE L'AUTEUR VALEUR
{id_auteur}                         // SELECTIONNE ARTICLES DE L'AUTEUR EN COURS
{id_groupe=valeur}                  // SELECTIONNE ARTICLES LIEE A UN GROUPE DE MOTS-CLEFS VALEUR
{id_groupe}                         // SELECTIONNE ARTICLES LIEE A UN GROUPE DE MOTS-CLEFS EN COURS
{id_mot=valeur}                     // SELECTIONNE ARTICLES LIEE A UN MOT-CLEF VALEUR
{id_mot}                            // SELECTIONNE ARTICLES LIEE A UN MOT-CLEF EN COURS

{titre_mot=valeur}                  // SELECTIONNE ARTICLES LIEE A UN MOT-CLEF VALEUR
{type_mot=valeur}                   // SELECTIONNE ARTICLES LIEE A UN MOT-CLEF VALEUR

{lang=valeur}                       // SELECTIONNE ARTICLES DE LA LANG VALEUR
{origine_traduction}                // SELECTIONNE ARTICLES QUI SERT DE BASE AUX VERSIONS TRADUITE
{traduction}                        // SELECTIONNE LES TRADUCTIONS DE L'ARTICLES EN COURS

{recherche}                         // SELECTIONNE ARTICLES AU MOTS INDIQUER DANS MOTEUR RECHERCHE

{si ...}                            // SELECTIONNE ARTICLES SI LA CONDITIONS EST RESPESCTER

{date}                              // SELECTIONNE ARTICLES PAR DATE
{date==YYYY-MM-DD hh-mm-ss}         // SELECTIONNE ARTICLES AYANT DATE LA DATE INDIQUER
{date!=YYYY-MM-DD hh-mm-ss}         // SELECTIONNE ARTICLES ETANT DIFFERENT DE LA DATE INDIQUER
{date<=YYYY-MM-DD hh-mm-ss}         // SELECTIONNE ARTICLES INFERIEUR OU EGAL A LA DATE INDIQUER
{date>=YYYY-MM-DD hh-mm-ss}         // SELECTIONNE ARTICLES SUPERIEUR OU EGAL A LA DATE INDIQUER

{tout}                              // SELECTIONNE DONNEES D'UN TABLE SANS RESTRICTIONS

_statutArticle(prop,prepa,publie,refuse,poubelle)_

{statut IN publie,refuse,poubelle}  // SELECTIONNE ARTICLES AVEC LE STATUT INDIQUER
{statut=refuse}                     // SELECTIONNE ARTICLES AVEC LE STATUT INDIQUER
```

RUBRIQUE :

```CODE
_critèresSélection_

{id_rubrique=valeur}                // SELECTIONNE RUBRIQUE VALEUR
{id_rubrique}                       // SELECTIONNE RUBRIQUE EN COURS
{id_secteur}                        // SELECTIONNE RUBRIQUES DE CE SECTEUR
{id_parent=valeur}                  // SELECTIONNE SOUS RUBRIQUE DANS LA RUBRIQUE SELECTIONNEES
{id_parent}                         // SELECTIONNE SOUS RUBRIQUE DANS LA RUBRIQUE EN COURS
{id_enfant}                         // SELECTIONNE LA RUBRIQUE PARENT QUI CONTIENT LA RUBRIQUE ENFANT
{meme_parent}                       // SELECTIONNE LES RUBRIQUES AU MEME NIVEAU HIERARCHIQUE QUE RUBRIQUE EN COURS
{racine}                            // SELECTIONNE LISTE DES SECTEUR
{id_mot}, {titre_mot=xxx}           // SELECTIONNE RUBRIQUE QUI CONTIENT LE TITRE XXX
{lang}                              // SELECTIONNE RUBRIQUE DANS LA LANG SELECTIONNEES
{tout}                              // SELECTIONNE TOUT LES RUBRIQUES
```

BREVES :

```CODE
_critèresSélection_

{id_rubrique=valeur}                // SELECTIONNE RUBRIQUE VALEUR
{id_rubrique}                       // SELECTIONNE RUBRIQUE EN COURS
{id_breve=valeur}                   // SELECTIONNE BREVE VALEUR
{id_breve}                          // SELECTIONNE BREVE COURS
{id_mot}, {titre_mot=xxx}           // SELECTIONNE BREVE QUI CONTIENT LE TITRE XXX
{recherche}                         // SELECTIONNE BREVE CORRESPONDANT AU MOTS RECHERCHER
{lang}                              // SELECTIONNE BREVE DE LA LANGUE DEMANDER
{tout}                              // SELECTIONNE TOUT LES BREVES
```

AUTEURS :

```code
_critèresSélection_

{id_auteur=valeur}                  // SELECTIONNE L'AUTEUR VALEUR
{id_auteur}                         // SELECTIONNE L'AUTEUR EN COURS
{id_article}                        // SELECTIONNE LES AUTEURS DE CETTE ARTICLE
{lang}                              // SELECTIONNE BREVE DE LA LANGUE DEMANDER
{lang_select}                       // SELECTIONNE AUTEURS QUI ON CHOISIT UN LANGUE
{statut}                            // SELECTIONNE LES AUTEURS AYANT UN STATUT(ADMIN, REDAC, ...)
{tout}                              // SELECTIONNE TOUT LES AUTEURS
```

FORUM :

```code
{id_forum=valeur}                   // SELECTIONNE LE MESSAGE CORRESPONDANT A LA VALEUR
{id_article}                        // SELECTIONNE LES MESSAGES CORRESPONDANT A CETTE ARTICLE
{id_rubrique}                       // SELECTIONNE LES MESSAGES CORRESPONDANT A CETTE RUBRIQUE
{id_breve}                          // SELECTIONNE LES MESSAGES CORRESPONDANT A CETTE BREVE
{id_syndic}                         // SELECTIONNE LES MESSAGES CORRESPONDANT A CE SITE
{id_thread}                         // SELECTIONNE MESSAGES CORRESPONDANT A CE FIL DE DISCUSSION
{id_secteur}                        // SELECTIONNE MESSAGES CORRESPONDANT A CE SECTEUR OU SELECTIONNEES 
{id_mot}, {titre_mot=xxx}           // SELECTIONNE MESSAGES AYANT POUR TITRE XXX
{id_groupe}, {type_mot=yyyy}        // SELECTIONNE MESSAGES AYANT LES MOTS YYYY
{id_parent}                         // SELECTIONNE MESSAGES DEPENDANT D'UN AUTRE MESSAGE
{id_enfant}                         // SELECTIONNE MESSAGES DONT DEPENT CE MESSAGE EN COURS
{meme_parent}                       // SELECTIONNE MESSAGES REPONDANT A UN AUTRE MESSAGE
{statut}                            // SELECTIONNE MESSAGES CORRESPONDANT CERTAIN STATUT
{tout}                              // SELECTIONNE TOUT LES MESSAGES
```

MOTS :

```code
{id_mot=valeur}                     // SELECTIONNE LE MOT CLEF CORRESPONDANT A L'ID MOT
{id_groupe=valeur}                  // SELECTIONNE UN GROUPE DE MOT CORREPONDANT A L'ID GROUPE
{id_article}                        // SELECTIONNE MOT CLEF ASSOCIER A CET ARTICLE
{id_rubrique}                       // SELECTIONNE MOT CLEF ASSOCIER A UNE RUBRIQUE
{id_breve}                          // SELECTIONNE MOT CLEF ASSOCIER A UN BREVE
{id_syndic}                         // SELECTIONNE MOT CLEF ASSOCIER A SITE DE REFERENCE
{id_forum}                          // SELECTIONNE MOT CLEF ASSOCIER A MESSAGE DE FORUM
{titre=france}                      // SELECTIONNE MOT CLEF INTITULE "FRANCE"
{type=pays}                         // SELECTIONNE MOT CLEF DU GROUPE INTITULE "PAYS"
{tout}                              // SELECTIONNE TOUT LES MOT-CLEFS 
```

GROUPE_MOTS :

```code
voir commun
```

DOCUMENTS :

```CODE
{id_document}                       // SELECTIONNE IDENTIFIANT DU DOCUMENT
{id_article=value}                  // SELECTIONNE DOCUMENTS DE L'ARTICLE AYANT CET ID
{id_rubrique}                       // SELECTIONNE DOCUMENTS DE LA RUBRIQUE AYANT CET ID
{id_breve}                          // SELECTIONNE DOCUMENTS DE LA BREVE AYANT CET ID
{mode=document}                     // SELECTIONNE DOCUMENTS MULTIMEDIA
{mode=image}                        // SELECTIONNE DOCUMENTS IMAGE
{extension=jpg|png|gif}             // SELECTIONNE DOCUMENTS AYANT EXTENSION SUIVANTE
{media=...}                         // SELECTIONNE DOCUMENTS SELON SONT TYPE "image","audio","video","file"
{distant=oui}                       // SELECTIONNE DOCUMENTS SUR UN AUTRE SERVEUR
{distant=non}                       // SELECTIONNE DOCUMENTS LOCAL
{largeur >= 1000}                   // SELECTIONNE DOCUMENTS AYANT LARGEUR SUPERIEUR OU EGAL
{hauteur <= 1000}                   // SELECTIONNE DOCUMENTS AYANT HAUTEUR SUPERIEUR OU EGAL
{portrait}                          // SELECTIONNE DOCUMENTS AYANT LARGEUR PLUS GRANDE QUE HAUTEUR
{paysage}                           // SELECTIONNE DOCUMENTS AYANT HAUTEUR PLUS GRANDE QUE LARGEUR
{carre}                             // SELECTIONNE DOCUMENTS AYANT HAUTEUR EGAL A LA LARGEUR

{doublons}                          // EMPECHE D'AFFICHER LES DOCUMENTS DOUBLONS
{vu=non}                            // EMPECHE D'AFFICHER LES DOCUMENTS DANS LE TEXTE OU CHAPO

{par rang_lien}                     // ORDONNE DOCUMENTS SELON LEUR RANG
```

LOGO :

```CODE
#LOGO{top/left/right/center/bottom}    // GERE ALIGNEMENT DU LOGO
#LOGO{url}                             // AFFICHE LOGO QUI POINTE VERS LE LIEN(url)
#LOGO**                                // RENVOIE LE FICHIER
```

SITE :

```code
{tout}                              // SELECTIONNE TOUT LES SITES REFERENCES
{id_syndic}                         // SELECTIONNE TOUT LES SITES AYANT POUR REFERENCE ID SYNDIC
{id_rubrique}                       // SELECTIONNE TOUT LES SITES AYANT POUR REFERENCE ID RUBRIQUE
{id_secteur}                        // SELECTIONNE TOUT LES SITES AYANT POUR REFERENCE ID SECTEUR
{id_groupe=zzzz}                    // SELECTIONNE TOUT LES SITES AYANT POUR REFERENCE ID GROUPE
{id_mot}                            // SELECTIONNE SITES LIEE AU MOT A L'ID MOT CLEF
{titre_mot=xxxx}                    // SELECTIONNE SITES LIEE AU MOT CLEF "xxxx"
{type_mot=yyyy}                     // SELECTIONNE SITES LIEE AU GROUPE DE MOT "yyyy"
{syndication=oui}                   // SELECTIONNE SITES FESANT L'OBJET D'UNE SYNDICATION
{syndication=non}                   // SELECTIONNE SITES NE FESANT PAS L'OBJET D'UNE SYNDICATION
{moderation=oui}                    // SELECTIONNE LES SITES SONT BLOQUER "moderes"
```

SYNDIC_ARTICLES :

```code
{tout}                              // SELECTIONNE TOUT LES SITES SINDIQUES
{id_syndic_article=valeur}          // SELECTIONNE ARTICLE SINDIQUES
{id_syndic}                         // SELECTIONNE ARTICLES DU SITE SINDIQUES 
{id_rubrique}                       // SELECTIONNE ARTICLES DANS CETTE RUBRIQUE
{id_secteur}                        // SELECTIONNE ARTICLES DANS CE SECTEUR
```

SIGNATURES :

```code
{id_article}                        // SELECTIONNE LES SIGNATURES DE LA PETITION
{id_signature}                      // SELECTIONNE LA SIGNATURE CORRESPONDANT A L'IDENTIFIANT
{id_trad}                           // SELECTIONNE LES SIGNATURES DE LA PETITION OU TRADUCTION
{tout}                              // SELECTIONNE TOUT LES SIGNATURES DU SITE

{par nom_email}                     // CLASSE SIGNATAIRE PAR NOM
{par ad_email}                      // CLASSE SIGNATAIRE PAR EMAIL
```

HIERARCHIE :

```code
Attention : cette boucle sera obligatoirement placée à l’intérieur d’une boucle ARTICLES ou RUBRIQUES

{id_article}                        // SELECTIONNE TOUTE LES RUBRIQUE DEPUIS LA RACINE JUSQU'A ARTICLE ACTUEL
{id_rubrique}                       // SELECTIONNE TOUTE LES RUBRIQUE DEPUIS LA RACINE JUSQU'A RUBRIQUE ACTUEL
{tout}                              // SELECTIONNE TOUT LES RUBRIQUES
```

DATA :

```code
<BOUCLE_afficher(DATA){source format,données}>
 [(#CLE)] - [(#VALEUR|print)]
</BOUCLE_afficher>

{source format, données}

Le format peut être de ce type :
-  table (alias array ou tableau), pour un tableau déjà créé
-  csv, json, yaml pour un fichier composé dans l’un de ces formats
-  file pour boucler sur les lignes d’un fichier
-  glob ou pregfiles pour boucler sur les fichiers d’un répertoire (et plus...)
-  rss (alias atom) pour lire un flux de nouvelles
-  plugins pour lister les plugins actifs sur le site
-  yql pour envoyer une requête sur le webservice de Yahoo Query Language
-  sql pour envoyer une requête brute au serveur SQL (utiliser {source sql, connecteur:requete} pour envoyer requête sur DB)
-  ics pour boucler sur des calendriers (nécessite le plugin icalendar : lire Plugin iCalendar)
-  etc.

Les données peuvent être de plusieurs natures, en fonction du format :
-  un tableau de données, par exemple #ENV*
-  le chemin d’un fichier sur le disque dur, ex : sources/definitions.csv
-  le chemin d’un fichier ou d’un dossier sur le disque dur
-  l’URL d’un fichier ou d’un webservice, ex : http://per.sonn.es/bases/phobia.fr.yaml
-  chaîne quelconque de format transformer en tableau de données, ex : "select * from flickr.photos.search where text='spip'"

{valeur=x}
{par xx}
{!par xx}
{a,b}
{pagination ...}
{fusion /x/y}
{datapath chemin/vers/ma/donnee}


VOIR UTILISATION PLUS EN DETAIL https://www.spip.net/fr_article5444.html ET https://www.spip.net/fr_article5443.html
```

COMMUN :

```code
{par date}                          // SELECTIONNE PAR DATE A PARTIR DE LA PLUS ANCIENNE
{par titre}                         // SELECTIONNE PAR TITRE ORDRE ALPHANUMERIQUE
{par ...}                           // SELECTIONNE EN FONCTION DU CRITERE CHOISIT (auteur, ...)
{par hasard}                        // SELECTIONNE PAR ORDRE ALEATOIRE
{par date, titre}                   // SELECTIONNE PAR DATA PUIS PAR TITRE
{par popularite}                    // SELECTIONNE PAR POPULARITE

{!par ...}                          // SELECTIONNE PAR ORDRE INVERSE DU PLUS RECENT AUX PLUS ANCIENT
{inverse}                           // SELECTIONNE PAR ORDRE INVERSE DU PLUS RECENT AUX PLUS ANCIENT

{unique}                            // EVITE D'AFFICHER UN ARTICLE DEJA PRESENT
{exclus}                            // EXLUS DE L'AFFICHAGE L'ELEMENT CHOISIT

{logo}                              // SELECTIONNE ELEMENT QUI A UN LOGO
{titre==^[aA]}                      // SELECTIONNE ELEMENT DONT LE TITRE COMMENCE PAR "a" OU "A"
{id_secteur != 2}                   // SELECTIONNE ELEMENT DONT LE SECTEUR EST DIFFERENT DE 2
{age<30}                            // SELECTIONNE ELEMENT DONT LES JOURS SONT INFERIEUR A 30 JOURS
{annee<=2000}                       // SELECTIONNE ELEMENT DONT LES ANNEES SONT INFERIEUR OU EGAL A 2000
{titre IN 'Chine', 'Japon'}.        // SELECTIONNE ELEMENT DONT LE TITRE CONTIENT 'Chine' ou 'Japon'
{0, 10}                             // SELECTIONNE ELEMENT DANS UNE PLAGE EXEMPLE 10 PREMIER ARTICLE
{5, n}                              // SELECTIONNE ELEMENT DANS UNE PLAGE EXEMPLE DU 6 JUSQU'AU DERNIER

{"div"}                             // PERMET D'INSERER UN BALISE HTML ENTRE CHAQUE BOUCLE
{", "}                              // PERMET D'INSERER UN TEXTE 'virgule' CHAQUE BOUCLE
</details>
```

</details>

<a id="typeBalise"></a><details><summary>TYPE BALISE</summary>

#### <ins>SPIP : 4.3 TYPE DE BALISE

ARTICLE :

```code
#TITRE                              // AFFICHE TITRE
#SURTITRE                           // AFFICHE SURTITRE
#SOUSTITRE                          // AFFICHE SOUS-TITRE
#CHAPO                              // AFFICHE LE TEXTE D'INTRODUCTION
#DESCRIPTIF                         // AFFICHE LE DESCRIPTIF
#INTRODUCTION                       // AFFICHE 600 PREMIER CARACTERE DU TEXTE
#TEXTE                              // AFFICHE TEXTE
#LESAUTEURS                         // AFFICHE LES AUTEURS DE CETTE ARTICLE AVEC LIEN VERS PAGE AUTEUR
#PS                                 // AFFICHE POST-SCRIPTUM
#NOTES                              // AFFICHE LES NOTES DE BAS DE PAGE

#PETITION                           // AFFICHE UNE PETITION
#FORMULAIRE_SIGNATURE               // CREER UN FORMULAIRE PERMETTANT DE SIGNER PETITION
#FORMULAIRE_SITE                    // DANS BOUCLE RUBRIQUE PERMET AJOUTER DES REFERENCE VISITEUR
#FORMULAIRE_RECHERCHE               // CREER UN FORMULAIRE DE RECHERCHE SPIP
#FORMULAIRE_FORUM                   // CREER UN FORMULAIRE PERMETTANT D'ECRIRE UN COMMENTAIRE
#PARAMETRES_FORUM                   // [<a href="spip.php?page=forum&(#PARAMETRES_FORUM)">Répondre à cette article</a>]
#FORMULAIRE_ECRIRE_AUTEUR           // CREER UN FORMULAIRE POUR ECRIRE A L'AUTEUR
#FORMULAIRE_INSCRIPTION             // CREER UN FORMULAIRE D'INSCRIPTION Configuration → Interactivité 
#FORMULAIRE_LOGIN                   // CREER UN FORMULAIRE DE CONNECTION


#ID_ARTICLE                         // AFFICHE L'IDENTIFIANT UNIQUE ARTICLE EN COURS
#ID_RUBRIQUE                        // AFFICHE L'IDENTIFIANT UNIQUE RUBRIQUE EN COURS
#ID_SECTEUR                         // AFFICHE L'IDENTIFIANT UNIQUE SECTEUR EN COURS
#LANG                               // AFFICHE LA LANGUE DE CETTE ARTICLE

#VISITES                            // AFFICHE LE NOMBRE TOTAL DE VISITE
#POPULARITE                         // AFFICHE POPULARITE DE L'ARTICLE EN POURCENTAGE
#POPULARITE %                       // AFFICHE POPULARITE DE L'ARTICLE EN POURCENTAGE AVEC SYMBOLE
#POPULARITE_ABSOLUE                 // AFFICHE POPULARITE DE L'ARTICLE FREQUENTATION QUOTIDIENNE
#POPULARITE_MAX                     // AFFICHE LA POPULARITE MAXIMUM QUE ELEMENT   PUISSE AVOIR
#POPULARITE_SITE

#DATE                               // AFFICHE DATE DE MISE EN LIGNE
#DATE_REDAC                         // AFFICHE DATE DE LA REDACTION AVANT MISE EN LIGNE
#DATE_MODIF                         // AFFICHE DATE DE LA DERNIERE MODIFICATION
#DATE_NOUVEAUTES                    // AFFICHE DATE DU DERNIER ENVOIS (MAIL?)
[(#DATE|nom_mois|annee)]            // AFFICHE DATE AVEC DES FILTRE

#URL_ARTICLE                        // AFFICHE URL DE L'ARTICLE

#LOGO_ARTICLE                       // AFFICHE LOGO ARTICLE
#LOGO_RUBRIQUE                      // AFFICHE LOGO RUBRIQUE DE L'ARTICLE
#LOGO_ARTICLE_RUBRIQUE              // AFFICHE LOGO ARTICLE REMPLACER PAR LOGO RUBRIQUE SI ABSENT
#LOGO_ARTICLE_NORMAL                // AFFICHE LOGO SANS SURVOL
#LOGO_ARTICLE_SURVOL                // AFFICHE LOGO EN SURVOLANT
#LOGO_SITE_SPIP                     // AFFICHE LOGO DU SITE
#LOGO_AUTEUR                        // AFFICHE LOGO AUTEUR
#LOGO_BREVE                         // AFFICHE LOGO BREVE
```

RUBRIQUE :

```code
#ID_SECTEUR                         // AFFICHE IDENTIFIANT SECTEUR DE LA RUBRIQUE
#ID_PARENT                          // AFFICHE IDENTIFIANT DU PARENT DE LA RUBRIQUE
#ID_RUBRIQUE                        // AFFICHE IDENTIFIANT RUBRIQUE

#TITRE                              // AFFICHE TITRE RUBRIQUE
#DESCRIPTIF                         // AFFICHE DESCRIPTIF RUBRIQUE
#TEXTE                              // AFFICHE TEXTE RUBRIQUE
#INTRODUCTION                       // AFFICHE 600 PREMIER CARACTERE DU TEXTE
#NOTES                              // AFFICHE NOTES BAS DE PAGES

#LANG                               // AFFICHE LA LANG DE CETTE RUBRIQUE
#DATE                               // AFFICHE DATE DE LA DERNIER PUBLICATION DANS CETTE RUBRIQUE
#LOGO_RUBRIQUE                      // AFFICHE LOGO RUBRIQUE
#LOGO_RUBRIQUE_NORMAL               // AFFICHE LOGO RUBRIQUE SANS SURVOL
#URL_RUBRIQUE                       // AFFICHE URL DE LA PAGE RUBRIQUE

#FORMULAIRE_FORUM                   // AFFICHE FORMULAIRE FORUM
#PARAMETRES_FORUM                   // [<a href="spip.php?page=forum&(#PARAMETRES_FORUM)">Répondre à cette rubrique</a>]
#FORMULAIRE_SITE                    // DANS BOUCLE RUBRIQUE PERMET AJOUTER DES REFERENCE VISITEUR*
```

BREVE :

```code
#ID_BREVE                             // AFFICHE IDENTIFIANT BREVE
#ID_RUBRIQUE                          // AFFICHE IDENTIFIANT RUBRIQUE DONT DEPEND LA BREVE

#TITRE                                // AFFICHE TITRE DE LA BREVE
#TEXTE                                // AFFICHE TEXTE DE LA BREVE
#INTRODUCTION                         // AFFICHE 600 PREMIER CARACTERE DU TEXTE
#NOTES                                // AFFICHE NOTES BAS DE PAGE

#NOM_SITE                             // AFFICHE NOM SITE INDIQUER EN REFERENCES
#URL_SITE                             // AFFICHE URL SITE INDIQUER EN REFERENCES

#DATE                                 // AFFICHE DATE DE LA PUBLICATION
#LANG                                 // AFFICHE LA LANG DE LA BREVE
#LOGO_BREVE                           // AFFICHE LOGO DE LA BREVE
#LOGO_BREVE_RUBRIQUE                  // AFFICHE LOGO DE LA BREVE SINON LOGO RUBRIQUE
#URL_BREVE                            // AFFICHE URL DE LA PAGE BREVE

#FORMULAIRE_FORUM                     // AFFICHE FORMULAIRE POUR CETTE BREVE
#PARAMETRES_FORUM                     // [<a href="spip.php?page=forum&(#PARAMETRES_FORUM)">Répondre à cette bréve</a>]
```

AUTEURS :

```code
#ID_AUTEUR                          // AFFICHE IDENTIFIANT AUTEUR
#NOM                                // AFFICHE NOM AUTEUR
#BIO                                // AFFICHE BIOGRAPHIE AUTEUR
#EMAIL                              // AFFICHE EMAIL AUTEUR
#NOTES                              // AFFICHE NOTE DE BAS DE PAGE

#NOM_SITE                           // AFFICHE NOM SITE DE L'AUTEUR
#URL_SITE                           // AFFICHE URL DU SITE DE L'AUTEUR

#PGP                                // AFFICHE CLE PUBLIQUE CRYPTE
#LANG                               // AFFICHE LA LANGUE DE L'AUTEUR
#LOGO_AUTEUR                        // AFFICHE LOGO DE L'AUTEUR
#URL_AUTEUR                         // AFFICHE URL PAGE SPIP DE L'AUTEUR

#FORMULAIRE_ECRIRE_AUTEUR           // AFFICHE FORMULAIRE POUR ECRIRE A L'AUTEUR
```

FORUM :

```code
#ID_FORUM                              // AFFICHE IDENTIFIANT DU MESSAGE
#ID_THREAD                             // AFFICHE IDENTIFIANT DU FIL D'ACTUALITEES
#ID_BREVE                              // AFFICHE IDENTIFIANT BREVE A LAQUEL CE MESSAGE EST ASSOCIER
#ID_ARTICLE                            // AFFICHE IDENTIFIANT ARTICLE AU QUEL REPOND CE MESSAGE
#ID_RUBRIQUE                           // AFFICHE IDENTIFIANT RUBRIQUE AU QUEL REPOND CE MESSAGE
#ID_SYNDIC                             // AFFICHE IDENTIFIANT DU SITE AU QUEL REPOND CE MESSAGE

#TITRE                                 // AFFICHE TITRE DU MESSAGE
#TEXTE                                 // AFFICHE TEXTE DU MESSAGE
#AUTEUR                                // AFFICHE AUTEUR DU MESSAGE
#IP                                    // AFFICHE L'IP DE L'AUTEUR
#EMAIL                                 // AFFICHE EMAIL DE L'AUTEUR DU MESSAGE
#NOM_SITE                              // AFFICHE NOM DU SITE WEB INDIQUE PAR L'AUTEUR
#URL_SITE                              // AFFICHE URL DU SITE WEB INDIQUE PAR L'AUTEUR

#DATE                                  // AFFICHE DATE DE PUBLICATION DU MESSAGE
#URL_FORUM                             // AFFICHE L'URL QUI AFFICHE LE MESSAGE DU FORUM

#FORMULAIRE_FORUM                      // AFFICHE FORMULAIRE PERMETTANT DE REPONDRE A CE MESSAGE
#PARAMETRES_FORUM                      // [<a href="spip.php?page=forum&(#PARAMETRES_FORUM)">Répondre à ce message</a>]

_statutMessage(prop,prepa,publie,refuse,off, ...)_

#STATUT                                // AFFICHE LE MESSAGE EN FONCTION DE SON STATUT
```

MOTS :

```code
#ID_MOT                                // AFFICHE IDENTIFIANT DU MOT CLEF
#TITRE                                 // AFFICHE LE MOT CLEF
#DESCRIPTIF                            // AFFICHE DESCRIPTIF DU MOT CLEF
#TEXTE                                 // AFFICHE TEXTE ASSOCIER AU MOT CLEF
#TYPE                                  // AFFICHE LA CATEGORIE DANS LAQUELLE ET LE MOT CLEF
#LOGO_MOT                              // AFFICHE LOGO ASSOCIER AU MOT CLEF
#URL_MOT                               // AFFICHE URL DU MOT CLEF
```

GROUPE_MOTS :

```code
#ID_GROUPE                             // AFFICHE IDENTIFIANT DU GROUPE DE MOT
#TITRE                                 // AFFICHE TITRE DU GROUPE DE MOT
#DESCRIPTIF                            // AFFICHE DESCRIPTIF DU GROUPE DE MOT
#TEXTE                                 // AFFICHE TEXTE DU GROUPE DE MOT
```

DOCUMENT :

```code
#ID_DOCUMENT                           // AFFICHE IDENTIFIANT DU DOCUMENT
#LOGO_DOCUMENT                         // AFFICHE LE LOGO ASSOCIER AU DOCUMENT
#URL_DOCUMENT                          // AFFICHE URL DU FICHIER MULTIMEDIA [(#LOGO_DOCUMENT{#URL_DOCUMENT})]
#TITRE                                 // AFFICHE TITRE DU DOCUMENT
#DESCRIPTIF                            // AFFICHE DESCRIPTIF DU DOCUMENT
#CREDITS                               // AFFICHE CREDITS DU DOCUMENT (nom photographe, ...)
#TYPE_DOCUMENT                         // AFFICHE LE TYPE DE DOCUMENT (mp3, pdf, ...) 
#EXTENSION                             // AFFICHE L'EXTENSION DU DOCUMENT (mp3, pdf, ...)
#MEDIA                                 // AFFICHE LE TYPE DE MEDIA (image, audio, video, file)
[(#TAILLE|taille_en_octets)]           // AFFICHE SA TAILLE EN OCTET (kilooctets, mégaoctets)
#MIME_TYPE                             // AFFICHE LE TYPE MIME (image/jpeg, ...)
#DATE                                  // AFFICHE LA DATE DE PUBLICATION DU DOCUMENT 
#DISTANT                               // AFFICHE SELON QUE LE DOCUMENT EST DISTANT OU LOCAL
#FICHIER                               // AFFICHE URL RELATIVE DU DOCUMENT 
[(#FICHIER|basename)]                  // AFFICHE NOM DU DOCUMENT
[(#FICHIER|image_reduire{500})]        // PERMET REDUIRE L'IMAGE

#LARGEUR                               // DONNE UNE LARGEUR AU DOCUMENT
#HAUTEUR                               // DONNE UNE HAUTEUR AU DOCUMENT
```

SITE :

```code
#ID_SYNDIC                             // AFFICHE IDENTIFIANT DU SITE DE REFERENCE
#NOM_SITE                              // AFFICHE NOM DU SITE DE REFERENCE
#URL_SITE                              // AFFICHE URL DU SITE DE REFERENCE
#URL_SYNDIC                            // AFFICHE URL DU FICHIER DE SYNDICATION DE CE SITE
#DESCRIPTIF                            // AFFICHE DESCRIPTIF DU SITE DE REFERENCES
#LOGO_SITE                             // AFFICHE LOGO ATTRIBUE AU SITE
#ID_RUBRIQUE                           // AFFICHE IDENTIFIANT DE LA REBRIQUE QUI CONTIENT CETTE REFERENCE
#ID_SECTEUR                            // AFFICHE IDENTIFIANT DU SECTEUR QUI CONTIENT CETTE REFERENCE

#FORMULAIRE_FORUM                      // AFFICHE FORMULAIRE POUR ECRIRE AU SUJET DU SITE
#PARAMETRES_FORUM                      // [<a href="spip.php?page=forum&(#PARAMETRES_FORUM)">Répondre</a>]
```

SYNDIC_ARTICLES :

```code
#ID_SYNDIC_ARTICLE                     // AFFICHE IDENTIFIANT DE L'ARTICLES SYNDIQUES
#ID_SYNDIC                             // AFFICHE IDENTIFIANT DU SITE SYNDIQUES
#TITRE                                 // AFFICHE TITRE DE L'ARTICLES SYNDIQUES [(#TITRE*)]
#DESCRIPTIF                            // AFFICHE DESCRIPTIF DE L'ARTICLES SYNDIQUES
#URL_ARTICLE                           // AFFICHE URL DE L'ARTICLE SYNDIQUES
#DATE                                  // AFFICHE DATE DE PUBLICATION DE L'ARTICLE SYNDIQUES
#LESAUTEURS                            // AFFICHE LES AUTEURS DE L'ARTICLE SYNDIQUES
#TAGS                                  // AFFICHE TAGS DE L'ARTICLE SYNDIQUES

#NOM_SITE                              // AFFICHE NOM DU SITE SYNDIQUES CONTENANT ARTICLE
#URL_SITE                              // AFFICHE URL DU SITE SYNDIQUES CONTENANT ARTICLE
#SOURCE                                // AFFICHE NOM DE LA VERITABLE SOURCE DE L'ARTICLE
#URL_SOURCE                            // AFFICHE URL DE LA VERITABLE SOURCE DE L'ARTICLE

#RAW_DATA                              // AFFICHE PARTIE FLUX RSS DE L'ARTICLE COURANT
#RAW_DATA                              // AFFICHE AU FORMAT TABLEAU SI DECODER SOUS CETTE FORME
#RAW_DATA*                             // AFFICHE DATA BRUT (texte)
#RAW_DATA{x}                           // AFFICHE #RAW_DATA|table_valeur{x} VOIR FILTRE
#RAW_DATA{a/b}                         // AFFICHE #RAW_DATA|table_valeur{a/b} VOIR FILTRE
```

SIGNATURES :

```code
#ID_SIGNATURE                         // AFFICHE IDENTIFIANT DU MESSAGE
#ID_ARTICLE                           // AFFICHE IDENTIFIANT ARTICLE POUR CETTE PETITION
#DATE                                 // AFFICHE DATE DE PUBLICIATION
#MESSAGE                              // AFFICHE TEXTE DU MESSAGE
#NOM_EMAIL                            // AFFICHE NOM AUTEUR MESSAGE
#EMAIL                                // AFFICHE EMAIL AUTEUR MESSAGE
#NOM_SITE                             // AFFICHE NOM DU SITE WEB INDIQUE PAR AUTEUR
#URL_SITE                             // AFFICHE URL DU SITE WEB INDIQUE PAR AUTEUR
```

HIERARCHIE :

```code
voir balise rubrique
```

DATA :

```code
VOIR UTILISATION PLUS EN DETAIL https://www.spip.net/fr_article5444.html ET https://www.spip.net/fr_article5443.html
```

COMMUN :

```code

_balisesDéfiniesALaConfiguration_

#NOM_SITE_SPIP                         // AFFICHE NOM DU SITE SPIP
#URL_SITE_SPIP                         // AFFICHE URL DU SITE SPIP #URL_SITE_SPIP/hello.php
#DESCRIPTIF_SITE_SPIP                  // AFFICHE DESCRIPTIF DU SITE SPIP
#EMAIL_WEBMASTER                       // AFFICHE EMAIL DU WEBMASTER
#LOGO_SITE_SPIP                        // AFFICHE LOGO DU SITE
#CHARSET                               // AFFICHE JEUX DE CARACTERE UTILISE
#LANG                                  // AFFICHE LA LANG DU SITE
#LANG_DIR, #LANG_LEFT, #LANG_RIGHT     // AFFICHE SENS DE LECTURE

#MENU_LANG                             // FABRIQUE UN MENU DE CHOIX DE LANG

_balisesMiseEnPage_

#CHEMIN{mon_style.css}                 // AFFICHE LE CHEMIN JUSQU'AU FICHIER VOULU
#PUCE                                  // AFFICHE UNE PUCE
#FORMULAIRE_ADMIN                      // AFFICHE LES BALISES (RECALCULER PAGE, ...)
#DEBUT_SURLIGNE, #FIN_SURLIGNE         // COLORIE LES MOTS CLEFS  
#INSERT_HEAD                           // PERMET D'AJOUTER CONTENU ET PLUGIN DANS <head></head>

_balisesTechniques_

#REM                                   // PERMET D'ECRIRE UN COMMENTAIRE SPIP (non affiché)

#SELF                                  // spip.php?article25&var_mode=recalcul la balise #SELF retournera : spip.php?article25
#URL_PAGE                              // #URL_PAGE{other} renvoie vers la page other.html
#URL_PAGE{toto,id_article=#ID_ARTICLE} // Génèrera l’url spip.php?page=toto&id_article=XXX

#ENV                                   // la balise #ENV est filtrée par htmlspecialchars
[(#ENV{xxxx,zzzz})]                    // AFFICHE VARIABLE ENVIRONNEMENT NOMMEE XXXX ou ZZZZ si XXXX n'existe pas
<B_name(AUTEURS) {nom == #ENV{lettre,^A}}> // AFFICHE AUTEURS QUI COMMENT PAR UN "A"

#SET{variable,valeur}                  // AFFECTE UN NOM A UNE VALEUR DANS SPIP
#SET{xxx,yyy}                          // XXX(name_Variable) = YYY(valeur_Variable)
#GET{variable}                         // PERMET DE RECUPERER LA VALEUR STOCKER DANS UNE VARIABLE
#GET{xxx}                              // RECUPERE LA VALEUR DE 'XXX' QUI EST 'YYY'

#HTTP_HEADER{argument}                 // PERMET DE MODIFER ENTETE HTTP DE LA PAGE
#VAL{valeur}                           // AFFICHE VALEUR ENTRE ACCOLADE "valeur"
#CONST{nom_de_constante}               // AFFICHE CONSTANTE ENTRE ACCOLADE "nom_de_constante"
#EVAL{2+2}                             // AFFICHE LE CALCUL DES EXPRESSION PHP ENTRE ACCOLADE "4"
#CACHE{temps}                          // DETERMINE LE DELAI(24*3600) AU BOUT DUQUEL LE SQUELLETTE DOIT ETRE REINTERPRETER 
#SQUELETTE                             // AFFICHE CHEMIN DU SQUELETTE
```

</details>

<a id="typeBalise"></a><details><summary>TYPE FILTRE</summary>

DATE :

```code
Les filtres suivants s’appliquent aux dates ([(#DATE|filtre)]

|affdate                               // AFFICHE SOUS FORME DE TEXT (13 janvier 2001)
|affdate{'Y-m'}                        // AFFICHE SOUS FORME NUMERIQUE (2001-01)
|affdate{'saison'}                     // AFFICHE SAISON

|affdate_jourcourt                     // AFFICHE NOM MOIS ET JOUR NUMERIC (3 mars)
|affdate_court                         // AFFICHE NOM MOIS ET JOUR NUMERO (3 mars)
|affdate_mois_annee                    // AFFICHE NOM MOIS ET ANNEES (mars 2003)

|affdate_heure                         // AFFICHE DATE SUIVIE DE L'HEURE (3 Avril 2005 à 20h00min)
|jour                                  // AFFICHE LE JOUR EN NOMBRE (16)
|mois                                  // AFFICHE MOIS EN NOMBRE (3)
|annee                                 // AFFICHE ANNEES EN NOMBRE (2022)
|heures                                // AFFICHE HEURE D'UNE DATE (5h)
|minutes                               // AFFICHE MINUTES D'UNE DATE (50)
|secondes                              // AFFICHE SECONDES D'UNE DATE (30)
|saison                                // AFFICHE SAISON D'UNE DATE (hiver)

|unique                                // AFFICHE SEULEMENT SI LA VALEUR EST UNIQUE
```

TEXTE :

```code
Les filtres suivants s’appliquent aux dates ([(#TEXTE|filtre)]

|liens_ouvrants                       // LE LIEN REDIRIGE VERS UN NOUVELLE FENETRE DE NAVIGATION

|supprimer_numero                     // SUPPRIME LES NUMEROS {par num titre} (5. titre)
|PtoBR                                // SUPPRIME LES SAUTS DE PARAGRAPHE EN PASSAGE DE LIGNE
|supprimer_tags                       // SUPPRIMEE TOUT LES BALISES <...>
|textebrut                            // SUPPRIMEE TOUT LES BALISES <...> EN LES REMPLACANT PAR DES SAUT DE LIGNE

|texte_backend                        // TRANSFORME UN TEXTE POUR RENDRE COMPATIBLE AVEC FLUX XML
|taille_en_octets                     // TRANSFORME LE NOMBRE D'OCTETS(25678906) EN (24.4 Mo)

|couper{80}                           // COUPE UN TEXTE APRES UN CERTAIN NOMBRE DE CARACTERE
|lignes_longues{80}                   // COUPE UN MOT TROP LONG APRES UN CERTAIN NOMBRE DE CARACTERE

[(#TITRE|match{toto})]                // AFFICHE TITRE/TEXTE AYANT POUR MOT OU EXPRESSION REGULIERE
[(#TEXTE|replace{au temps,autant})]   // REMPLACE DES MOTS DU TEXTES PAR D'AUTRES                          
```

LOGO :

```code
#LOGO|fichier                         // AFFICHE LE NOM DU FICHIER CORRESPONDANT AU LOGO
#LOGO|hauteur                         // AFFICHE HAUTEUR DU LOGO
#LOGO|largeur                         // AFFICHE LARGEUR DU LOGO
#LOGO|image_reduire                   // AFFICHE TAILLE DE IMAGE REDUITE
#LOGO|image_reduire{largeur,hauteur}  // AFFICHE TAILLE MAXIMALE DE L'IMAGE
```

MATHEMATIQUE :

```code
#COMPTEUR_BOUCLE|plus{10}              // AFFICHE NOMBRE DE BOUCLE PLUS 10
#COMPTEUR_BOUCLE|moins{xx}             // AFFICHE NOMBRE DE BOUCLE MOINS 10
#COMPTEUR_BOUCLE|mult{xx}              // AFFICHE NOMBRE DE BOUCLE MULTIPLIER 10
#COMPTEUR_BOUCLE|div{xx}               // AFFICHE NOMBRE DE BOUCLE DIVISER 10 APRES VIRGULE
#COMPTEUR_BOUCLE|modulo{xx}            // AFFICHE NOMBRE DE BOUCLE RESTE DE LA DIVISION 10

#COMPTEUR_BOUCLE|alterner{a,b,c,...}   // AFFICHE ELEMENT DE MANIERE ALTERNER EN FONCTION D'UN ELEMENT (bg, class, ..)

<BOUCLE_lesarticles(ARTICLES) {par titre}>
   <li style="background: [(#COMPTEUR_BOUCLE|alterner{'white','yellow'})]">#TITRE</li>
</BOUCLE_lesarticles>
```

TEST :

```CODE
|oui                                  // PERMET DE RETOURNER UN ELEMENT NON VIDE (MET UN ESPACE) TRUE
|non                                  // PERMET DE RETOURNER UN ELEMENT VIDE MEME SI CONTENU FALSE

_sisinon_

[(#TEXTE|?{#TEXTE,"pas de texte"})]   // AFFICHE ELEMENT SI NON-VIDE, SINON AFFICHE CELA "pas de texte"
|?{vrai,faux}

[(#TEXTE|sinon{"pas de texte"})]      // AFFICHE ELEMENT SI NON-VIDE, SINON AFFICHE CELA "pas de texte"
|sinon

_condition_

[(#CHAPO|et{#TEXTE})]                 // PERMET DE VERIFIER QUE LES DEUX CONNDITION SONT TRUE
|et

[(#CHAPO|ou{#TEXTE})                  // PERMET DE VERIFIER QUE L'UNE DES CONTIONS EST TRUE
|ou

[(#CHAPO|xou{#TEXTE})                 // PERMET DE VERIFIER QUE UN OU LES DEUX ELEMENT SONT TRUE
|xou

[(#CHAPO|=={"true"})
|=={valeur}                           // VERIFIERA QUE LA VALEUR ET EGAL
|>{valeur}                            // VERIFIERA QUE LA VALEUR ET INFERIEUR
|>={valeur}                           // VERIFIERA QUE LA VALEUR ET INFERIEUR OU EGAL
|<{valeur}                            // VERIFIERA QUE LA VALEUR ET SUPERIEUR
|<={valeur}                           // VERIFIERA QUE LA VALEUR ET SUPERIEUR OU EGAL


```

LANG :

```CODE
#LANG|traduire_nom_langue{fr}           // TRADUIT français
```

</details>

---

### <ins>SPIP : 5. ADVANCED FUNCTIONS <a id="advanced"></a>
