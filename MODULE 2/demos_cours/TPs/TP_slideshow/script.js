window.onload = function() {

	//console.log("loaded");

	var images = [ "images/001.jpg", "images/002.jpg", "images/003.jpg", "images/004.jpg" ];

	var imageIndex = 0;

	var slideImg = document.getElementById("slideImg");

	function imageSuivante() {

		imageIndex++;

		if ( imageIndex >= images.length ) {
			imageIndex = 0;
		}

		slideImg.setAttribute( "src", images[imageIndex] );

	}

	var interval = setInterval( imageSuivante, 2000 );

	slideImg.onclick = function() {
		clearInterval(interval);
		alert("arrêt du slideshow");
	}

	window.onkeypress = function() {
		var interval = setInterval( imageSuivante, 2000 );
	}

}