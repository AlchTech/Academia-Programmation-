# Database

## Table des matières

 1. Telecharger [MySQL](https://dev.mysql.com/downloads/installer/)
    - Telecharger [MySQL](https://dev.mysql.com/downloads/installer/)
 2. Telecharger [MySQL](https://dev.mysql.com/downloads/installer/)
    - Telecharger [MySQL](https://dev.mysql.com/downloads/installer/)
 3. Telecharger [MySQL](https://dev.mysql.com/downloads/installer/)
    - Telecharger [MySQL](https://dev.mysql.com/downloads/installer/)
 4. Telecharger [MySQL](https://dev.mysql.com/downloads/installer/)
    - Telecharger [MySQL](https://dev.mysql.com/downloads/installer/)

---

### NoSQL

---
MongoDB est l'un des SGBDR (système de gestion de base de données relationnelle) NoSQL.

#### <ins>Installation MongoDB

- Telecharger [MongoDB](https://www.mongodb.com/products/compass)

---

### 1. SQL

---

MySQL est l'un des SGBDR (système de gestion de base de données relationnelle) SQL

#### <ins>1.0 Installation MySQL

- Telecharger [MySQL](https://dev.mysql.com/downloads/installer/)
- Installez :

```text
full -> defaut -> change password -> defaut
```

- Dans terminal :

```code
set PATH=%PATH%;<chemin_vers_mysql>/BIN
```

---

#### <ins>1.1 Connection à MySQL

- Dans Terminal

```code
MYSQL -U -ROOT -P <PASSWORD>                                    // Version courte
MYSQL --HOST=LOCALHOST --USER=ROOT -- PASSWORD=<PASSWORD>       // Version longue

SET NAME 'UTF8'                                                 // Execute à chaque connection DB

# HOST: LOCAL ou SERVER
# USER: UTILISATEUR
# PASSWORD: MOTDEPASSE
```

- Alternative

```code
Workbench
```

---

#### <ins>1.2 LANGAGE MySQL

```code
Warning : Pour informer qu'une instruction se finit il faut mettre un point virgule ;

Warning : Utilisez les simple quote ' ' pour indiquez un texte;
```

##### <ins>CREATE USER

Permet de créer un utilisateur avec des restrictions :

```code
_createUser_
CREATE USE'<NAME_USER>'@'<LOCALHOST>'IDENTIFIEDBY'<MOT_DE_PASSE>';           // Crée un utilisateur
GRANT ALL PRVILEGES ON <NAME_DB>.<TABLE(*)FORALL>TO'<USER>'@'<LOCALHOST>';   // Donne priviliege à l'user
```

##### <ins>TYPES DE DONNEES : NUMBER

Les différents types de données numeriques

| TYPE      | OCTET  | CARACTERE                                |
|:---------:|:------:|:----------------------------------------:|
| TINYINT   | 1      | -128 à 127                               |
| SMALLINT  | 2      | -32768 à 32767                           |
| MEDIUMINT | 3      | -8388608 à 8388607                       |
| INT       | 4      | -2147483648 à 2147483647                 |
| INT       | 8      | -922372036854775808 à 922372036854775807 |

```code
_numericEntier_
CREATE TABLE nameTable(

   MyBigIntColumn BIGINT,  
   MyIntColumn  INT,
   MySmallIntColumn SMALLINT,
   MyTinyIntColumn TINYINT
   
)
```

Précision : Définit le nombez total de chiffre stocké avant et après la virgule

Echelle   : Définit le nombre de chiffre après la virgule

| TYPE      | CARACTERE            |
|:---------:|:--------------------:|
| NUMERIC   | precision, echelle   |
| DECIMAL   | precision, echelle   |

```CODE
_numericDecimal_

CREATE TABLE nameTable(

   MyDecimalColumn DECIMAL(5,2),  
   MyNumericColumn NUMERIC(10,5),

)
```

Les attributs numeriques sont :

```code
CREATE TABLE nameTable(
   MyIntColumn  INT(4)UNSIGNED,                                // UNSIGNED Affichera un nombre positif
   MyIntColumn  INT(4)ZEROFILL,                                // ZEROFILL Affichera 4 chiffre min 20 = 0020
)
```

##### <ins>TYPES DE DONNEES : TEXTUEL
Les différents types de données textuelles

| TYPE      | OCTET               | CARACTERE                                |
|:---------:|:-------------------:|:----------------------------------------:|
| TINYTEXT  | 2 puissance 8       | LONGUEUR DE CHAINE + 1 OCTET             |
| TEXT      | 2 puissance 16      | LONGUEUR DE CHAINE + 2 OCTET             |
| MEDIUMTEXT| 3 puissance 24      | LONGUEUR DE CHAINE + 3 OCTET             |
| LONGTEXT  | 4 puissance 32      | LONGUEUR DE CHAINE + 4 OCTET             |

```code
CREATE TABLE nameTable(
   MyIntColumn  INT(4)UNSIGNED,                                // UNSIGNED Affichera un nombre positif
   MyIntColumn  INT(4)ZEROFILL,                                // ZEROFILL Affichera 4 chiffre min 20 = 0020
)
```

##### <ins>OTHER

```code
_commentaire_
-- COMMENTAIRE                                                  // Ceci est un commentaire
# COMMENTAIRE                                                   // Ceci est un commentaire

_specialCaractere_
\n                                                              // Retour à la ligne
\t                                                              // Tabulation
\\                                                              // Anti-slash
%                                                               // Pourcentage
-                                                               // Soulignez

_mathématique_
( x + x ) = y                                                   // Priorisation calcul
x + x                                                           // Addition
x - x                                                           // Soustraction
x * x                                                           // Multipicaltion
x / x                                                           // Division (avec virgule)
x DIV x                                                         // Division (entier)
x % x                                                           // Division (reste de la division)
```
