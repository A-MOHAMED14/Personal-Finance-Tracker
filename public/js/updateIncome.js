const handleIncomeUpdate = async (event) => {
  event.preventDefault();

  const amount = document.querySelector("#update-income-amount").value;
  const source = document.querySelector("#update-income-source").value;
  const date = document.querySelector("#update-income-date").value;

  const incomeId = new URLSearchParams(window.location.search).get("id");

  if ((amount && source && date, incomeId)) {
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


document
  .querySelector("#update-income-form")
  .addEventListener("submit", handleIncomeUpdate);


