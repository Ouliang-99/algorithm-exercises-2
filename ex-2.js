function countPositivesSumNegatives(input) {
  //Start coding here
  if (!Array.isArray(input) || input.length === 0) return [];

  let postitiveNum = 0;
  let negativeNum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      postitiveNum = postitiveNum + 1;
    } else if (input[i] < 0) {
      negativeNum = negativeNum + input[i];
    } else {
      result = [];
    }
  }

  return [postitiveNum, negativeNum];
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
