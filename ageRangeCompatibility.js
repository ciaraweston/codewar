// Given an integer(1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float(which doesn't represent age). Return your answer in the form [min]-[max]

function datingRange(age) {
  //return min-max
  return age >= 14 ? `${Math.floor(age / 2 + 7)}-${Math.floor((age - 7) * 2)}` :
    `${Math.floor(age - (age * 0.1))}-${Math.floor(age + (age * 0.1))}`
}