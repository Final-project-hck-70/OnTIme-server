const express = require("express");
const router = express.Router();
const LeaveController = require("../controllers/leaveController");
const { adminOnly } = require("../middleware/authorization");

router.post("/", LeaveController.createLeave);
router.get("/", LeaveController.getAllLeaves);
router.get("/user/:userId", LeaveController.getUserLeaves);
router.patch("/:id", adminOnly, LeaveController.updateLeaveStatus);

module.exports = router;
