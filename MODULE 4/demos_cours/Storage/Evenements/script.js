window.onload = function() {

	var db;

	if ( window.localStorage ) {
		db = window.localStorage;
	} else {
		console.error("WebStorage non supporté dans ce navigateur");
	}

	function displayDb() {

		// FILM
			// Input
		document.getElementById('filmInput').value = db.getItem('film');
			// Display
		document.getElementById('film').innerHTML = db.getItem('film');

		// REALISATEUR
			// Input
		document.getElementById('realInput').value = db.getItem('realisateur');
			// Display
		document.getElementById('realisateur').innerHTML = db.getItem('realisateur');

		// ANNEE
			// Input
		document.getElementById('anneeInput').value = db.getItem('annee');
			// Display
		document.getElementById('annee').innerHTML = db.getItem('annee');

	}

	// Listeners
	document.getElementById('dbClear').onclick = function(){
		db.clear();
		displayDb();
		return false;
	}

	document.getElementById('dbSubmit').onclick = function(){
		db.setItem('film', document.getElementById('filmInput').value);
		db.setItem('realisateur', document.getElementById('realInput').value);
		db.setItem('annee', document.getElementById('anneeInput').value);
		displayDb();
		return false;
	}

	displayDb();

	function handle_storage_event(e){
		console.log("évènement survenu à l'url:", e.url);
		console.log("key:", e.key);
		console.log("oldValue:", e.oldValue);
		console.log("newValue:", e.newValue);
		displayDb();
	}

	if (window.addEventListener) {
  		window.addEventListener("storage", handle_storage_event, false);
	} else {
  		window.attachEvent("onstorage", handle_storage_event);
	};

}