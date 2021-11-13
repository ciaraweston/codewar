//Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

//This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets[], and curly braces { }. Thanks to @arnedag for the idea!

//All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{ }.

//What is considered Valid ?
//A string of braces is considered valid if all braces are matched with the correct brace.


function validBraces(braces) {
  let parenCount = 0;
  let squareBracketCount = 0;
  let curlyBraceCount = 0;

  for (let i = 0; i < braces.length; i++) {
    let character = braces[i];
    if (character === "( ") {
      parenCount -= 1;
    }
    if (character === ") ") {
      parenCount += 1;
    }
    if (character === "[") {
      squareBracketCount -= 1;
    }
    if (character === "] ") {
      squareBracketCount += 1;
    }
    if (character === "{ ") {
      curlyBraceCount -= 1;
    }
    if (character === "} ") {
      curlyBraceCount += 1;
    }
  }
  if (parenCount === 0 && squareBracketCount === 0 && curlyBraceCount === 0) {
    return true;
  } else {
    return false;
  }
}
//Basically this challed is asking us to check whether a string of parentheses, brackets and curly braces is valid
//Example "()" is valid and "[(])" is not
//"() {} [] is valid and "[({})()]" is not Etc"