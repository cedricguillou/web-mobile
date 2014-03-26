var x,y,z;

function uneAutreFonction() {
	z = 100;
	y = z - 10;
	x = z * y;
}

var somme = function(a,b,c) {
	var a = a || 0;
	var b = b || 0;
	if ( c == undefined || c == null ) { 
		var c = 0;
	}
	uneAutreFonction()
	return a+b+c;
}

alert("somme: " + somme(10,5));
