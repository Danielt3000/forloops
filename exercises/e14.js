// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  if (array.length === 0) {
    return [];
  }
  let obj = [];
  for (let i = 0; i < array.length; i++) {
    let depositsSum = 0;
    let withdrawalsSum = 0;

    if (array[i].deposits) {
      for (let j = 0; j < array[i].deposits.length; j++) {
        depositsSum += array[i].deposits[j];
      }
    }

    if (array[i].withdrawals) {
      for (let k = 0; k < array[i].withdrawals.length; k++) {
        withdrawalsSum += array[i].withdrawals[k];
      }
    }
    let balanceDifference = depositsSum - withdrawalsSum;
    if (balanceDifference !== array[i].balance) {
      obj.push(array[i]);
    }
  }
  return obj;
}
