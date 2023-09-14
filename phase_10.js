var tab=[];
var n= window.prompt ("Entrez la taille du tableau souhaitée");

for (var i=0;i<=n;++i)
{
    var x = window.prompt("entrez une valeur n"+i);
    tab[i]=[x];        
};

document.getElementById("tableau").innerHTML= tab;