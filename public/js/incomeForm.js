const newIncome = async (event) => {
  event.preventDefault();

  const amount = document.querySelector("#new-income-amount").value;
  const source = document.querySelector("#new-income-source").value;
  const date = document.querySelector("#new-income-date").value;

  if (amount && source && date) {
    const response = await fetch("/api/users/newIncome", {
      method: "POST",
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
  .querySelector("#new-income-form")
  .addEventListener("submit", newIncome);
