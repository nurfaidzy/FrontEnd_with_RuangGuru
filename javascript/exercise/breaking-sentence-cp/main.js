/**
 * Kali ini tugas kamu adalah memisahkan setiap kata dalam kalimat.
 * gunakannlah built-in function dan cari panjang dari setiap kata tersebut.
 */
 
 var word = 'wow JavaScript is so cool and i will become frontend developer';
 var exampleFirstWord = word.substring(0, 3);
 var firstWordLength = exampleFirstWord.length;
  
 // TODO: answer here
 var secondWord = word.substring(4, 14); // JavaScript
 var secondWordLength = secondWord.length;
  
 var thirdWord = word.substring(15, 17); // is
 var thirdWordLength = thirdWord.length;
  
 var fourthWord = word.substring(18, 20); // so
 var fourthWordLength = fourthWord.length;
  
 var fifthWord = word.substring(21, 25); // cool
 var fifthWordLength = fifthWord.length;
  
 var sixthWord = word.substring(26,29); // and
 var sixthWordLength = sixthWord.length;
  
 var seventhWord = word.substring(30,31); // i
 var seventhWordLength = seventhWord.length;
  
 var eighthWord = word.substring(32,36); // will
 var eighthWordLength = eighthWord.length;
  
 var ninthWord = word.substring(37, 43); // become
 var ninthWordLength = ninthWord.length;
  
 var tenthWord = word.substring(44, 52); // frontend
 var tenthWordLength = tenthWord.length;
  
 var eleventhWord = word.substring(53,63); // developer
 var eleventhWordLength = eleventhWord.length;
  
 console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
 console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
 console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
 console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
 console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
 console.log('Sixth Word: ' + sixthWord + ', with length: ' + sixthWordLength);
 console.log('Seventh Word: ' + seventhWord + ', with length: ' + seventhWordLength);
 console.log('Eighth Word: ' + eighthWord + ', with length: ' + eighthWordLength);
 console.log('Ninth Word: ' + ninthWord + ', with length: ' + ninthWordLength);
 console.log('Tenth Word: ' + tenthWord + ', with length: ' + tenthWordLength);
 console.log('Eleventh Word: ' + eleventhWord + ', with length: ' + eleventhWordLength);