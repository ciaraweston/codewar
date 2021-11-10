// Write a function called repeatStr which repeats the given string string exactly n times.

//   repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(numberOfRepeats, str) {

  let starterString = '';
  for (let i = 0; i < numberOfRepeats; i++) {
    starterString = starterString + str;
  }
  return starterString;
}
