function solution(str, ending) {
  // return str.endsWith(ending) 
  return str.indexOf(ending, str.length - ending.length) !== -1;
}