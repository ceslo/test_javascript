var mot = window.prompt ("Entrez un mot");
var y = 0;
while (p>-1)
{
var p = mot.indexOf("a");
var mot = mot.substring((p+1), ((mot.length)-p-1));
var y=1;
++y
};
window.alert ("le nombre de a est " + y);