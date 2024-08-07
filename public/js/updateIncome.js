const handleIncomeUpdate = async (event) => {
  event.preventDefault();

  const amount = document.querySelector("#update-income-amount").value;
  const source = document.querySelector("#update-income-source").value;
  const date = document.querySelector("#update-income-date").value;

  const incomeId = new URLSearchParams(window.location.search).get("id");

  if (amount && source && date && incomeId) {
    const response = await fetch(`/api/users/update/income?id=${incomeId}`, {
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

const handleIncomeDeletion = async () => {
  if (confirm("Are you sure you want to delete this income?")) {
    const incomeId = new URLSearchParams(window.location.search).get("id");

    if (incomeId) {
      const response = await fetch(`/api/users/delete/income?id=${incomeId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      }
    } else {
      return;
    }
  }
};

document
  .querySelector("#update-income-form")
  .addEventListener("submit", handleIncomeUpdate);

document
  .querySelector("#delete-income-btn")
  .addEventListener("click", handleIncomeDeletion);
