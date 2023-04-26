// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  let balance = 0;
  let item = [];
  for (let file of array) {
    if (balance == 0 && file.balance > 0) {
      item = file;
      balance = file.balance;
    } else if (file.balance < item.balance) {
      item = file;
      balance = file.balance;
    }
  }
  return [item];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
