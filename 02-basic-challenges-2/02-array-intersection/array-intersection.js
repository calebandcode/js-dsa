// function arrayIntersection(arr1, arr2) {
//   const intersect = [];
//   for (i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !intersect.includes(arr1[i])) {
//       intersect.push(arr1[i]);
//     }
//   }
//   //   console.log(intersect);
//   return intersect;
// }
// arrayIntersection([1, 2, 2, 3, 3], [1, 2, 2, 3, 3, 6, 7]);

function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersect = [];
  for (let num of arr2) {
    if (set1.has(num)) {
      intersect.push(num);
    }
  }
  return intersect;
}

module.exports = arrayIntersection;
