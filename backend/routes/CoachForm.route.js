const { coachFormController } = require("../controllers/CoachForm.controller");
const { Router } = require("express");
const router = Router();

router.get("/", coachFormController.getForm);
router.post("/", coachFormController.postForm);

module.exports = router;
