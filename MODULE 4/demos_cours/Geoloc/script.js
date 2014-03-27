function getGeolocation(){
	try {
		if ( navigator.geolocation ) {
			return navigator.geolocation;
		} else {
			return undefined;
		} 
	}
	catch(e) {
		return undefined;
	}
}

function displayCoord( position ) {

	//console.log(position);

	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var timestamp = new Date(position.timestamp);

	document.getElementById("latitude").innerHTML = lat;
	document.getElementById("longitude").innerHTML = lon;
	document.getElementById("timestamp").innerHTML = timestamp;

}

function geolocError( error ) {
	
	//console.log(error);

	switch( error.code ) {
		case error.TIMEOUT:
			alert("Geolocation TIMEOUT");
			break;
		case error.POSITION_UNAVAILABLE:
			alert("Geolocation POSITION_UNAVAILABLE");
			break;
		case error.PERMISSION_DENIED:
			alert("Geolocation PERMISSION_DENIED");
			break;
		default:
			alert("Geolocation error. code: " + error.code);
	}
}

function init(){
	if (geo = getGeolocation()) {
		
		console.info("L'API de géolocalisation est disponible.");

		//geo.getCurrentPosition( displayCoord, geolocError );

		var options = {
			timeout: 30000,
			maximumAge: 1*60*1000,
			enableHighAccuracy: true
		}
		geo.watchPosition( displayCoord, geolocError, options );

	} else {
		console.error("L'API de géolocalisation n'est pas supportée.");
	}
}

window.onload = function(){
	init();
}



