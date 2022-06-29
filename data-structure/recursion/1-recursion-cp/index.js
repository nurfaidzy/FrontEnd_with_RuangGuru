// Terapkan pow(x, n), yang menghitung x pangkat n (yaitu, x^n)
//
// Contoh 1:
// Input: x = 2.0, n = 10
// Output: 1024.0
//
// Contoh 2:
//
// Input: x = 2.1, n = 3
// Output: 9.261
//
// Example 3:
// Input: n = 2.0, n = -2
// Output: 0.25
// Explanation: 2^-2 = (1/2)^2 = 1/4 = 0.25

function myPow(x, n) {
    if (n === 0) return 1;
    
    let pow = Math.abs(n);

    
    if (n > 0) {
        return myPow(x, pow - 1) * x;
    }
    else
    {
        return 1 / (myPow(x, pow - 1) * x);
    }


    


    // if (n < 0) {
    //     return 1
    // }
    // else if (n >0) {
    //     return 1
    // }
    // else
    // {
    //     return myPow(n-1) + myPow(n-2);
    //     return x + myPow(x * pow);
    // }

    //   } else {
    //     return number + sum(number-1)
    //   }

    // if (n > 0 ) return x + myPow(x * pow);
    
    // if (n < 0) return x + myPow(x * pow);
      
    // TODO: answer here
    
    // TODO: answer here
}

module.exports = { myPow }