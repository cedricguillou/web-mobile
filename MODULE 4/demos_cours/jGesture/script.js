function msg( message ) {
	document.getElementById("console").innerHTML = "> " + message;
}

function addMsg( message ) {
	var display = document.getElementById("console");
	var curMsg = display.innerHTML;
	var newMsg = curMsg + "<br/> > " + message;
	display.innerHTML = newMsg;
}

function logObj( obj ) {

	var output = " ----- object: " + obj + "<br>";

	for (i in obj) {
		output += "<span style='color: red;'>" + i + ": </span>" + obj[i] + "<br/>";
	}

	addMsg( output );

}

$(document).ready(function(){

	msg("document ready");

	var area = $("#playArea");

	var colors = ["red", "blue", "green"];
	var curColor = 0;

	$("#square").css("background-color", colors[0]);

	// area.bind("swipeone", function(e){
	// 	curColor = ( curColor == colors.length-1 ) ? 0 : curColor+1;
	// 	$("#square").css("background-color", colors[curColor]);
	// });

	area.bind("swipeleftup swipeleftdown", function(el, ev){
		curColor = ( curColor == colors.length-1 ) ? 0 : curColor+1;
		$("#square").css("background-color", colors[curColor]);
	});

	area.bind("swiperightup swiperightdown", function(el, ev){
		curColor = ( curColor ==  0 ) ? colors.length-1 : curColor-1;
		$("#square").css("background-color", colors[curColor]);
	});

	area.bind("pinch", function(el, ev){
		//logObj(ev);
		//addMsg("scale: " + ev.scale);
		var width0 = $("#square").width(); 
		var newWidth = width0 * ev.scale;
		var height0 = $("#square").height(); 
		var newHeight = height0 * ev.scale;

		if ( newWidth > 10 && newHeight > 10 && newWidth < area.width()-60 && newHeight < area.height()-60 ) {
			$("#square").width(newWidth);
			$("#square").height(newHeight);
		}
		
	});

	area.bind("rotate", function(el, ev){
		//logObj(ev);
		var rotation = ev.rotation;
		//addMsg("rotation: " + ev.rotation);

		$("#square").css("transform", "rotate("+rotation+"deg)");	
		
	});


});