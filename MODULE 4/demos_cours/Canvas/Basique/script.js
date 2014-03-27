function lineJoins( ctx ) {

		ctx.lineWidth = 15;
		ctx.strokeStyle = "black";

		ctx.lineJoin = "round";
		ctx.beginPath();
		ctx.moveTo(25,150);
		ctx.lineTo(75,50);
		ctx.lineTo(125,150);
		ctx.stroke();

		ctx.lineJoin = "bevel";
		ctx.beginPath();
		ctx.moveTo(225,150);
		ctx.lineTo(275,50);
		ctx.lineTo(325,150);
		ctx.stroke();

		ctx.lineJoin = "miter";
		ctx.beginPath();
		ctx.moveTo(425,150);
		ctx.lineTo(475,50);
		ctx.lineTo(525,150);
		ctx.stroke();

			// miterLimit
		ctx.lineJoin = "miter";
		ctx.miterLimit = 5;
		ctx.beginPath();
		ctx.moveTo(425,350);
		ctx.lineTo(475,250);
		ctx.lineTo(525,350);
		// ctx.moveTo(425,350);
		// ctx.lineTo(445,250);
		// ctx.lineTo(465,350);
		ctx.stroke();

}

function lineCaps( ctx ) {

		//guides
	ctx.strokeStyle = "#f00";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(50,25);
	ctx.lineTo(50,455);
	ctx.moveTo(590,25);
	ctx.lineTo(590,455);
	ctx.stroke();      

	      // lineCaps styles
	ctx.lineWidth = 25;
	ctx.strokeStyle = "black";

	ctx.lineCap = "butt";
	ctx.beginPath();
	ctx.moveTo(50,50);
	ctx.lineTo(590,50);
	ctx.stroke();

	ctx.lineCap = "round";
	ctx.beginPath();
	ctx.moveTo(50,100);
	ctx.lineTo(590,100);
	ctx.stroke();

	ctx.lineCap = "square";
	ctx.beginPath();
	ctx.moveTo(50,150);
	ctx.lineTo(590,150);
	ctx.stroke();

}

function lignes( ctx ) {

	for ( var i = 0; i < 10; i++ ) {
		ctx.beginPath();
		ctx.lineWidth = i + 1;
		ctx.moveTo(25,25+i*15);
		ctx.lineTo(475,25+i*15);
		ctx.stroke();
	}

}

function rectangles( ctx ) {

	// Styles et couleurs + rectangle

	ctx.fillStyle = 'orange';
	ctx.fillRect(50,100,200,75);

	ctx.lineWidth = 3;
	ctx.strokeStyle = 'rgba(100,100,200,1)';
	ctx.strokeRect(150,150,50,50);

	ctx.clearRect(100,120,20,40);

}

window.onload = function() {

	var leCanvas = document.getElementById('leCanvas');
	var ctx = leCanvas.getContext('2d');
	
	
	if ( ctx ) {

		//rectangles( ctx );

		//lignes( ctx );
		
		//lineCaps( ctx );

		//lineJoins( ctx );

	}
	
}