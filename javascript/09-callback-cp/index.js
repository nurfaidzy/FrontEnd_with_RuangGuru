// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
  // TODO: answer here
  let hasil = '';
  for (let i = 0; i < str.length; i++) {
    hasil += str[i] + str[i];
  }
  return hasil;
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  // TODO: answer here
  let hasil = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < num; j++) {
    hasil += cb(str[i]) ;
    }
  }
  return hasil;
}

console.log(repeat("triple", 2, doubleChars)); //  ttttrrrriiiipppplllleeee

module.exports = {
  doubleChars,
  repeat
}