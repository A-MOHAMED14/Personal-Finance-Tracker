const handleBudgetUpdate = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#update-budget-name").value;
  const amount = document.querySelector("#update-budget-amount").value;

  const budgetId = new URLSearchParams(window.location.search).get("id");

  if (amount && name && budgetId) {
    const response = await fetch(`/api/users/update/budget?id=${budgetId}`, {
      method: "PUT",
      body: JSON.stringify({ name, amount }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/budget");
    } else {
      alert(response.statusText);
    }
  }
};

const handleBudgetDeletion = async () => {
  if (confirm("Are you sure you want to delete this budget?")) {
    const budgetId = new URLSearchParams(window.location.search).get("id");

    if (budgetId) {
      const response = await fetch(`/api/users/delete/budget?id=${budgetId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        document.location.replace("/budget");
      }
    } else {
      return;
    }
  }
};

document
  .querySelector("#update-budget-form")
  .addEventListener("submit", handleBudgetUpdate);

document
  .querySelector("#delete-budget-btn")
  .addEventListener("click", handleBudgetDeletion);
