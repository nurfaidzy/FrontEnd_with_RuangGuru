// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
  let totalwaktu = 0, jam = 0, konversipm = {}, konversiam = {};
    konversipm = {
        '01': 13,
        '02': 14,
        '03': 15,
        '04': 16,
        '05': 17,
        '06': 18,
        '07': 19,
        '08': 20,
        '09': 21,
        '10': 22,
        '11': 23,
        '12': 12
    }
    konversiam = {
        '12': '00'
    }

    if ('PM' == s.substring(s.length - 2, s.length)) {
        jam = konversipm[s.substring(0, 2)];
    }
    else if ('AM' == s.substring(s.length - 2, s.length) && 12 == s.substring(0, 2)) {
        jam = konversiam[s.substring(0, 2)];
    } else {
        jam = s.substring(0, 2);
    }
    totalwaktu = (jam + s.substring(2, s.length - 2));
    return totalwaktu;
}

function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion