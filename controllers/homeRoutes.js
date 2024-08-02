const router = require("express").Router();
const { User } = require("../models/index.js");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});
