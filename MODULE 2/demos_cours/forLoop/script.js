for ( 
		var i=0, j=100, k=50; 
		(i<j) && (j>k); 
		i++, j--, k++ ) 
{
	console.log("i", i, "j", j, "k", k);
	console.debug("i", i, "j", j, "k", k);
	console.info("i", i, "j", j, "k", k);
	console.error("i", i, "j", j, "k", k);
	console.warn("i", i, "j", j, "k", k);

}
console.log("sortie de boucle");

var t = ['a', 'b', 'c', 'd'];

for ( i in t ) {
	console.log(i, t[i]);
}