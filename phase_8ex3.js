var y = 0;
var s = 0;
var n = 0
do 
{
  var n = parseInt(window.prompt("Entrez un nombre"));
  s = (n+s);
  ++y;
 }
while(n!=0);
var m = (s / (y-1));

window.alert("La somme de ces nombres est " + s + " et la moyenne est " + m);
