const { Router } = require("express");
const { newsController } = require("../controllers/News.controller");

const router = Router();

router.get("/news", newsController.getNews);
router.post("/news", newsController.createNews);
router.patch("/news/:id", newsController.patchNews);
router.delete("/news/:id", newsController.deleteNews);

module.exports = router;
