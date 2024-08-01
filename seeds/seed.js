const sequelize = require("../config/connection.js");
const { User, Income, Expense } = require("../models/index.js");

const userData = require("./userData.json");
const incomeData = require("./incomeData.json");
const expenseData = require("./expenseData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const income of incomeData) {
    await Income.create({
      ...income,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const expense of expenseData) {
    await Expense.create({
      ...expense,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
};

seedDatabase();
