// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3]-- > [2, 4, 6]

function maps(arr) {

  const result = arr.map((arrItem) => {
    return arrItem * 2;
  })
  return result;
}
