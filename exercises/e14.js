
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let incorrectAccounts = [];
  for (let item of array) {
    let balance = item.balance;
    let deposits = item.deposits;
    let withdrawals = item.withdrawals;
    let sum = 0;
    if (Array.isArray(deposits)) {
      for (let deposit of deposits) {
        sum += deposit;
      }
     }
    if (Array.isArray(withdrawals)) {
      for (let withdrawal of withdrawals) {
        sum -= withdrawal;
      }
    }
    if ( balance !== sum) {
      incorrectAccounts.push(item);
    }
  }
  return incorrectAccounts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
