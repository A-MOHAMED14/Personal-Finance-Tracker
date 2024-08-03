const newExpense = async (event) => {
  event.preventDefault();

  const amount = document.querySelector("#new-expense-amount").value;
  const category = document.querySelector("#new-expense-category").value;
  const date = document.querySelector("#new-expense-date").value;

  if (amount && category && date) {
    const response = await fetch("/api/users/newExpense", {
      method: "POST",
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

document
  .querySelector("#new-expense-form")
  .addEventListener("submit", newExpense);
