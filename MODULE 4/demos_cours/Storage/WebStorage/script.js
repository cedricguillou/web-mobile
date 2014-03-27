window.onload = function() {

	// Création d'un localStorage / sessionStorage
	var db;

	if ( window.localStorage ) {
		db = window.localStorage;
	} else {
		console.error("WebStorage non supporté dans ce navigateur");
	}

	// Manipulation standard
	db.setItem('film', 'Django Unchained');
	db.setItem('realisateur', 'Quentin Tarantino');
	db.setItem('annee', '2013');

	document.getElementById("film").innerHTML = db.getItem('film');
	document.getElementById("realisateur").innerHTML = db.getItem('realisateur');
	document.getElementById("annee").innerHTML = db.getItem('annee');
	

	/* Travailler avec des objets */
	var films = [];
	var film1 = { 'titre': 'Django Unchained', 'real': 'Quentin Tarantino', 'annee': 2013 };
	var film2 = { 'titre': 'Forrest Gump', 'real': 'Robert Zemeckis', 'annee': 1994 };
	films.push(film1);
	films.push(film2);
	db.setItem('films', JSON.stringify(films));

	var dbFilms = JSON.parse(db.getItem('films'));

	console.log(dbFilms);

	for ( var i = 0; i < dbFilms.length; i++ ) {
		var film = dbFilms[i];
		console.log( "*** film " + i, film.titre, film.real, film.annee);
	}

}