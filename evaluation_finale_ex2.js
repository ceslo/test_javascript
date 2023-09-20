function multi(n)
{
  tab=[]
  for (y = 1; y <= 10; +y) {
    tab[y] = y + " x " + n + " = " + (y * n);
    ++y;
  }
    return tab
}

var n = parseInt(
  window.prompt("Quelle table de multiplication souhaitez-vous afficher?")
);
document.getElementById("table").innerHTML = multi(n);





