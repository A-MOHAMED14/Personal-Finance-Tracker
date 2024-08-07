const newBudget = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#budget-name").value;
  const amount = document.querySelector("#budget-amount").value;

  if (name && amount) {
    const response = await fetch("/api/users/newBudget", {
      method: "POST",
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

const DisplaySelectedBudget = async (event) => {
  const selectedBudget = event.target.closest("#budget-tr");
  console.log(selectedBudget);

  if (selectedBudget) {
    const budgetId = selectedBudget.getAttribute("data-id");

    if (budgetId) {
      const response = await fetch(`/budget/${budgetId}`);

      if (response.ok) {
        window.location.href = `/update/budget?id=${budgetId}`;
      } else {
        alert(response.statusText);
      }
    }
  }
};

document.querySelector("#budget-form").addEventListener("submit", newBudget);

document
  .querySelectorAll("#budget-tr")
  .forEach((row) => row.addEventListener("click", DisplaySelectedBudget));
