// Sort array terlebih dahulu, kemudian rotasi ke kiri sesuai dengan nilai yang telah ditentukan.
//
// Contoh Sort array:
// Input: [4,5,2,1,3]
// Output: [1,2,3,4,5]

//Contoh RotateLeft:
//Input: 4, [1,2,3,4,5]
//Output: [5,1,2,3,4]

// Explanation RotateLeft:
// untuk melakukan rotasi kiri dengan nilai 4, array mengalami urutan perubahan berikut:
// [1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]

function sort(arr) {
    arr = arr.sort((a, b) => a - b)
    return arr // TODO: replace this
}

function rotateLeft(d, arr) {
    for (let i = 0; i < d; i++) {
        let temp = arr[0]
        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1]
        }
        arr[arr.length - 1] = temp
    }
    return arr // TODO: replace this
}

let nums = [4, 5, 2, 1, 3]
let sorted = sort(nums)
console.log(sorted)
rotated = rotateLeft(4, sorted)
console.log(rotated)

module.exports = { sort, rotateLeft }