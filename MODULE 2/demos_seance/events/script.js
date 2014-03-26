document.getElementById('monBouton').onclick = function(e){
    alert(e.type + " aux coordonnées: " +e.clientX + " " + e.clientY);
}

document.getElementById('monLien').onclick = function(e){
    console.log("salut");
    return false;
}

function doIt() {
    var msg = "salut";
    alert(msg);
}