function anniversaire( naissance, annee ) {

	var mois_naissance = new Date(naissance).getMonth();
	// 7
	var jour_naissance = new Date(naissance).getDate();
	// 6
    
    var anniversaire = new Date( annee, mois_naissance, jour_naissance );

    var jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout'];

    var jour_anniv = jours[anniversaire.getDay()];
    var mois_anniv = mois[mois_naissance];

    console.log(jour_anniv + " " + jour_naissance + " " + mois_anniv + " " + annee);

}

console.log( anniversaire( '1983-08-06' , 2020 ) );