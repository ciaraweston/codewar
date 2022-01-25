// The goal of this Kata is to reduce the passed integer to a single digit(if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.

// If the passed integer is already a single digit there is no need to reduce
// n will be an integer such that 0 < n < 10⁹
// For example given 5665 the function should return 5:

function singleDigit(n) {
  while (n.toString().length > 1) {
    n = n.toString(2).split``.reduce((a, b) => b == 1 ? a += 1 : a, 0) * 1
  }
  return n
}