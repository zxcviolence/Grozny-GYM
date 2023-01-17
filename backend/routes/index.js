const { Router } = require("express");

const router = Router();

router.use("/", require("./Users.route"));
router.use("/", require("./Category.route"));
router.use("/", require("./News.route"));

module.exports = router;
