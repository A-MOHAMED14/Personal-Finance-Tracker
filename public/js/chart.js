const incomesData = JSON.parse(
  document.querySelector("#incomes-data").textContent
);

let incomeAmounts = [];
let incomeDates = [];

incomesData.forEach((income) => {
  incomeAmounts.push(income.amount);

  const formatDate = new Date(income.date);
  incomeDates.push(formatDate.toLocaleDateString());
});

const incomeChart = document.querySelector("#incomeChart").getContext("2d");

Chart.defaults.font.family = "Lato";
Chart.defaults.font.size = 18;
Chart.defaults.color = "#777";

const incomeBarChart = new Chart(incomeChart, {
  type: "bar",
  data: {
    labels: incomeDates,
    datasets: [
      {
        label: "Income Amounts",
        data: incomeAmounts,
        backgroundColor: "lightgreen",
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Income Overview",
        font: {
          size: 30,
        },
      },
      legend: {
        display: false,
        position: "right",
        labels: {
          color: "#000",
        },
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
      },
    },
  },
});

const expensesData = JSON.parse(
  document.querySelector("#expenses-data").textContent
);

let expenseAmounts = [];
let expenseCategories = [];

expensesData.forEach((expense) => {
  expenseAmounts.push(expense.amount);
  expenseCategories.push(expense.category);
});

const expenseChart = document.querySelector("#expenseChart").getContext("2d");

Chart.defaults.font.family = "Lato";
Chart.defaults.font.size = 18;
Chart.defaults.color = "#777";

const expenseDoughnutChart = new Chart(expenseChart, {
  type: "doughnut",
  data: {
    labels: expenseCategories,
    datasets: [
      {
        label: "Expense Amounts",
        data: expenseAmounts,
        backgroundColor: ["red", "orange", "indigo", "green"],
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
        display: true,
        text: "Expense Breakdown",
        font: {
          size: 30,
        },
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "#000",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    layout: {
      padding: {
        top: 100,
        right: 0,
        bottom: 0,
      },
    },
  },
});
