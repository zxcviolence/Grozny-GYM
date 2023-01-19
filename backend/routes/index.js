const { Router } = require("express");

const router = Router();

router.use("/users", require("./Users.route"));
router.use("/goods", require("./Goods.route"));
router.use("/category", require("./Category.route"));
router.use('/coaches', require("./Coach.route"));
router.use('/simulators', require('./Simulators.route'))

module.exports = router;
