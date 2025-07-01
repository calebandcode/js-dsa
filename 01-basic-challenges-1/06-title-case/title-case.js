const titleCase = (str) => {
  let strArr = str.toLowerCase().split(' ');
  for (i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(' ');
};

module.exports = titleCase;
