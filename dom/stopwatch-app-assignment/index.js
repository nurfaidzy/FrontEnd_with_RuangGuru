/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

// TODO: answer here
const stopwatch = document.getElementById('stopwatch');
let startbtn = document.getElementById('start');
startbtn.addEventListener('click', start);
let stopbtn = document.getElementById('stop');
stopbtn.addEventListener('click', stop);
let resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click', reset);

let jam = 0;
let menit = 0;
let detik = 0;
let stopTime = true;

function start() {
  // TODO: answer here
  stopTime = false;
  runTime();
}

function stop() {
  // TODO: answer here
  stopTime = true;
}

function reset() {
  // TODO: answer here
  stopwatch.innerHTML = "00:00:00";
  stopTime = true;
  jam = 0;
  menit = 0;
  detik = 0;
}

function runTime() {
  // TODO: answer here
  if (stopTime === false) {
    detik++;
    if (detik === 60) {
      detik = 0;
      menit++;
      if (menit === 60) {
        menit = 0;
        jam++;
      }
    }
    stopwatch.innerHTML = jam + ":" + menit + ":" + detik;
    setTimeout(runTime, 1000);
  }
}