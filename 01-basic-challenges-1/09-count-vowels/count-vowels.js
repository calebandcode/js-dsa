function countVowels(str) {
  str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  for (let i = 0; i <= vowels.length; i++) {
    if (str[i] === vowels[i]) {
      vowelCount++;
    }
  }
  //   console.log(vowelCount);
  return vowelCount;
  //   return str.includes(vowels.join(''));
}
// countVowels('hello');
module.exports = countVowels;
