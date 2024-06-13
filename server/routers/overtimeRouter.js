const express = require("express");
const router = express.Router();
const OvertimeController = require("../controllers/overtimeController");
const { adminOnly } = require("../middleware/authorization");

router.post("/", OvertimeController.createOvertime);
router.get("/", OvertimeController.getAllOvertime);
router.get("/user/:userId", OvertimeController.getUserOvertime);
router.patch("/:id", adminOnly, OvertimeController.updateOvertimeStatus); 

module.exports = router;
