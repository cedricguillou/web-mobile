function parse(data) {

	var content = document.createElement('div');
	content.innerHTML = data;

	var entries = content.getElementsByClassName('calendar-show');

	var output = ''; 
	output += '<ul>';

	for ( var i = 0; i < entries.length; i++ ) {

		var entry = entries[i];

		var season_ep = entry.getElementsByClassName('season-ep')[0].innerHTML;
		output += '<li>';
		output += '<h4>' + season_ep + '</h4>';
		output += '</li>';

		var thumb = entry.getElementsByTagName('img')[0].src;
		output += '<img src="'+ thumb +'">';
	}

	output += '</ul>';
	document.getElementById('output').innerHTML = output;

}

window.onload = function() {

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
			parse(req.responseText);
		}
	}

	// configurer la requête
	req.open("GET", "trakt.html", true);

	// envoyer la requête
	req.send(null);
	
	
	// ************
	// avec jQuery
	// ************

	// $.get("trakt.html" , function(data) {
	// 	parse(data);
	// });


};