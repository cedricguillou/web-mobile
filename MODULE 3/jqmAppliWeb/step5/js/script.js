$(document).ready(function(){

	// récupérer les données via le service Web
	// (simulé par le fichier magasins.json )
	$.ajax({
		type: "GET", // par défaut
		url: "magasins.json",
		data: {}, // aucun paramètre
		dataType: "json"
	}) // EO XHRreq
	.done(function(magasins){
		console.log(magasins);
	}) // EO success callback
	.fail(function(errorData){
		console.error("!!!!! Erreur:", errorData.status);
	}); // EO error callback
	// EO $.ajax

	// Méthode simplifiée: $.get
	$.getJSON( "magasins.json", function(magasins){
		console.debug("\n***** $.get");
		console.log(magasins);

		var listview = $("#listviewMagasins");

		$.each(magasins, function(key, mag){
			
			var elemHTML = '<li><a href="#detailMagasin">';
			elemHTML += '<img src="' + mag.img + '"/>';
			elemHTML += '<h2>' + mag.nom + '</h2>';
			elemHTML += '<p>' + mag.ville + '</p>';
			elemHTML += '</a></li>';

			var elem = $(elemHTML);

			// ajouter le listener d'évènement
			// pour répondre à un clic sur l'élément de liste
			elem.click(function(){

				var content = '<img src="' + mag.img + '"/>';
				content += '<h3>' + mag.nom + '</h3>';
				content += '<p class="adresse">' + mag.adresse + '</p>';
				content += '<p class="desc">' + mag.description + '</p>';

				$("#detailMagasin > article").html(content);
			});

			// ajouter l'élément à la liste
			listview.append(elem);

		}); // EO $.each

	})
	.fail(function(errorData){
		console.error("!!!!! Erreur:", errorData.status);
	}); // EO error callback


});