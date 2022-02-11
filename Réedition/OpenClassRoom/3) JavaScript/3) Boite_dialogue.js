// boite de dialogue
// Il existe trois types de boite de dialogue, il sera necessaire de connecter son doccument Javasript
// Avec les balises HTML <script src"fichier.js"></script>

// Affichage de texte
alert("Hello world");

// Affichage d'une confirmation
if (confirm("Souhaitez-vous confirmer ?")) {
    // Si oui 
    alert("Confirmation")}
    //  Si non
    else {alert("Annulation")};

// Affichage d'une demande d'information
const age = prompt("Entrer votre âge !");
alert("Vous avez " + age + "ans");