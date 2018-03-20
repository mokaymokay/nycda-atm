// checking variables
const checkingBalance = document.getElementById('checking-balance');
const checkingDeposit = document.getElementById('checking-deposit');
const checkingWithdraw = document.getElementById('checking-withdraw');
// savings variables
const savingsBalance = document.getElementById('savings-balance');
const savingsDeposit = document.getElementById('savings-deposit');
const savingsWithdraw = document.getElementById('savings-withdraw');

function retrieveBalance(checkingBalance) {
  let amount = checkingBalance.innerHTML;
  return amount.slice(1, amount.length);
}

function retrieveBalance(savingsBalance) {
  let amount = savingsBalance.innerHTML;
  return amount.slice(1, amount.length);
}

(function changeColor() {
  if (retrieveBalance(checkingBalance) == 0) {
    checkingBalance.style.backgroundColor = '#F52F4F';
    checkingBalance.style.color = '#FFF';
  }
  if (retrieveBalance(savingsBalance) == 0) {
    savingsBalance.style.backgroundColor = '#F52F4F';
    savingsBalance.style.color = '#FFF';
  }
})();

// class Account {
//   constructor (amount) {
//     this.amount = amount;
//   }
//
//   change() {
//     if (this.amount === 0) {
//       // div w/ class of balance gets the style of .zero
//     }
//
//     deposit(amount) {
//       // if account deposit button gets clicked
//       //    acccount balance increases by input amount
//     }
//
//     withdraw(amount) {
//       // if account withdraw button gets clicked
//       //    account balance decreases by input amount
//     }
//
// }

// total balance = checking account balance + savings account balance
// if withdrawal amount > current account balance
//    if withdrawal amount < total balance
//       other account balance = other account balance - (withdrawal amount - current balance)
//       current balance = 0
//    current balance = current balance - withdrawal amount
