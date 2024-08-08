const remainingBalance = JSON.parse(
  document.querySelector("#balance-data").textContent
);

const totalExpense = JSON.parse(
  document.querySelector("#total-expenses").textContent
);

const totalBudget = JSON.parse(
  document.querySelector("#total-budget").textContent
);

const remainingBudget = totalBudget - totalExpense;
