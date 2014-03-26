var tab = new Array(10);
console.log(tab);

tab = new Array([10]);
console.log(tab);

/* propriétés et méthodes */
tab = [0,2,45,3,45, 8];

console.log( 'original', tab );

// propriété
console.log( 'length', tab.length );

// méthodes


console.log( 'reverse', tab.reverse() ); // renvoie un nouveau tableau
console.log( 'join', tab.join( '*' ) );
console.log( 'indexOf 45', tab.indexOf(45));
console.log( 'lastIndexOf 45', tab.indexOf(45));
console.log( 'sort', tab.sort( function(a,b){ return a-b } ) ); 
console.log( 'indexOf 45', tab.indexOf(45)); // l'index de 45 est bien 4 dans le tableau trié précédemment
console.log( 'original', tab );
tab.pop();
console.log( 'pop', tab );
tab.push('pushed value');
console.log( 'push', tab );
tab.shift();
console.log( 'shift', tab );
tab.unshift('new');
console.log( 'unshift', tab );
console.log( 'slice', tab.slice(1,3) ); // de l'élément à l'index 1, jusqu'à celui à l'index 3, non compris
 
tab.splice(1, 0, "un de plus", "et encore un" ); // à partir de l'élément à l'index 1, retirer 0 valeur, 
												  // insérer "un de plus" et "et encore un"
console.log( 'splice (insert)', tab); 

tab.splice(2, 1 ); // à partir de l'élément à l'index 2, retirer une valeur
console.log( 'splice (remove)', tab); 