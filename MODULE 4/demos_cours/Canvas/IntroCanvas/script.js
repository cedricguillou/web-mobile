window.onload = function() {

	var leCanvas = document.getElementById('leCanvas');

	leCanvas.width = 500;
	leCanvas.height = 200;

	// Dessin

	var context = leCanvas.getContext('2d');
	if ( context != null ) {
		context.fillStyle = "blue";
		context.fillRect(0,0,context.canvas.width, context.canvas.height);
	}
}