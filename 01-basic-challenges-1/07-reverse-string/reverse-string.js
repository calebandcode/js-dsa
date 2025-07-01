const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// function reverseString(str) {
//   let reversed = '';

//   // Loop through the string backwards
//   for (let i = str.length - 1; i >= 0; i--) {
//     // Add each character to the reversed string
//     reversed += str[i];
//   }

//   // Return the reversed string
//   return reversed;
// }

// reverseString('hello');

module.exports = reverseString;
