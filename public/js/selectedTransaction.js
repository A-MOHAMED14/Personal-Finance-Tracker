const DisplaySelectedIncome = async (event) => {
  const selectedIncome = event.target.closest("#income-tr");

  if (selectedIncome) {
    const incomeId = selectedIncome.getAttribute("data-id");

    if (incomeId) {
      const response = await fetch(`/income/${incomeId}`);

      if (response.ok) {
        window.location.href = `/update?income_id=${incomeId}`;
      } else {
        alert(response.statusText);
      }
    }
  }
};

const DisplaySelectedExpense = async (event) => {
  const selectedExpense = event.target.closest("#expense-tr");

  if (selectedExpense) {
    const expenseId = selectedExpense.getAttribute("data-id");

    if (expenseId) {
      const response = await fetch(`/expense/${expenseId}`);

      if (response.ok) {
        window.location.href = `/update?expense_id=${expenseId}`;
      } else {
        alert(response.statusText);
      }
    }
  }
};

document
  .querySelectorAll("#income-tr")
  .forEach((row) => row.addEventListener("click", DisplaySelectedIncome));

document
  .querySelectorAll("#expense-tr")
  .forEach((row) => row.addEventListener("click", DisplaySelectedExpense));
