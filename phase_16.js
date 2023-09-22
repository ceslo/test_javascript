var button = document.getElementById("envoyer");
var selected = document.getElementById("env2");

button.addEventListener("click", function () {
  var filtreNum = /^\d{5}$/;

  if (document.getElementById("societe").value == "") {
    document.getElementById("er_soc").innerHTML =
      "Le nom de la societé doit contenir au moins 1 caractère";
  }
  if (document.getElementById("contact").value == "") {
    document.getElementById("er_contact").innerHTML =
      "Le nom de la personne à contacter doit contenir au moins 1 caractère";
  }
  if (filtreNum.test(document.getElementById("cp").value) == false) {
    document.getElementById("er_cp").innerHTML =
      "Le code postal doit contenir 5 chiffres";
  }
  if (document.getElementById("ville").value == "") {
    document.getElementById("er_ville").innerHTML =
      "Le nom de la ville doit contenir au moins 1 caractère";
  }
  if (document.getElementById("mail").value.includes("@") == false) {
    document.getElementById("er_mail").innerHTML =
      "L'adresse mail doit comporter une @";
  }
});
selected.addEventListener("select", function () {
  if (document.getElementById("env2").value == "Choisissez") {
    document.getElementById("er_env").innerHTML = "Ce champs est obligatoire";
  } else {
    document.getElementById("env").innerHTML = selected.value;
  }
});
