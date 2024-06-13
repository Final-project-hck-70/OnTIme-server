const { Leave, User } = require("../models");
const Sequelize = require("sequelize");

class LeaveController {
  static async createLeave(req, res, next) {
    try {
      const { from, to, reason, DelegateUserId } = req.body;
      const UserId = req.user.id;

      const leave = await Leave.create({
        from,
        to,
        reason,
        UserId,
        DelegateUserId,
        leaveStatus: "Pending",
      });

      res.status(201).json(leave);
    } catch (error) {
      next(error);
    }
  }

  static async getAllLeaves(req, res, next) {
    try {
      const { month, year } = req.query;

      const where = {};
      if (month && year) {
        where.from = Sequelize.where(
          Sequelize.fn("date_part", "month", Sequelize.col("from")),
          month
        );
        where.to = Sequelize.where(
          Sequelize.fn("date_part", "year", Sequelize.col("to")),
          year
        );
      }

      const leaves = await Leave.findAll({
        where,
        include: [
          { model: User, as: "User", attributes: ["name", "email"] },
          { model: User, as: "DelegateUser", attributes: ["name", "email"] },
        ],
      });

      res.status(200).json(leaves);
    } catch (error) {
      next(error);
    }
  }

  static async getUserLeaves(req, res, next) {
    try {
      const UserId = req.params.userId;

      const leaves = await Leave.findAll({
        where: { UserId },
        include: [
          { model: User, as: "User", attributes: ["name", "email"] },
          { model: User, as: "DelegateUser", attributes: ["name", "email"] },
        ],
      });

      res.status(200).json(leaves);
    } catch (error) {
      next(error);
    }
  }

  static async updateLeaveStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { leaveStatus } = req.body;

      const leave = await Leave.findByPk(id);
      if (!leave) {
        return res.status(404).json({ message: "Leave not found" });
      }

      leave.leaveStatus = leaveStatus;
      await leave.save();

      res.status(200).json(leave);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LeaveController;
