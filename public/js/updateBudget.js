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

document
  .querySelector("#update-budget-form")
  .addEventListener("submit", handleBudgetUpdate);
