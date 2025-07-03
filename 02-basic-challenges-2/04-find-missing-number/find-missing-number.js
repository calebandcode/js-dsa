function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  if (arr.length == 0) return undefined;
  for (i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
