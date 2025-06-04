//  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari
const evenOdd = prompt("Scegli pari o dispari");
console.log(evenOdd.toLowerCase());

// L’utente inserisce un numero da 1 a 5
let userNumb = Number(prompt("Scegli un numero da 1 a 5"));
console.log(userNumb);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function botNumb() {
  let random = Math.floor(Math.random() * 5) + 1;
  return random;
}

let pcNumb = botNumb();
console.log(pcNumb);

function result() {
  // Sommiamo i due numeri
  let sum = userNumb + pcNumb;
  // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) e dichiariamo chi ha vinto
  if (sum % 2 === 0 && evenOdd === "pari") {
    console.log("È pari, hai vinto!");
  } else if (sum % 2 !== 0 && evenOdd === "dispari") {
    console.log("È dispari, hai vinto!");
  } else {
    console.log("Hai perso!");
  }
}
