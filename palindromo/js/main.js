// Chiedere all’utente di inserire una parola
let userWord = prompt("Inserisci una parola");
console.log(userWord);

// Creare una funzione per capire se la parola inserita è palindroma
function palindrome() {
  let thisWord = "";

  for (let i = userWord.length - 1; i >= 0; i--) {
    const reverseWord = userWord.charAt(i);
    thisWord = thisWord + reverseWord;
  }
  return thisWord;
}

let isPalindrome = palindrome();

function reversed(userWord) {
  if (userWord === isPalindrome) {
    console.log("La parola inserita è palindroma: " + isPalindrome);
  } else {
    console.log("La parola inserita non è palindroma");
  }
}

reversed(userWord);
