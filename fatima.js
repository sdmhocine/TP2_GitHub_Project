const nom = "Fatima Bey";
const ecole = "Ecole Polytechnique d'Oran";

function presentation(nom, ecole) {
  return "Bonjour, je suis " + nom + ", etudiante a l'" + ecole + ".";
}

function somme(a, b) {
  return a + b;
}

console.log(presentation(nom, ecole));
console.log("2 + 3 = " + somme(2, 3));
