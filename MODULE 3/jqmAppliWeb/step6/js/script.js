$(document).ready(function(){

	// récupérer les données via le service Web
	// (simulé par le fichier magasins.json )

	$.getJSON( "magasins.json", function(magasins){

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


	$(document).on("pageshow", "[data-role='page']", function(){

		// titre du header dynamique
		$(this).find("h1").text($(this).jqmData("title"));

		// activation du lien actif dans le footer
		var currentPageId = $(".ui-page-active").attr("id");

		$(".ui-btn-active").removeClass('ui-btn-active');

		$("[data-role = 'footer'] a").each(function(){
			if ( $(this).attr("href") === '#'+currentPageId ) {
				$(this).addClass('ui-btn-active');
			}
		})
	});

});