/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  let arr = text.split('');
  let textObj = arr.reduce((allLetters, letters) => {
    if (letters in allLetters) {
      allLetters[letters]++;
    } else {
      allLetters[letters] = 1;
    }
    return allLetters;
  }, {});

  let count = 0;
  let bigLetter = '';
  for (let letter in textObj) {
    if (textObj[letter] > count) {
      count = textObj[letter];
      bigLetter = letter;
    }
  }

  return bigLetter;
}

module.exports = maxRecurringChar;

