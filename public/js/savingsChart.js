const remainingBalance = JSON.parse(
  document.querySelector("#balance-data").textContent
);

const totalExpense = JSON.parse(
  document.querySelector("#total-expenses").textContent
);

const totalBudget = JSON.parse(
  document.querySelector("#total-budget").textContent
);

const remainingBudget = totalBudget - totalExpense;

const budgetChart = document.querySelector("#budgetChart").getContext("2d");

Chart.defaults.font.family = "Lato";
Chart.defaults.font.size = 18;
Chart.defaults.color = "#777";

const budgetBarChart = new Chart(budgetChart, {
  type: "doughnut",
  data: {
    labels: ["Amount Spent", "Remaining Budget"],
    datasets: [
      {
        label: "",
        data: [totalExpense, remainingBudget],
        backgroundColor: ["#d40000", "#4c31ff"],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  },
});
