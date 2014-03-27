window.onload = function() {

	var leCanvas = document.getElementById('leCanvas');
	var ctx = leCanvas.getContext('2d');
	
	
	if ( ctx ) {

		// 1
		ctx.fillStyle = "blue";
		ctx.strokeStyle = "red";
		ctx.lineWidth = 5;

		ctx.fillRect(50,50,100,200);
		ctx.strokeRect(50,50,100,200);

		// save
		ctx.save();

		//2
		ctx.fillStyle = "orange";
		ctx.strokeStyle = "green";
		ctx.lineWidth = 10;

		ctx.fillRect(250,50,100,200);
		ctx.strokeRect(250,50,100,200);

		// restore
		ctx.restore();

		// 3
		ctx.fillRect(450,50,100,200);
		ctx.strokeRect(450,50,100,200);

	}
	
}