const User = require("./user.js");
const Income = require("./income.js");
const Expense = require("./expense.js");

User.hasMany(Income, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Income.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Expense, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Expense.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Income, Expense };
