function arrayIntersection(arr1, arr2) {
  const intersect = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersect.includes(arr1[i])) {
      intersect.push(arr1[i]);
    }
  }
  //   console.log(intersect);
  return intersect;
}
// arrayIntersection([1, 2, 2, 3, 3], [1, 2, 2, 3, 3, 6, 7]);
module.exports = arrayIntersection;
