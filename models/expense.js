const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Expense extends Model {}

Expense.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true,
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "expense",
  }
);

module.exports = Expense;
