// Mengecek jika dua string adalah anagram
// Anagram adalah kata yang dibentuk melalui penataan ulang huruf-huruf dari beberapa kata lain.
//
// Contoh 1
// Input: a = "keen", b = "knee"
// Output: "Anagram"
// Explanation: Jika ditata, "knee" dan "keen" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 2
// Input: a = "fried", b = "fired"
// Output: "Anagram"
// Explanation: Jika ditata, "fried" dan "fired" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 3
// Input: a = "apple", b = "paddle"
// Output: "Bukan Anagram"
// Explanation: Jika ditata, "apple" dan "paddle" memiliki huruf-huruf yang berbeda

function anagramChecker(str1, str2) {
    const has1= new Map();
    const has2= new Map();

    for (let letter of str1) {
        if (has1.has(letter)) {
            has1.set(letter, has1.get(letter) + 1);
        }
        else {
            has1.set(letter, 1);
        }
    }

    for (let letter of str2) {
        if (has2.has(letter)) {
            has2.set(letter, has2.get(letter) + 1);
        }
        else {
            has2.set(letter, 1);
        }
    }

    if (has1.size !== has2.size) {
        return false;
    }

    for(let key of has1.keys()) {
        if(!has2.has(key))
        {
            return false;
        }
        if(has1.get(key) !== has2.get(key)) {
            return false;
        }
    }

    // else
    // {
    //     for (let key of has1.keys()) {
    //         if (has1.get(key) !== has2.get(key)) {
    //             return false;
    //         }
    //         else if (has1.get(key) === has2.get(key)) {
    //             if (has1.values() !== has2.values()) {
    //                 return false;
    //             }
    //             else
    //             {
    //                 return true;
    //             }
    //         }
    //     }
        
    // }

    // cek dulu apakah size sama ?
    //     kalau size beda => return false
    //     kalau size sama => lanjut

    // loop berdasarkan keys dari hashMap1 
    //     setiap iterasi akan melakukan :
    //         apakah didalam hashMap2 ada key yang sama
    //             kalau tidak ada => return false
    //             kalau ada => cek apakah valuenya sama antara hashMap1[key] dan hashMap2[key]
    //             kalau valuenya beda => return false
    //             kalau valuenya sama => lanjut
    // return true



    return true; // TODO: replace this
}

console.log(anagramChecker("keen", "knee"));
console.log(anagramChecker("kee", "knn"));
console.log(anagramChecker("fried", "fired"));

module.exports = {
    anagramChecker
}
