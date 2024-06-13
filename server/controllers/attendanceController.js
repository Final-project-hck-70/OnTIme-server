const { Attendance, User, Company } = require("../models");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");

class AttendanceController {
  static async createAttendance(req, res, next) {
    try {
      const UserId = req.user.id;
      const user = await User.findByPk(UserId, { include: Company });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const now = new Date();
      const startOfDay = new Date(now.setHours(0, 0, 0, 0));
      const endOfDay = new Date(now.setHours(23, 59, 59, 999));

      const existingAttendance = await Attendance.findOne({
        where: {
          UserId,
          clockIn: {
            [Op.between]: [startOfDay, endOfDay],
          },
        },
      });

      if (existingAttendance) {
        return res.status(400).json({ message: "Already clocked in today" });
      }

      const previousAttendance = await Attendance.findOne({
        where: {
          UserId,
          clockOut: null,
          clockIn: {
            [Op.lt]: startOfDay,
          },
        },
      });

      if (previousAttendance) {
        previousAttendance.attendanceStatus = "absent";
        await previousAttendance.save();
      }

      const currentTime = new Date();
      const companyClockInTime = new Date(user.Company.clockInTime);
      
      // Normalize the companyClockInTime to the current day
      companyClockInTime.setFullYear(currentTime.getFullYear());
      companyClockInTime.setMonth(currentTime.getMonth());
      companyClockInTime.setDate(currentTime.getDate());

      // Compare time parts ignoring the date
      const attendanceStatus = currentTime > companyClockInTime ? "late" : "on time";

      const attendance = await Attendance.create({
        UserId,
        clockIn: currentTime,
        attendanceStatus,
      });

      res.status(201).json(attendance);
    } catch (error) {
      next(error);
    }
  }

  static async updateClockOut(req, res, next) {
    try {
      const UserId = req.user.id;
      const attendance = await Attendance.findOne({
        where: { UserId, clockOut: null },
      });

      if (!attendance) {
        return res
          .status(404)
          .json({ message: "Attendance not found or already clocked out" });
      }

      const clockOutTime = new Date();

      const clockInDate = attendance.clockIn;
      if (clockOutTime.getDate() !== clockInDate.getDate() || 
          clockOutTime.getMonth() !== clockInDate.getMonth() || 
          clockOutTime.getFullYear() !== clockInDate.getFullYear()) {
        attendance.attendanceStatus = "absent";
      } else {
        attendance.clockOut = clockOutTime;
      }

      await attendance.save();

      res.status(200).json(attendance);
    } catch (error) {
      next(error);
    }
  }

  static async getAllAttendances(req, res, next) {
    try {
      const { sort = "asc" } = req.query;

      const attendances = await Attendance.findAll({
        include: { model: User, attributes: ["name", "email"] },
        order: [
          [Sequelize.fn("date_part", "year", Sequelize.col("clockIn")), sort],
          [Sequelize.fn("date_part", "month", Sequelize.col("clockIn")), sort],
        ],
      });

      res.status(200).json(attendances);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AttendanceController;
