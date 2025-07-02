function fizzBuzzArray(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }

  //   console.log(arr);

  return arr;
}

// fizzBuzzArray(15);
module.exports = fizzBuzzArray;
