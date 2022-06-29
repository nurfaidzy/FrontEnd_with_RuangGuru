// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh: 
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = parseInt(prompt("Masukan jumlah baris: "));

let b ="";

for (let i=1;i<=n;i++)
{
    for (let j=1;j<n-i;j++)
    {
        b += "*";
    }
    b += "\n";
}

console.log(b)

// TODO: answer here