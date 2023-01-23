const { formController } = require("../controllers/form.controller");
const { Router } = require("express");
const router = Router();

router.get("/", formController.getForm);
router.post("/", formController.postForm);

module.exports = router;