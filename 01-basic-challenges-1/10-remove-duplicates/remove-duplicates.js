// const removeDuplicates = (arr) => {
//   return Array.from(new Set(arr));
// };

const removeDuplicates = (arr) => {
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
module.exports = removeDuplicates;
