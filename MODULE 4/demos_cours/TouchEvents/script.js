function msg( message ) {
	document.getElementById("msg").innerHTML = message;
}

function addMsg( message ) {
	var display = document.getElementById("msg");
	var curMsg = display.innerHTML;
	var newMsg = curMsg + "<br/>" + message;
	display.innerHTML = newMsg;
}

window.onload = function() {

	var area = document.getElementById('playArea');

	area.ontouchstart =  function(e) {
		e.preventDefault();
		msg("*** touchstart");

		var touchedElement = e.target;
		var touchedElementId = touchedElement.getAttribute("id");

		// for ( var i = 0; i < e.touches.length; i++ ) {
		// 	addMsg( "touches[" + i + "].pageX: " + e.touches[i].pageX );
		// 	addMsg( "touches[" + i + "].pageY: " + e.touches[i].pageY );
		// }

		var touch = e.touches[0];
		var offsetX = touch.pageX - touchedElement.offsetLeft;
		var offsetY = touch.pageY - touchedElement.offsetTop;

		//addMsg("touchedElement.offsetLeft: " + touchedElement.offsetLeft + " - touch.pageX: " + touch.pageX + " - offsetX: " + offsetX);
		//addMsg("touchedElement.offsetTop: " + touchedElement.offsetTop + " - touch.pageY: " + touch.pageY + " - offsetY: " + offsetY);

		touchedElement.ontouchmove = function(e) {
			var movedElement = e.target;
			var movedElementId = movedElement.getAttribute("id");
			var posX = touch.pageX - offsetX;
			var posY = touch.pageY - offsetY;
			//msg( "touchmove: " + movedElementId + " posX: " + posX + " posY: " + posY );
			movedElement.style.left = posX + 'px';
			movedElement.style.top = posY + 'px';
		}

		touchedElement.ontouchend = function(e) {
			addMsg("*** touchend");
		}

	}
	
	// area.ontouchmove = function(e) {
	// 	msg("*** touchmove X: " + e.touches[0].pageX + " - Y: " + e.touches[0].pageY);
	// }

}