////Complete the solution so that it reverses the string passed into it.

function solution(str) {
  const arr = str.split(' ');
  const reversed = arr.reverse();
  const reversedWord = reversed.join("");

  return reversedWord;
}