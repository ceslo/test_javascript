var n = window.prompt("Entrez un nombre");
if (n % 2 == 0) {
  window.alert("Ce nombre est pair");
} else {
  window.alert("Ce nombre est impair");
}

var a = window.prompt("Entrez votre année de naissance.");
var age = 2023 - a;
if (age >= 18) {
  window.alert("Vous avez: " + age + " ans cette année, vous êtes majeur");
} else {
  window.alert("Vous avez: " + age + " ans cette année, vous êtes mineur");
}

var n1 = window.prompt("Entrez un nombre entier");
var n2 = window.prompt("Entrez un autre nombre entier");
var op = window.prompt("Entrez un opérateur (+,-,*,ou /)");

switch (op) {
  case "+":
    window.alert("Le résultat est: " + (n1 + n2));
    break;
  case "-":
    window.alert("Le résultat est: " + (n1 - n2));
    break;
  case "*":
    window.alert("Le résultat est: " + n1 * n2);
    break;
  case "/":
    if (n2 == 0) {
      window.alert("Une division par 0 est impossible.");
    } else {
      window.alert("Le résultat est: " + n1 / n2);
    }

    break;
  default:
    window.alert("L'opérateur n'est pas conforme.");
}
