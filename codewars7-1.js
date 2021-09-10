function disemvowel(str) {

  var str = str.replace(/a/gi, '').replace(/e/gi, '').replace(/i/gi, '').replace(/o/gi, '').replace(/u/gi, '');

  return str;

}
console.log(disemvowel("This website is for losers LOL!"));