/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(x) {
  const str = x.toLowerCase();
  let pali = x.toLowerCase().split('').reverse().join('');
  if (pali === str) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindromeChecker;

