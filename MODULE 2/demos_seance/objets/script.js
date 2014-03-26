var cedric = { nom: 'GUILLOU', prenom: 'Cedric', age: 30 };

cedric.secu = 3456778;

cedric.infos = function() {
    console.log("mes infos: " + this.nom + ' - ' + this.prenom );
}

cedric.nomComplet = function( ) {
    this.nom_complet = this.nom + " " + this.prenom;
}

console.log(cedric);

cedric.infos();

cedric.nomComplet();

console.log(cedric);