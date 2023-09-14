var prenom;
var i = 1;
while (prenom != "") {
  prenom = window.prompt("Entrez un prénom n°" + i);
  console.log("le prénom n°" + i + " est " + prenom);
  ++i;
}

console.log("Le nombre de prénoms entrés au total est " + (i - 2));
