// const countOccurrences = (str, char) => {
//   let count = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };

// just trying something out 😊
// const countOccurrences = (str, char) => {
//   const count = str.split(char);
//   console.log(str.split(char).length - 1, count);
// };

// countOccurrences('he
// l
// l
// o', 'l'); --> he - - 0

const countOccurrences = (str, char) => str.split(char).length - 1;

// const countOccurrences = (str, char) => {
//   let count = 0;
//   for ([index, ltr] of str.split('').entries()) {
//     if (str[index] === char) {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// };
// countOccurrences('banana', 'a');

module.exports = countOccurrences;
