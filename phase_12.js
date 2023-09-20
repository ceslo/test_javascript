var tab = [];
var x;
var s = 0;
while (x != 0) {
  var x = parseInt(window.prompt("Entrez une valeur"));
  var nb = tab.push(x);
  s = (x+s);
}
var m = (s/(nb-1));

document.getElementById("tableau").innerHTML = tab;
document.getElementById("nombre").innerHTML = "Le nombre de valeurs saisies est "+nb;
document.getElementById("somme").innerHTML = "La sommes des valeurs du tableau est "+s;
document.getElementById("moyenne").innerHTML = "La moyenne des valeurs du tableau est "+m;


