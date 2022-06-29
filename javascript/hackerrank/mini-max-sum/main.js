// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer here
  let jumlah = 0;
  let terkecil = 0;
  let terbesar = 0;
  for (let i = 0; i < arr.length; i++) {
    jumlah += arr[i];
    if (i == 0) {
      terkecil = arr[i];
      terbesar = arr[i];
    } else {
      if (arr[i] < terkecil) {
        terkecil = arr[i];
      } else if (arr[i] > terbesar) {
        terbesar = arr[i];
      }
    }
  }
  return (jumlah - terbesar) + ' ' + (jumlah - terkecil);
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result)
}

main(); // execute program

module.exports = miniMaxSum