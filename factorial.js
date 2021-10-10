/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

function factorial(n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return result;
  } else {
    for (let i = n; i >= 1; i--) {
      result *= i;
    }
    return result;
  }
}

// ALSO VALID
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = factorial;

