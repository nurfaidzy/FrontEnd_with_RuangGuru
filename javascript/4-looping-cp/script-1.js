// Mengembalikan urutan bilangan, dan mengetahui bilangan kelipatan 3 dan kelipatan 5
// contoh:
// baris = 5
// hasil:
// 1
// 2
// 3 merupakan kelipatan 3
// 4
// 5 merupakan kelipatan 5
//
// catatam: ingat, 15 merupakan kelipatan 3 dan 5.


// Masukan jumlah bilangan yang ingin dicek, iterasi dari angka 1
const counter = parseInt(prompt("Masukan jumlah bilangan yang ingin dicek: "));

for(var x=1; x<=counter ; x++)
{
    if( x%3===0 && x%5===0)
    {
        console.log(x+ " merupakan kelipatan 3 dan 5")
    }
    else if(x%5===0)
    {
        console.log(x+ " merupakan kelipatan 5")
    }
    else if(x%3===0)
    {
        console.log(x+ " merupakan kelipatan 3")
    }
}

// TODO: answer here