/**
 * Lengkapilah function dibawah ini dimana terdapat function groupBy yang mengelompokkan elemen dari array dengan nilai yang dikembalikan dari callback function (isOdd) melalui argumen.
 * 
 * isOdd sendiri merupakan sebuah function yang akan melalukan validasi apakah tahun keliahiran dari data ganjil atau genap, Nilai yang dikembalikan berupa true atau false.
 * 
 * input:
 * [
 *    {
 *      name: 'Dito',
 *      year: 1992,
 *      place: 'Bogor',
 *    },
 *    {
 *      name: 'Tegar',
 *      year: 1995,
 *      place: 'Depok',
 *    },
 *    {
 *      name: 'Uli',
 *      year: 1996,
 *      place: 'Bogor',
 *    },
 *  ]
 * 
 * output: 
 *  { false:
 *    [ { name: 'Dito', year: 1992, place: 'Bogor' },
 *      { name: 'Uli', year: 1996, place: 'Bogor' } ],
 *   true: [ { name: 'Tegar', year: 1995, place: 'Depok' } ] }
 */

const input = [
  {
    name: 'Adit',
    year: 1996,
    place: 'Bogor',
  },
  {
    name: 'Fauzan',
    year: 1995,
    place: 'Depok',
  },
  {
    name: 'Vika',
    year: 1990,
    place: 'Bandung',
  },
];

const isOdd = (data) => {
  // TODO: answer here
  return data.year % 2 === 1;
};

const groupBy = (array, callback) => array.reduce(
  (accumulator, dataValue) => {
    // TODO: answer here
    const key = callback(dataValue);
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(dataValue);
    return accumulator;
  }, {}
);

console.log(groupBy(input, isOdd))

module.exports = {
  groupBy,
  isOdd
}