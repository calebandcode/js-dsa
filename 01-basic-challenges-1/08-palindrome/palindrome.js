const isPalindrome = (str) => {
  // Remove all non-alphanumeric characters and convert the string to lowercase
  const fString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // return string if the formated string (fString) is === to input reversed.
  return fString === fString.split('').reverse().join('');
};

module.exports = isPalindrome;
