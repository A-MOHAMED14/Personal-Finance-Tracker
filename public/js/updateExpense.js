const handleExpenseUpdate = async (event) => {
  event.preventDefault();

  const amount = document.querySelector("#update-expense-amount").value;
  const category = document.querySelector("#update-expense-category").value;
  const date = document.querySelector("#update-expense-date").value;

  const expenseId = new URLSearchParams(window.location.search).get("id");

  if ((amount && category && date, expenseId)) {
    const response = await fetch(`/api/users/update/expense?id=${expenseId}`, {
      method: "PUT",
      body: JSON.stringify({ amount, category, date }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const handleExpenseDeletion = async () => {
  const expenseId = new URLSearchParams(window.location.search).get("id");

  if (expenseId) {
    const response = await fetch(`/api/users/delete/expense?id=${expenseId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#update-expense-form")
  .addEventListener("submit", handleExpenseUpdate);

document
  .querySelector("#delete-expense-btn")
  .addEventListener("click", handleExpenseDeletion);
