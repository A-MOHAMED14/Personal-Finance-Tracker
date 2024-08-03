const handleExpenseUpdate = async (event) => {
  event.preventDefault();

  const amount = document.querySelector("#update-expense-amount").value;
  const source = document.querySelector("#update-expense-category").value;
  const date = document.querySelector("#update-expense-date").value;

  const expenseId = new URLSearchParams(window.location.search).get("id");

  if ((amount && source && date, expenseId)) {
    const response = await fetch(`/api/users/update/expense?id=${expenseId}`, {
      method: "PUT",
      body: JSON.stringify({ amount, source, date }),
      headers: { "Content-Type": "application/json" },
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
