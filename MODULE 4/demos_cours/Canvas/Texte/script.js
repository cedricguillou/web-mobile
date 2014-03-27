

window.onload = function() {

	var leCanvas = document.getElementById('leCanvas');
	var ctx = leCanvas.getContext('2d');
	
	
	if ( ctx ) {

		ctx.font = "40pt Arial, Georgia";
		ctx.fillStyle = "red";
		ctx.strokeStyle = "black"
		ctx.lineWidth = 2;
		ctx.textAlign = "start";
		ctx.textBaseline = "bottom";

		var text = "Texte d'exemple";
		ctx.fillText(text, 100, 100);
		ctx.strokeText(text, 100, 100);

		console.log("measureText", ctx.measureText(text));

	}
	
}