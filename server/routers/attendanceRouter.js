const express = require("express");
const router = express.Router();
const AttendanceController = require("../controllers/attendanceController");
const { adminOnly } = require("../middleware/authorization");

router.post("/", AttendanceController.createAttendance);
router.patch("/:id", AttendanceController.updateClockOut);
router.get("/", AttendanceController.getAllAttendances);
router.patch("/update/:id", adminOnly, AttendanceController.updateAttendanceStatus);

module.exports = router;
