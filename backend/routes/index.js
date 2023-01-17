const { Router } = require("express");

const router = Router();

router.use("/", require("./Users.route"));
router.use("/goods" , require("./Goods.route"));

module.exports = router;
