function quadra( ctx ) {

	var origine = { 'x': 100, 'y': 300 };
	var c = { 'x': 400, 'y': 100 };
	var end = { 'x': 500, 'y': 300 };

	// courbe de bézier
	ctx.strokeStyle = "blue";
	ctx.lineWidth = 5;

	ctx.beginPath();
	ctx.moveTo(origine.x, origine.y);
	ctx.quadraticCurveTo(c.x, c.y, end.x, end.y);
	ctx.stroke();

	// visualiser les points de controle
	ctx.strokeStyle = "#aaa";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(origine.x, origine.y);
	ctx.lineTo(c.x, c.y);
	ctx.lineTo(end.x, end.y);
	ctx.stroke();

}

function bezier( ctx ) {

	var origine = { 'x': 100, 'y': 300 };
	var c1 = { 'x': 200, 'y': 150 };
	var c2 = { 'x': 400, 'y': 100 };
	var end = { 'x': 500, 'y': 300 };

	// courbe de bézier
	ctx.strokeStyle = "green";
	ctx.lineWidth = 5;

	ctx.beginPath();
	ctx.moveTo(origine.x, origine.y);
	ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, end.x, end.y);
	ctx.stroke();

	// visualiser les points de controle
	ctx.strokeStyle = "#aaa";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(origine.x, origine.y);
	ctx.lineTo(c1.x, c1.y);
	ctx.lineTo(c2.x, c2.y);
	ctx.lineTo(end.x, end.y);
	ctx.stroke();

}

function circleAndDegrees( ctx ) {

	ctx.strokeStyle = "black";
	ctx.fillStyle = "red";
	ctx.lineWidth = 5;

	var degres = 360; 
	var rads = ( Math.PI / 180 ) * degres;

	ctx.beginPath();

	// arc1
	ctx.arc(200,150,100, 0, rads, false);

	ctx.stroke();
	ctx.fill();

	// centre
	ctx.strokeRect(200,150,2,2);

}

function arc1( ctx ) {

	ctx.lineWidth = 5;

	ctx.beginPath();

	// centre
	ctx.strokeRect(200,150,2,2);

	// arc1
	ctx.arc(200,150,100, 1.5 * Math.PI, 2 * Math.PI, false);
	ctx.stroke();

	// arc2
	ctx.strokeStyle = "red";
	ctx.beginPath();
	ctx.arc(200,150,100, 1.5 * Math.PI, 0, true);
	ctx.stroke();

}

function traceRempli( ctx ) {

	ctx.strokeStyle = "black";
	ctx.fillStyle = "red";
	ctx.lineWidth = 5;

	ctx.beginPath();
	ctx.moveTo(200,200);
	ctx.lineTo(250,250);
	ctx.lineTo(300,200);
	ctx.lineTo(250, 150);
	ctx.fill();
	ctx.stroke();
}

function traceFerme( ctx ) {

	ctx.strokeStyle = "black";

	ctx.beginPath();
	ctx.moveTo(200,200);
	ctx.lineTo(250,250);
	ctx.lineTo(300,200);
	ctx.lineTo(250, 150);
	ctx.closePath();
	ctx.stroke();
}

function traceOuvert( ctx ) {

	ctx.strokeStyle = "black";

	ctx.beginPath();
	ctx.moveTo(200,200);
	ctx.lineTo(250,250);
	ctx.lineTo(300,200);
	ctx.lineTo(250, 150);
	ctx.stroke();
}

window.onload = function() {

	var leCanvas = document.getElementById('leCanvas');
	var ctx = leCanvas.getContext('2d');
	
	
	if ( ctx ) {

		//tracé ouvert
		//traceOuvert( ctx );

		// tracé fermé
		//traceFerme( ctx );

		// tracé rempli
		//traceRempli ( ctx );

		// arc1
		//arc1( ctx );

		// circle
		//circleAndDegrees( ctx );

		// Bézier
		bezier( ctx );

		// courbe quadratique
		quadra( ctx );

	}
	
}