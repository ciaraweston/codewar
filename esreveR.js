reverse = function (array) {
  return array.reduce(function (a, b) {
    return [b].concat(a)
  }, []);
}