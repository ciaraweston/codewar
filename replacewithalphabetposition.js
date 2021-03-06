// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

//   Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(as a string)

function alphabetPosition(text) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const textArr = text.toUpperCase().split("");
  const alphabetObj = {};
  const result = [];
  for (let char of alphabet) {
    alphabetObj[char] = alphabet.indexOf(char) + 1;
  }
  for (let letter of textArr) {
    if (alphabet.includes(letter)) result.push(alphabetObj[letter]);
  }
  return result.join(" ");
}

<<<<<<< HEAD
console.log(alphabetPosition("The sunset sets at five o' clock."));
=======
console.log(alphabetPosition("The sunset sets at five o' clock."));
>>>>>>> 32756e675f95f700c32a5debe8c4dc040a89d46b
