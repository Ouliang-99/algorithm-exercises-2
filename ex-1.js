function fizzBuzz(n) {
  //Start coding here
  const allNumber = [];
  const result = [];

  for (let i = 0; i <= n; i++) {
    allNumber.push(i);
  }

  allNumber.shift()

  for (let i = 0; i < allNumber.length; i++) {
    if (allNumber[i] % 3 === 0 && allNumber[i] % 5 === 0) {
      result.push("FizzBuzz");
    } else if (allNumber[i] % 3 === 0) {
      result.push("Fizz");
    } else if (allNumber[i] % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(allNumber[i]));
    }
  }

  return result;
}

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
