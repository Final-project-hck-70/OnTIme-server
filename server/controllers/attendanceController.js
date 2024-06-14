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
      const attendanceStatus =
        currentTime > companyClockInTime ? "late" : "on time";

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
      if (
        clockOutTime.getDate() !== clockInDate.getDate() ||
        clockOutTime.getMonth() !== clockInDate.getMonth() ||
        clockOutTime.getFullYear() !== clockInDate.getFullYear()
      ) {
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
      const userCompanyId = req.user.CompanyId;
      const { day, month, year, sort = "desc" } = req.query;

      const whereConditions = {};

      if (year) {
        const startYear = new Date(`${year}-01-01T00:00:00.000Z`);
        const endYear = new Date(`${parseInt(year) + 1}-01-01T00:00:00.000Z`);
        whereConditions.clockIn = {
          [Op.gte]: startYear,
          [Op.lt]: endYear,
        };
      }

      if (month) {
        const startMonth = new Date(
          `${year || new Date().getFullYear()}-${String(month).padStart(
            2,
            "0"
          )}-01T00:00:00.000Z`
        );
        const endMonth = new Date(startMonth);
        endMonth.setMonth(startMonth.getMonth() + 1);
        whereConditions.clockIn = {
          [Op.gte]: startMonth,
          [Op.lt]: endMonth,
        };
      }

      if (day) {
        const startDay = new Date(
          `${year || new Date().getFullYear()}-${String(month).padStart(
            2,
            "0"
          )}-${String(day).padStart(2, "0")}T00:00:00.000Z`
        );
        const endDay = new Date(startDay);
        endDay.setDate(startDay.getDate() + 1);
        whereConditions.clockIn = {
          [Op.gte]: startDay,
          [Op.lt]: endDay,
        };
      }

      const attendances = await Attendance.findAll({
        include: {
          model: User,
          attributes: ["name", "email"],
          where: { CompanyId: userCompanyId },
        },
        where: whereConditions,
        order: [[Sequelize.col("clockIn"), sort]],
      });

      res.status(200).json(attendances);
    } catch (error) {
      next(error);
    }
  }

  static async updateAttendanceStatus(req, res, next) {
    try {
      const adminCompanyId = req.user.CompanyId;
      const attendanceId = req.params.id;
      const { status } = req.body;

      const attendance = await Attendance.findByPk(attendanceId, {
        include: {
          model: User,
          attributes: ["CompanyId"],
        },
      });

      if (!attendance || attendance.User.CompanyId !== adminCompanyId) {
        return res.status(404).json({
          message:
            "Attendance record not found or user not in the same company",
        });
      }

      attendance.attendanceStatus = status;
      await attendance.save();

      res.status(200).json(attendance);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AttendanceController;
