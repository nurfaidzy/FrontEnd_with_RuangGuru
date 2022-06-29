// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    // TODO: answer here
    let tampung='';
    let hasil='';
    return str.split(tampung).reverse().join(hasil);
}
    
const string = prompt('Masukan teks: ');

const result = reverseString(string);
console.log(result);