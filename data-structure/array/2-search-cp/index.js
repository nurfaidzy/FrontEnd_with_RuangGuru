function searchMatch(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }
    return result // TODO: replace this
}

let cars1 = ["Toyota", "Honda", "Nissan", "BMW", "Chevy", "Ford"];
let cars2 = ["Ford", "BMW", "Audi", "Mercedes"];

result = searchMatch(cars1, cars2);
console.log(result);

module.exports = {searchMatch}