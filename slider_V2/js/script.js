function cal() {

	var montant = Number($("#montant").val());
	var duree = Number($("#duree").val());
	var mensu = Number($("#mst").val());

	var resultat = montant + duree + mensu;

	$("#resultat").html(resultat);
	$("#mst").val(resultat);
}

$(document).ready(function(){

	cal();

});

$( document ).on( "pageinit", "#simulateur", function( event ) {

	$("#montant").change(function(){
		cal();
	});

	$("#duree").on('change', function(){
		cal();
	});

	$("#mst").on('change', function(){
		cal();
	});
		
});