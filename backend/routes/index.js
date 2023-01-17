const { Router } = require("express");

const router = Router();

router.use("/", require("./Users.route"));
router.use("/goods" , require("./Goods.route"));
router.use("/", require("./Category.route"));

module.exports = router;
