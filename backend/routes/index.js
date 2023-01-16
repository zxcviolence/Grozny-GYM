const { Router } = require("express");

const router = Router();

router.use("/", require("./Users.route"));

module.exports = router;
