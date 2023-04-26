
// EXERCISE 3
// Return the average value for the given array of numbers, f.i.
// getAverage([22, 45, 4, 65]) => 34

export function getAverage(array) {
  let numberArray = [];
  let sum = 0;
  let average = 0;
  for(let number of array) {
    if (Number.isInteger(number)) {
      numberArray.push(number);
      sum+=number
    }
  }
  average = sum / numberArray.length;
  return average;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
