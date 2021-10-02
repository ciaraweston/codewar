// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten / puppy.That was humanYears years ago.

// Return their respective ages now as [humanYears, catYears, dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
//   + 9 cat years for second year
//     + 4 cat years for each year after that
// Dog Years
// 15 dog years for first year
//   + 9 dog years for second year
//     + 5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {

  let catsAge;
  let dogsAge;

  if (humanYears === 1) {
    return [humanYears, 15, 15];
  }

  if (humanYears === 2) {
    return [humanYears, 24, 24];
  }

  const excessYears = humanYears - 2;
  const extraCatYears = excessYears * 4;
  const extraDogYears = excessYears * 5;

  return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
}


