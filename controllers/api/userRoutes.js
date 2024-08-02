const router = require("express").Router();
const { User, Income, Expense } = require("../../models/index.js");

router.post("/signup", async (req, res) => {
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
});

module.exports = router;
