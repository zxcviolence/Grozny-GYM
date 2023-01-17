const { Router } = require("express");
const { categoriesController } = require("../controllers/Category.controller");

const router = Router();

router.get("/category", categoriesController.getCats);
router.post("/category", categoriesController.addCategory);
router.patch("/category/:id", categoriesController.updateCats);
router.delete("/category/:id", categoriesController.removeCats);

module.exports = router;
