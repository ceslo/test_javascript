var age;
var x = 0;
var y = 0;
var z = 0;
do  {
    age = window.prompt("Entrez l'âge de la personne ici")
    if (age < 20) {
    var x = x + 1;
  } else if (age >= 20 && age <= 40) {
    var y = y + 1;
  } else {
    var z = z + 1;
  }
}
  while (age < 100);


  document.getElementById("part1").innerHTML="Le nombre de personne ayant strictement moins de 20 ans est "+x;
  document.getElementById("part2").innerHTML="Le nombre de personne ayant entre 20 et 40 ans est "+y;
  document.getElementById("part3").innerHTML="Le nombre de personne ayant strictement plus de 40 ans est "+z;
