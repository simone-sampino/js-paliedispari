//  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari
const evenOdd = prompt("Scegli pari o dispari");
console.log(evenOdd);

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
