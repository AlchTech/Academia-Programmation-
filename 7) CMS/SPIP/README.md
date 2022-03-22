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
<BOUCLE_documents(DOCUMENTS){critères...}></BOUCLE_documents>   // RECUPERE LES DOCUMENTS ECRIT SUR SPIP
<BOUCLE_sites(SITES){critères...}></BOUCLE_sites>               // RECUPERE LES SITES ECRIT SUR SPIP
<BOUCLE_syndic(SYNDIC_ARTICLES){critères...}></BOUCLE_syndic>   // RECUPERE LES SYNDIC_ARTICLES ECRIT SUR SPIP
<BOUCLE_signatures(SIGNATURES){critères...}></BOUCLE_signatures>// RECUPERE LES SIGNATURES ECRIT SUR SPIP
<BOUCLE_hierarchie(HIERARCHIE){critères...}></BOUCLE_hierarchie>// RECUPERE LES HIERARCHIE ECRIT SUR SPIP
<BOUCLE_data(DATA){critères...}></BOUCLE_data>                  // RECUPERE LES DATA ECRIT SUR SPIP
<BOUCLE_test(CONDITION){critères...}></BOUCLE_test>             // RECUPERE LES CONDITION ECRIT SUR SPIP
```

</details>

<a id="typeCritere"></a><details><summary>TYPE CRITERE</summary>

#### <ins>SPIP : 4.2 TYPE DE CRITERE

```CODE
ARTICLE :

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

_classementCommun_

{par date}                          // AFFICHE PAR DATE A PARTIR DE LA PLUS ANCIENNE
{par titre}                         // AFFICHE PAR TITRE ORDRE ALPHANUMERIQUE
{par ...}                           // AFFICHE EN FONCTION DU CRITERE CHOISIT (auteur, ...)
{par hasard}                        // AFFICHE PAR ORDRE ALEATOIRE
{par date, titre}                   // AFFICHE PAR DATA PUIS PAR TITRE
{par popularite}                    // AFFICHE PAR POPULARITE 

{!par ...}                          // AFFICHE PAR ORDRE INVERSE DU PLUS RECENT AUX PLUS ANCIENT
{inverse}                           // AFFICHE PAR ORDRE INVERSE DU PLUS RECENT AUX PLUS ANCIENT

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

<a id="typeBalise"></a><details><summary>TYPE BALISE</summary>

#### <ins>SPIP : 4.3 TYPE DE BALISE

```code
ARTICLE :

#TITRE                              // AFFICHE TITRE
#SURTITRE                           // AFFICHE SURTITRE
#SOUSTITRE                          // AFFICHE SOUS-TITRE
#CHAPO                              // AFFICHE LE TEXTE D'INTRODUCTION
#DESCRIPTIF                         // AFFICHE LE DESCRIPTIF
#INTRODUCTION                       // AFFICHE INTRODUCTION
#TEXTE                              // AFFICHE TEXTE
#LESAUTEURS                         // AFFICHE LES AUTEURS DE CETTE ARTICLE AVEC LIEN VERS PAGE AUTEUR
#PS                                 // AFFICHE POST-SCRIPTUM
#NOTES                              // AFFICHE LES NOTES DE BAS DE PAGE

#PETITION                           // AFFICHE UNE PETITION
#FORMULAIRE_SIGNATURE               // CREER UN FORMULAIRE PERMETTANT DE SIGNER PETITION
#FORMULAIRE_SITE                    // DANS BOUCLE RUBRIQUE PERMET AJOUTER DES REFERENCE VISITEUR
#FORMULAIRE_FORUM                   // CREER UN FORMULAIRE PERMETTANT D'ECRIRE UN COMMENTAIRE
#FORMULAIRE_RECHERCHE               // CREER UN FORMULAIRE DE RECHERCHE SPIP
#PARAMETRES_FORUM                   // ???
#FORMULAIRE_ECRIRE_AUTEUR           // CREER UN FORMULAIRE POUR ECRIRE A L'AUTEUR
#FORMULAIRE_INSCRIPTION             // CREER UN FORMULAIRE D'INSCRIPTION Configuration → Interactivité 
 #FORMULAIRE_LOGIN                  // CREER UN FORMULAIRE DE CONNECTION


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

</details>

---

### <ins>SPIP : 5. ADVANCED FUNCTIONS <a id="advanced"></a>
