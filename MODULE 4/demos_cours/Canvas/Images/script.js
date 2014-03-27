function imageCropped( ctx ) {
	var src = document.getElementById("img")
	ctx.drawImage( src, 150, 150, 100, 100, 50, 50, 300, 300 );
}

function imageResized( ctx ) {
	var src = document.getElementById("img")
	ctx.drawImage( src, 50, 50, 500, 400 );
}

function imageSimple( ctx ) {
	var src = document.getElementById("img")
	ctx.drawImage( src, 50,50 );
}

window.onload = function() {

	var leCanvas = document.getElementById('leCanvas');
	var ctx = leCanvas.getContext('2d');
	
	
	if ( ctx ) {

		// imageSimple( ctx );

		// imageResized( ctx );

		// imageCropped( ctx );

	}
	
}