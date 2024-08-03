const handleNewIncomeClick = async () => {
  const response = await fetch("/newIncome");

  if (response.ok) {
    document.location.assign("/newIncome");
  } else {
    alert(response.statusText);
  }
};

const handleNewExpenseClick = async () => {
  const response = await fetch("/newExpense");

  if (response.ok) {
    document.location.assign("/newExpense");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#add-income-btn")
  .addEventListener("click", handleNewIncomeClick);

document
  .querySelector("#add-expense-btn")
  .addEventListener("click", handleNewExpenseClick);
