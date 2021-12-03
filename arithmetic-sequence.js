/*You're going to write a function that's going to return the value in the nth index of an arithmetic sequence.(That is, adding a constant to move to the next element in the "set").

The function's name is nthterm/Nthterm, it takes three inputs first,n,c where:

first is the first value in the 0 INDEX.
n is the index of the value we want.
c is the constant added between the terms.
Remember that first is in the index 0 .. just saying ...
*/
const nthterm = function (first, n, c) {
  return first + n * c;
}