// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
const score = parseInt(prompt("Masukan nilai: "));

// TODO: answer here

let grade;
switch(true) 
{
    case score >= 91 :
        grade = "A";
        break;
    case score >= 71 :
        grade = "B";
        break;
    case score >= 61 :
        grade = "C";
        break;
    case score >= 51 :
        grade = "D";
        break;
    default :
        grade = "E";
        break;
}
