multiplicationTable = function (size) {
  let arr = [];
  for (let i = 1; i <= size; i++) {
    let tempArr = [];
    for (let j = 1; j <= size; j++) {
      tempArr.push(i * j)
    }
    arr.push(tempArr)
  }
  return arr
}