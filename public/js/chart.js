const incomesData = JSON.parse(
  document.querySelector("#incomes-data").textContent
);

let incomeAmounts = [];
let incomeDates = [];

incomesData.forEach((income) => {
  incomeAmounts.push(income.amount);

  const formatDate = new Date(income.date);
  incomeDates.push(formatDate.toLocaleDateString());
});
