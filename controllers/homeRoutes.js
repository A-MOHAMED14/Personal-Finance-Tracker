const router = require("express").Router();
const { User } = require("../models/index.js");
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
    res.render("dashboard", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
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
