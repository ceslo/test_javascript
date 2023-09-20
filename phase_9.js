function afficheImg(link) {
    var element = document.getElementById("image");
    element.setAttribute("src",link)
}
function produit(x, y) {
  var r = x * y;
  return r;
}
function cube(x) {
  var r = x * x * x;
  return r;
}

afficheImg("papillon.jpg");

var n = window.prompt("Entrez un nombre");
var n2 = window.prompt("Entrez un muliplicateur");

var resultat = produit(n, n2);
var resultat2 = cube(n);

document.getElementById("cube").innerHTML = "Le cube de "+n+" est égal à "+resultat2;
document.getElementById("multiple").innerHTML="Le produit de "+n+"x"+n2+" est égal à "+resultat;
