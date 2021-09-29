// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

//   P.S.Each array includes only integer numbers.Output is a number too.

function arrayPlusArray(arr1, arr2) {

  let sum = 0;

  for (i = 0; i < arr1.length; i++) {
    const arr1Value = arr1[i];
    const arr2Value = arr2[i];

    const addedValue = arr1Value + arr2Value;

    sum = sum + addedValue;
  }
  return sum;
}

