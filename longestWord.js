/* CHALLENGE
// Given a string of text, write an algorithm that returns the text received in a reversed format. 
// E.g reverseString('algorithms') // should return 'smhtirogla'
Given a string, find the longest word
*/

function longestWord(text) {
  let phrase = text.split(' ');
  let longest = phrase[0];
  for (let i = 1; i < phrase.length; i++) {
    if (longest.length < phrase[i].length) {
      longest = phrase[i];
    }
  }
  return longest;
}

module.exports = longestWord;
