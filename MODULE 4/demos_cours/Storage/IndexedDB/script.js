window.onload = function() {

	var db;

	if ( window.indexedDB ) {

		var openRequest = indexedDB.open("test_v4",1);

		openRequest.onupgradeneeded = function(e) {
			console.log("Upgrading DB...");

			var db = e.target.result;

			if ( !db.objectStoreNames.contains('firstObjectStore') ) {
				db.createObjectStore('firstObjectStore');
			}

			if ( !db.objectStoreNames.contains('secondObjectStore') ) {
				db.createObjectStore('secondObjectStore');
			}

			var os;
			if ( !db.objectStoreNames.contains('films2') ) {
				os = db.createObjectStore('films2', { autoIncrement: true });
				os.createIndex('titre', 'titre', {unique:false});
			}
			

			if ( !db.objectStoreNames.contains('films3') ) {
				db.createObjectStore('films3', { keyPath: 'id' });
			}


		};

		openRequest.onsuccess = function(e){

			// Récupération de la base
			console.log("indexedDB (open) success");
			db = e.target.result;
			// db.createObjectStore('secondObjectStore'); -> renvoie une erreur: upgradeneeded seulement.

			// ajout de données
			var film1 = {
				'id': '001',
				'titre': 'Django Unchained',
				'real': 'Quentin Tarantino',
				'annee': 2013
			};

			var transaction = db.transaction('films2', 'readwrite');
			var store = transaction.objectStore('films2');
			var addRequest = store.add(film1);

			addRequest.onerror = function(e){
				console.error("Add request error", e.target.error.name);
			}

			addRequest.onsuccess = function(e) {
				console.log("Added successfully");
			}

			// lecture de données
			var transaction = db.transaction('films2', 'readonly');
			var store = transaction.objectStore('films2');
			var readRequest = store.get(1);

			readRequest.onsuccess = function(e) {
				console.log("Read success:", e.target.result);
			}

			// Curseur
			var cursor = store.openCursor();
			cursor.onsuccess = function(e){
				//console.log("---- Cursor");
				var res = e.target.result;
				if (res) {
					//console.log(res.key + ' - ', res.value);
					res.continue();
				}
			};

			// Index
			var index = store.index('titre');
			var indexReq1 = index.get('Django Unchained');
			indexReq1.onsuccess = function(e){
				//console.log("---- Index UNIQUE");
				var res = e.target.result;
				if (res) {
					//console.log(res);
				}
			};
			var cursor2 = index.openCursor('Django Unchained');
			cursor2.onsuccess = function(e){
				console.log("---- Index + Cursor");
				var res = e.target.result;
				if (res) {
					console.log(res.key + ' - ', res.value);
					res.continue();
				}
			};

			// Update
			var updateTransaction = db.transaction('films3', 'readwrite');
			var updateStore = updateTransaction.objectStore('films3');
			var filmUpdate = {
				'id': '001',
				'titre': 'Django Unchained',
				'real': 'Q. Tarantino',
				'annee': 2013
			};
			updateStore.put(filmUpdate);

			// Delete
			var deleteTransaction = db.transaction(["films3"], "readwrite");
			var request = deleteTransaction.objectStore("films3").delete('001');

		}; // EO openRequest.onsuccess

		openRequest.onerror = function(e){
			console.error("indexedDB (open) error");
			console.error(e);
		};

	} else {
		console.error( "IndexedDB non supporté par le navigateur");
	}



}