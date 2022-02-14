//  Les fonctions 
// Une fonction permet d'englober un ensemble d'instruction sous un nom.

// fonction [sans paramétre]
function nameFunc() {
    alert("hello world !")
}
nameFunc();     // Hello world !

// fonction [avec paramétre]
// Exemple I
function nameP(prenom){
    alert("Bonjour, " + prenom);
}
nameP(Nicos);   // Bonjour, Nicos

// Exemple II
function nameF(var1, var2) {
    console.log(var1 + var2);
}
nameF(5, 5.5);  // 10.5


