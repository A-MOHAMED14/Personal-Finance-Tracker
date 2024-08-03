const router = require("express").Router();
const { User, Income, Expense } = require("../models/index.js");
const withAuth = require("../utils/auth.js");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    res.render("homepage", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Fetch all incomes
    const incomeData = await Income.findAll({
      where: { user_id: req.session.user_id },
      order: [["date", "ASC"]],
    });

    const incomes = incomeData.map((income) => income.get({ plain: true }));

    // Fetch all expenses
    const expenseData = await Expense.findAll({
      where: { user_id: req.session.user_id },
      order: [["date", "ASC"]],
    });

    const expenses = expenseData.map((expense) => expense.get({ plain: true }));

    res.render("dashboard", {
      incomes,
      expenses,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/income/:id", withAuth, async (req, res) => {
  const incomeData = await Income.findByPk(req.params.id);

  const income = incomeData.get({ plain: true });

  res.render("updateIncome", { income, logged_in: req.session.logged_in });
});

router.get("/expense/:id", withAuth, async (req, res) => {
  const expenseData = await Expense.findByPk(req.params.id);

  const expense = expenseData.get({ plain: true });

  res.render("updateExpense", { expense, logged_in: req.session.logged_in });
});

router.get("/update/income", withAuth, async (req, res) => {
  const incomeData = await Income.findByPk(req.query.id);

  const income = incomeData.get({ plain: true });

  res.render("updateIncome", { income, logged_in: req.session.id });
});

router.get("/update/expense", withAuth, async (req, res) => {
  const expenseData = await Expense.findByPk(req.query.id);

  const expense = expenseData.get({ plain: true });

  res.render("updateExpense", { expense, logged_in: req.session.id });
});

router.get("/newIncome", withAuth, async (req, res) => {
  try {
    res.render("newincome", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newExpense", withAuth, async (req, res) => {
  try {
    res.render("newexpense", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/dashboard");
      return;
    }

    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/dashboard");
      return;
    }

    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});
