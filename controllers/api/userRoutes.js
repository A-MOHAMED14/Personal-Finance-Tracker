const router = require("express").Router();
const { User, Income, Expense } = require("../../models/index.js");

router.post("/newIncome", async (req, res) => {
  const { amount, source, date } = req.body;
  const userData = await Income.create({
    amount,
    source,
    date,
    user_id: req.session.user_id,
  });

  if (!userData) {
    res.status(400).json({ message: "Unable to create new income record" });
    return;
  }

  res.status(200).json({ message: "New income record created successfully" });
});

router.post("/newExpense", async (req, res) => {
  const { amount, category, date } = req.body;
  const userData = await Expense.create({
    amount,
    category,
    date,
    user_id: req.session.user_id,
  });

  if (!userData) {
    res.status(400).json({ message: "Unable to create new expense record" });
    return;
  }

  res.status(200).json({ message: "New expense record created" });
});

router.put("/update/income", async (req, res) => {
  try {
    const incomeData = await Income.update(req.body, {
      where: {
        id: req.query.id,
      },
    });

    if (!incomeData) {
      res.status(400).json({ message: "Unable to update income record" });
      return;
    }

    res.status(200).json({ message: "Income record updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/update/expense", async (req, res) => {
  try {
    const expenseData = await Expense.update(req.body, {
      where: {
        id: req.query.id,
      },
    });

    if (!expenseData) {
      res.status(400).json({ message: "Unable to update expense record" });
      return;
    }

    res.status(200).json({ message: "Income record updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/delete/income", async (req, res) => {
  try {
    const expenseData = await Expense.destroy({
      where: {
        id: req.query.id,
      },
    });

    if (!expenseData) {
      res.status(400).json({ message: "Unable to delete expense record" });
      return;
    }

    res.status(200).json({ message: "Expense record deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    if (!userData) {
      res.status(400).json({ message: "Unable to create new user record" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ message: "New user record created successfully" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
