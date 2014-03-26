/*****/
/* DÉCLARATION, DÉFINITION, APPEL, PARAMÈTRES */ 

console.log("*****/\n/* DÉCLARATION, DÉFINITION, APPEL, PARAMÈTRES */");

// fonction déclarative avec paramètre et aucune valeur de retour
function message(msg) {
	console.log("Message: ", msg);
}

// expression de fonction avec paramètres et valeur de retour
var somme = function(a,b) {
	return a+b;
}

// paramètres dynamiques
var sommeDynamique = function() {
	var args = arguments;
	var result = 0;
	for (i in args ) {
		result += args[i];
	}
	return result;
}

// appel de la fonction somme
var maSomme1 = somme(1,2);
message("maSomme1 -> " + maSomme1);

// appel de la fonction somme avec excédant de paramètres
var maSomme2 = somme(1,2,3,4,5,6,7,8,9,10);
message("maSomme2 -> " + maSomme2);

// appel de la fonction somme avec paramètres dynamiques
var maSommeDynamique = sommeDynamique(1,2,3,4,5,6,7,8,9,10);
message("maSommeDynamique -> " + maSommeDynamique);


/*****/
/* PORTEE DES VARIABLES */

console.log("\n/*****/\n/* PORTEE DES VARIABLES */");

var globale1 = 'globale1';
var globale2 = 'globale2';

function portee() {

	var locale = "locale";
	var globale2 = "globale2BIS";

	console.log("*** portee() ***");
	console.log("globale1", globale1);
	console.log("globale2", globale2);
	console.log("locale", locale);
}

console.log("globale1", globale1);
console.log("globale2", globale2);
// console.log("locale", locale);

portee();

console.log("globale2", globale2);

/*****/
/* FONCTIONS ANONYMES */

console.log("\n/*****/\n/* FONCTIONS ANONYMES */");

(function(){
	console.log("je suis une fonction anonyme auto appelante");
})();

setTimeout(function(){
	console.log("je suis une autre fonction anonyme, déclenchée par un callback (celui de la fonction setTimeout)");
}, 500);