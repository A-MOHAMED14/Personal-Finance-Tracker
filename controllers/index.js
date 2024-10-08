const router = require("express").Router();
const homeRoutes = require("./homeRoutes.js");
const apiRoutes = require("./api/index.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
