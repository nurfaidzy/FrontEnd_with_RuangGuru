// PSEUDOCODE:
// TODO: answer here
// START
//  STORE 'button' with random number from 1 to 5
//  IF 'button' is equal to 1
//      PRINT 'coba lagi ya'
//  ELSE IF 'button' is equal to 2
//      PRINT 'selamat kamu mendapatkan kupon sebanyak 5'
//  ELSE IF 'button' is equal to 3
//      PRINT 'selamat kamu mendapatkan kupon sebanyak 15'
//  ELSE IF 'button' is equal to 4
//      PRINT 'selamat kamu mendapatkan kupon sebanyak 50'
//  ELSE IF 'button' is equal to 5
//      PRINT 'selamat kamu mendapatkan kupon sebanyak 100'
// END
 
//code here
function gatcha(button) {
    if (button === 1) {
        return 'coba lagi ya'
    } else if (button === 2) {
        return 'selamat kamu mendapatkan kupon sebanyak 5'
    } else if (button === 3) {
        return 'selamat kamu mendapatkan kupon sebanyak 15'
    } else if (button === 4) {
        return 'selamat kamu mendapatkan kupon sebanyak 50'
    } else if (button === 5) {
        return 'selamat kamu mendapatkan kupon sebanyak 100'
    }
}

// Create variable button here
// TODO: answer here
var button = Math.floor(Math.random() * 5) + 1;
  gatcha(button);
 
module.exports = gatcha