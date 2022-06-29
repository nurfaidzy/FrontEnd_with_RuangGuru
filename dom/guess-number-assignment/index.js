/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan

// TODO: answer here
let newGameBtn = document.getElementsByClassName("new-game")[0].addEventListener("click", resetGame);
let randomNumber = Math.floor(Math.random() * 10) + 1;
let message = document.getElementsByClassName("message")[0];
let displayScore = document.getElementsByClassName("score")[0];
let input = document.getElementsByClassName("input")[0];
let checkBtn = document.getElementsByClassName("check")[0].addEventListener("click", checkNumber);
let score = 10;

function displayMessage(msg) {
  message.innerHTML = msg;
  displayScore.innerHTML = score;
}

function resetGame() {
  //dilarang menghapus code dibawah ini!
  score = 10;
  input.value = "";
  document.getElementsByClassName("number")[0].innerHTML = "?";
  randomNumber = Math.floor(Math.random() * 10) + 1;
  displayMessage("Lets start guessing...");
  document.getElementById("hidden-number").innerHTML = randomNumber;
}

function checkNumber() {
  let x = parseInt(input.value);

  if (score === 0) {
    displayMessage("Oops, you lost the game");
  } else if (x < 1 || x > 10) {
    displayMessage("Guess any number between 1 and 10");
    score -= 1;
  } else if (x < randomNumber) {
    displayMessage("Too small, buddy!");
    score -= 1;
  } else if (x > randomNumber) {
    displayMessage("Oww... that's too big!");
    score -= 1;
  } else if (x === randomNumber) {
    document.getElementsByClassName("number")[0].innerHTML = randomNumber;
    displayMessage("Yeay! you guessed it");
  }
}

//dilarang menghapus code dibawah ini!
document.getElementById("hidden-number").innerHTML = randomNumber;