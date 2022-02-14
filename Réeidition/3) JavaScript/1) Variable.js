// Variable : 
// Une variable est unique à chaque code, il ne peut en contenir defois la même.
// Une variable est sensible à la CASE.

var nomvar     = valeur;           // Variable globale
let nom_var     = valeur;           // Variable locale
const no_var   = valeur;           // Variable constante [La valeur ne peut être modifier]


// Valeur :
// Permet de représenter une ou des valeurs.

// chaine de caractére
'text', "texte";

// number
0, 1, 9999;

// bool
true, false;

// Débogage :
// le débogage va nous permettre de trouvé ou il a une erreur dans notre code.
// Le point rouge est une point d'arret qui servira au débogage, il permettra de lire d'un point à l'autre
// L'onglet variable va nous permettre de voir toutes les variables du code.
// L'onglet espion permet de surveiller des variables en fesant click droit sur la variable, puis espion

// Concaténation : 
let prenom = "Jérémy"
console.log(prenom)
console.log("Bonjour " + prenom + " !")

let nom = "Salettes"
console.log("Bonjour " + prenom + " " + nom + " !")

