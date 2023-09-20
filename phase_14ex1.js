var button= document.getElementById("button");

button.addEventListener("click", function()
{
    saisi(document.getElementById("texte").value);
});

function saisi(mot){
    window.alert("Vous avez saisi: "+ mot);
};