// Chiedere all’utente di inserire una parola
let userWord = prompt("Inserisci una parola");
console.log(userWord);

// Creare una funzione per capire se la parola inserita è palindroma
function palindrome(word) {
  let palindrome = "";

  for (let i = word.length - 1; i >= 0; i--) {
    const reverseWord = word.charAt(i);
    palindrome = palindrome + reverseWord;
  }
  return palindrome;
}

console.log(palindrome(userWord));
