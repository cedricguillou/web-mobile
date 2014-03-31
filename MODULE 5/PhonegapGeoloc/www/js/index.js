// nos variables globales: googleMap et marqueur
// évite de les recréer à chaque fois et permet donc d'éviter le scintillement
// du au rafraichissement à chaque nouvelle position
var gMap, mapMarker;

function geoSuccess( position ) {

    // récupération de la position
    var cLat = position.coords.latitude;
    var cLon = position.coords.longitude;

    // création de l'objet LatLng nécessaire 
    // à partir de ces coordonnées
    var cPos = new google.maps.LatLng( cLat, cLon );

    // si map != null: la carte a déjà été créée et affichée
    // simplement mettre à jour son centrage et la position du marqueur
    if ( gMap != null ) {

        gMap.panTo( cPos );
        mapMarker.setPosition( cPos );

    } else { // sinon configurer et créer la nouvelle carte, ainsi que le marqueur

         var mapOptions = {
            zoom: 20,
            center: cPos,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // gMap est déclarée au début du fichier, comme variable globale
        // lui assigner une nouvelle carte
        gMap = new google.maps.Map( document.getElementById( 'gMap' ), mapOptions );
        // puis s'affranchir de l'angle par défaut
        gMap.setTilt(0);

        // créer enfin le marqueur à la position courante
        mapMarker = new google.maps.Marker({
            position: cPos,
            icon: 'img/custom_marker.png'
        });
        // puis l'afficher sur la carte précédemment créée
        mapMarker.setMap( gMap );

    } // EO  if ( gMap )
    
} // EO geoSuccess()

function geoError( error ) {
    
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
    
} // EO geoError()

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        // Régler le problème de la bar de statut sous iOS 7
        // le plugin org.apache.cordova.statusbar a été installé en ligne de commande
        StatusBar.overlaysWebView(false);
        // ou bien la supprimer complètement
        //StatusBar.hide();
       
        // tester le support de la géoloc
        // NOTE: le plugin cordova geolocation doit être installé       
        if ( navigator.geolocation ) {

            var geo = navigator.geolocation;

            var geoOptions = {
                timeout: 10000,
                maximumAge: 200,
                enableHighAccuracy: true
            };

            gMap = null;
            mapMarker = null;

            geo.watchPosition( geoSuccess, geoError, geoOptions );

        } else {
            alert( "Sorry, Geolocation is not supported");
        }

    }
};
