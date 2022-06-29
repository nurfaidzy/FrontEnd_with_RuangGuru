/*
* Levi baru membuka Cafe bernama Ruang Cafe. saat ini cafe yang dimiliki Levi hanya memiki menu juice dan latte.
* Harga untuk menu juice yaitu Rp. 50.000 sedangkan untuk latte Rp. 300.000.
* Levi ingin membuat sebuah program untuk melihat menu apa yang cocok untuk pelanggannya.
* Ada pun kriteria dari aplikasi yang ingin dibuat yaitu:
* - jika pelanggan tidak menginput nama maka akan nemapilkan "Anda tidak boleh masuk!"
* - jika uang yang dimiliki oleh pelanggan kurang maka akan menampilkan "Uang tidak cukup. Anda harus pulang."
* - jika uang pelanggan cukup dan usia dibawah 17 tahun maka akan menampilkan "Anda bisa pesan juice. Sisa uang anda: <jumlah uang tersisa>"
* - jika uang pelanggan cukup dan usia 17 tahun keatas maka akan menampilkan "Anda bisa pesan latte. Sisa uang anda: <jumlah uang tersisa>"
* Bantulah Levi untuk membuat Pseudocode beserta Codenya.
* 
* notes:
* - Dilarang MENGGANTI nama variable yang sudah diberikan
* - Terdapat variable juice dan latte
*/


// PSEUDOCODE :
// TODO: answer here
/*
   STORE "juice" with value 50.000
   STORE "latte" with value 300.000
   STORE "uang" with value 0
   STORE "usia" with value 0
   STORE "nama" with value ""
   IF "nama" is empty THEN
     DISPLAY "Anda tidak boleh masuk!"
   ELSE IF "uang" is less than "juice" THEN
     DISPLAY "Uang tidak cukup. Anda harus pulang."
   ELSE IF "usia" is less than 17 THEN
     DISPLAY "Anda bisa pesan juice. Sisa uang anda: " + "uang" - "juice"
   ELSE IF "usia" is greater than or equal to 17 THEN
     DISPLAY "Anda bisa pesan latte. Sisa uang anda: " + "uang" - "latte"
*/  

function ruangCafe(name, age, money) {
  const juice = 50000;
  const latte = 300000;

  // TODO: answer here
  if (name === "") {
    return "Anda tidak boleh masuk!";
  } else if (money < juice) {
    return "Uang tidak cukup. Anda harus pulang.";
  } else if (age < 17) {
    return `Anda bisa pesan juice. Sisa uang anda: ${money - juice}`;
  } else {
    return `Anda bisa pesan latte. Sisa uang anda: ${money - latte}`;
  }
}

console.log(ruangCafe('', 21, 2000000))
console.log(ruangCafe('Dito', 16, 1000000))
console.log(ruangCafe('Adit', 11, 9000))
console.log(ruangCafe('Fauzan', 30, 999999))
console.log(ruangCafe('Tegar', 27, 5000))

module.exports = ruangCafe

