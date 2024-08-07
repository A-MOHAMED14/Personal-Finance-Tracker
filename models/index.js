const User = require("./user.js");
const Income = require("./income.js");
const Expense = require("./expense.js");
const Budget = require("./budget.js");

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

User.hasMany(Budget, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Budget.belongsTo(User, {
  foreignKey: "user_id",
});

Expense.hasOne(Budget, {
  foreignKey: "expense_id",
  onDelete: "CASCADE",
});

Budget.belongsTo(Expense, {
  foreignKey: "expense_id",
});

module.exports = { User, Income, Expense, Budget };
