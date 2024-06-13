const { Overtime, User } = require("../models");
const Sequelize = require("sequelize");

class OvertimeController {
  static async createOvertime(req, res, next) {
    try {
      const { overtimeDate, overtimeDuration, overtimeReason } = req.body;
      const UserId = req.user.id;   

      const overtime = await Overtime.create({
        overtimeDate,
        overtimeDuration,
        overtimeReason,
        UserId,
        overtimeStatus: "Pending",
      });

      res.status(201).json(overtime);
    } catch (error) {
      next(error);
    }
  }

  static async getAllOvertime(req, res, next) {
    try {
      const { month, year } = req.query;

      const where = {};
      if (month && year) {
        where.overtimeDate = {
          [Sequelize.Op.and]: [
            Sequelize.where(
              Sequelize.fn("date_part", "month", Sequelize.col("overtimeDate")),
              month
            ),
            Sequelize.where(
              Sequelize.fn("date_part", "year", Sequelize.col("overtimeDate")),
              year
            ),
          ],
        };
      }

      const overtimes = await Overtime.findAll({
        where,
        include: [{ model: User, attributes: ["name", "email"] }],
      });

      res.status(200).json(overtimes);
    } catch (error) {
      next(error);
    }
  }

  static async getUserOvertime(req, res, next) {
    try {
      const UserId = req.params.userId;

      const overtimes = await Overtime.findAll({
        where: { UserId },
        include: [{ model: User, attributes: ["name", "email"] }],
      });

      res.status(200).json(overtimes);
    } catch (error) {
      next(error);
    }
  }

  static async updateOvertimeStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { overtimeStatus } = req.body;

      const overtime = await Overtime.findByPk(id);
      if (!overtime) {
        return res.status(404).json({ message: "Overtime not found" });
      }

      overtime.overtimeStatus = overtimeStatus;
      await overtime.save();

      res.status(200).json(overtime);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OvertimeController;
