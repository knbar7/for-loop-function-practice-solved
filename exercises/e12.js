
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  
  //mostly just recycled from e11
  //still needs refactoring
    let depositsGreaterThanOneHundred = [];
    for (let account of array) {
      let item = account.deposits;
      if (Array.isArray(item)) { // check if item is an array
        for (let amount of item) {
          if (amount > 100) {
            depositsGreaterThanOneHundred.push(amount);
          }
        }
      } 
    }
    return depositsGreaterThanOneHundred;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
