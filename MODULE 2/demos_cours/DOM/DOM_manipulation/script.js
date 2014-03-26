// récupérer un élément du DOM
var paragraphe = document.getElementById("paragraphe");
//console.log(paragraphe);

// // manipuler un attribut
paragraphe.setAttribute("align", "right");

// innerHTML
var titre1_elemt = document.getElementById("titre1");
//console.log("Noeud texte du titre1:", titre1_elemt.innerHTML); // noeud texte

var contenu_elemt = document.getElementById("contenu");
//console.log("contenu.innerHTML: ", contenu_elemt.innerHTML); // pas un noeud texte!

// Création et ajout d'un nouvel élément

   Avec innerHTML
var newListItem1 = document.createElement("li");

newListItem1.innerHTML = "<a href='#'>Item4</a>";
console.log(newListItem1);
document.getElementById("liste").appendChild(newListItem1);

   meilleure solution -> createTextNode
var newListItem2 = document.createElement("li");
var listItemTextNode = document.createTextNode("Item5");
newListItem2.appendChild(listItemTextNode);
document.getElementById("liste").appendChild(newListItem2);

   // insertBefore
var newListItem3 = document.createElement("li");
var listItemTextNode = document.createTextNode("Item1 - bis");
newListItem3.appendChild(listItemTextNode);
var liste = document.getElementById("liste");
var listItem2 = liste.getElementsByTagName("li")[1];
liste.insertBefore(newListItem3, listItem2);
