function listeVideos( data ) {
	//console.log( videos.feed.entry );

	var entries = data.feed.entry;

	var output = '';

	for ( var i=0; i<entries.length; i++ ) {

		var theEntry = entries[i];

		var id = theEntry.id.$t.substring(38);
		var title = theEntry.title.$t;
		var thumb = theEntry.media$group.media$thumbnail[0].url;
		var desc = theEntry.media$group.media$description.$t;

		var blockClass = ( ( i % 2 ) === 0 ) ? 'ui-block-a' : 'ui-block-b';

		output += '<div class="'+ blockClass +'">';
		output += '<h3 class="movie-title">' + title + '</h3>';
		var params = "'" + id + "', '" + escape(title) + "', '" + escape(desc) + "'";
		output += '<a href="#videoPlayer" data-transition="fade" onclick="playVideo(' + params + ')">';
		output += '<img src="' + thumb + '"/>';
		output += '</a>';
		output += "</div>";

	}

	$("#video-grid").html(output);



}

function playVideo(id, title, desc) {
	
	var output = "<h3>" + unescape(title) + "</h3>";
	output += '<iframe src="//www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe>';
	output += "<p>" + unescape(desc) + "</p>";

	$("#playerContent").html(output);
}

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