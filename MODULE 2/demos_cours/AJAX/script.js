var req; // la requête

// vérfification pour la compatibilité
if ( window.XMLHttpRequest ) { // Firefox, Safari, Chrome...
	req = new XMLHttpRequest();
} else if ( window.ActiveXObject ) { // IE
	req = new ActiveXObject("Microsoft.XMLHTTP"); 
}

// préparation à la réception de la réponse
req.onreadystatechange = function() {
	console.info("changement d'état de la requête ->", req.readyState);
	if ( req.readyState === 4 ) {
		console.log( "*******\n**", req.responseText, "\n*******" );
	}
}

// configurer la requête
req.open("GET", "data.json", true);

// envoyer la requête
req.send(null);