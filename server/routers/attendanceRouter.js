const express = require("express");
const router = express.Router();
const AttendanceController = require("../controllers/attendanceController");

router.post("/", AttendanceController.createAttendance);
router.patch("/:id", AttendanceController.updateClockOut);
router.get("/", AttendanceController.getAllAttendances);

module.exports = router;
