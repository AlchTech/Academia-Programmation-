// 1) DOM retarde l'exécution [Si HTML non chargé]
// Permet d'attendre que le site finisse de se charger avant execution.
window.onload = function () {
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// 2) DOM Associer élément à une variable
	// Permet de récuperer l'élément choisit.

	// Option I
	let nomID = documents.getElementById('nomID'); // Récupére ID
	let nomClass = documents.getElementsByClassName('nomClass'); // Récupére Class
	let nomBalise = documents.getElementsByTagName('nomBalise'); // Récupére Balise
	let nomattribut = documents.getElementsByName('nomAttribut'); // Récupére attribut
	console.log(nomVariable); // Permet de voir les élément récupérer dans la console

	// Option II [Favorite]
	let nomVariable = document.querySelector('#id'); // Récupére ID
	let nomVariable = document.querySelector('#id p.article > a'); // Récupére premiere élément déclarer
	let nomVariable = document.querySelectorAll('.class'); // Récupére les élément Class
	let nomVariable = document.querySelectorAll('Element'); // Récupére tous les éléments déclarer
	let nomVariable = document.querySelectorAll('Element[attribut]'); // Récupére l'attribut des éléments
	console.log(nomVariable); // Permet de voir les élément récupérer dans la console

	// A partir d'un autre élément
	let main = document.querySelector('#main'); // Déclare la racine (main)	soit (main)
	let children = main.children; // Selectionne l'enfant de racine(main) soit (p)
	let parent = main.parent; // Selectionne le parent de racine(main) soit (parent)
	let suivant = main.next; // Selectionne l'éléments frére suivant de racine (main) soit (next)
	let precedent = main.previous; // Selectionne l'éléments frére précédent de racine (main) soit (previous)

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 3) DOM Création et Ajout d'élément / Attribut / Style dans le DOM

	// Création d'élément HTML
	const creationElement = document.createElement('nomElement'); // Créer un nouvelle élément.
	// Option I [Favorite]
	document.querySelector('body').appendChild(creationElement); // Place l'élément parent dans le DOM(body)
	// Option II
	const variableParent = document.querySelector('body'); // Associe élément du DOM avec une variable
	variableParent.appendChild(createElement); // puis dit que createElement sera enfant de variableParent

	// Création et ajoute d'élément multiple
	const elementParent = document.createElement('nomElement'); // Créer un nouvelle élément
	elementParent.innerHTML = '<p>Exemple :</p>'; // Créer un élément p dans élémentParent
	elementParent.innerHTML += '<br>'; // Ajoute d'autre élément
	elementParent.innerHTML += '<p>Voici un exemple multiligne</p>'; // Ajoute d'autre élément
	document.querySelector('body').appendChild(elementParent); // Place l'élément parent dans le DOM(body)

	// Création et Ajout d'élément HTML et Textuel à partir d'un autre élément
	// HTML et Textuel :
	elementParent.innerHTML = '<balise>texte</balise>'; // Créer élément HTML et textuel.
	elementParent.textContent = 'texte'; // Créer du texte à l'élément.
	elementParent.appendChild(createTextNode('texte')); // Créer du texte à l'élément.
	// Identifiant Unique ID :
	elementParent.id = 'nomID'; // 	Créer un ID
	// Class :
	elementParent.classList.add('nomNouvelleClass'); // Ajoute une nouvelleClass à l'élément
	elementParent.classList.contains('nomClass'); // Retourne True si la Class existe
	elementParent.classList.replace('ancienClass', 'nouvelleClass'); // Remplace une Class par un autre Class
	elementParent.classList.remove('nomClass'); // Supprime le nom la Class
	// Attribut :
	elementParent.setAttribute('nomattribut', 'valeur'); // Créer un attribut
	elementParent.setAttribute('nomattribut', 'nouvelleattribut'); // change le type de l'attribut
	elementParent.setAttribute('nomValeur', 'nouvelValeur'); // change la valeur de l'attribut
	// Style :
	elementParent.style.nomdustylecss = 'valeur'; // Créer un élément style
	elementParent.style = 'nomdustyle:valeur; nomdustyle:valeur;'; // Créer des éléments style

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//: 4) Parentage et positionnement à d'autres éléments.

	// Enfant :
	elementParent.appendChild(elementEnfant); // L'elementEnfant deviendra l'enfant de l'elementParent.
	elementParent.removeChild(elementEnfant); // Supprimera elementEnfant de elementParent.
	elementParent.replaceChild(elementARemplacer, nouvelleElement); // Remplacera elementEnfant par nouvelleElement.

	// Placement :
	elementParent.insertBefore(elementAAjouter, elementEnfant); // Insertion elementAAjouter avent l'elementEnfant.
	elementParent.insertAdjacentHTML(position, elementAAjouter); // Insertion de l'élément HTML à la position choisit
	elementParent.insertAdjacentText(position, elementAAjouter); // Insertion de l'élélent Text à la position choisit
	elementParent.insertAdjacentElement(position, elementAAjouter); // Insertion de d'élément déja dans le DOM à la position choisit
	// Position Possible :
	// beforebegin														// Avent que l'élémentEnfant commence
	// afterbegin														// Après que l'élémentEnfant commence
	// beforeend														// Avent que l'élémentEnfant finisse
	// afterend															// Après que l'élémentEnfant finisse
};
