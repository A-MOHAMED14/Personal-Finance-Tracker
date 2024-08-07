const router = require("express").Router();
const { User, Income, Expense, Budget } = require("../models/index.js");
const withAuth = require("../utils/auth.js");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    if (req.session.logged_in === true) {
      const userData = await User.findByPk(req.session.user_id);

      const user = userData.get({ plain: true });

      res.render("homepage", { logged_in: req.session.logged_in, user });
    } else {
      res.render("homepage", { logged_in: req.session.logged_in });
    }
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
      limit: 31,
    });

    const incomes = incomeData.map((income) => income.get({ plain: true }));

    // Fetch all expenses
    const expenseData = await Expense.findAll({
      where: { user_id: req.session.user_id },
      order: [["date", "ASC"]],
      limit: 31,
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

router.get("/budget", withAuth, async (req, res) => {
  try {
    const budgetData = await Budget.findAll({
      where: { user_id: req.session.user_id },
      include: [
        {
          model: Expense,
          attributes: ["amount"],
        },
      ],
    });

    const budgets = budgetData.map((budget) => budget.get({ plain: true }));

    res.render("budget", { budgets, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/budget/:id", withAuth, async (req, res) => {
  try {
    const budgetData = await Budget.findByPk(req.params.id);

    const budget = budgetData.get({ plain: true });

    if (!budgetData) {
      res.status(400).json({ message: "Unable to find budget data " });
      return;
    }
    res.status(200).json({ message: "Budget data found with id" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/update/budget", withAuth, async (req, res) => {
  try {
    const budgetData = await Budget.findByPk(req.query.id);

    const budget = budgetData.get({ plain: true });

    res.render("updateBudget", { budget, logged_in: req.session.id });
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
      res.redirect("/");
      return;
    }

    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});
