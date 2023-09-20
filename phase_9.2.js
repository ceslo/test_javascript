function strtok(str1, str2, n) {
  var tab = str1.split(str2);
  var mot = tab[n];
  return mot;
}

var phrase = window.prompt("entrez une phrase = str1");
var sep = window.prompt("entrez le caractère separateur = str2");
var nombre = window.prompt("entrez le numero du mot souhaité = n");
var mot = strtok(phrase, sep, nombre);
window.alert(mot);

