/**
 * Buatlah fungsi async yang tugasnya mengambil data karakter starwars dan mengembalikannya dalam bentuk string sebagai berikut:
 * 
 * Input: 1 // Karakter Id.
 * Output: "Luke Skywalker, memiliki tinggi 175cm dan lahir pada tahun 19BBY"
 * 
 * Untuk informasi yang lebih lengkap mengenai endpoint yang digunakan, silahkah akses https://swapi.dev/documentation#people
 * 
 * Gunakan keyword async/await untuk menyelesaikan fungsi ini.
 */

/**
 * Gunakan fungsi berikut untuk mempermudah http request.
 */
 const https = require("https");

 function getStarWarsData(url) {
   return new Promise((resolve, reject) => {
     https
       .get(url, (res) => {
         let result = "";
 
         if (res.statusCode !== 200) {
           reject(new Error(res.statusCode));
         }
 
         res.on("data", (d) => {
           result += d;
         });
 
         res.on("end", () => {
           resolve(result);
         });
       })
       .on("error", (e) => {
         reject(e);
       });
   });
 }
 
 
 async function getDataPeopleById(id) {
   // TODO: answer here
    const url = `https://swapi.dev/api/people/${id}`;
    const data = await getStarWarsData(url);
    const dataPeople = JSON.parse(data);
    const name = dataPeople.name;
    const height = dataPeople.height;
    const birth_year = dataPeople.birth_year;
    const result = `${name}, memiliki tinggi ${height}cm dan lahir pada tahun ${birth_year}`;
    return result;
 }

 module.exports = {
  getDataPeopleById
 }
 
 