const { comparePass } = require("../helpers/bcrypt");
const { User, Company, Attendance, Overtime, Leave } = require("../models");
const { createToken } = require("../helpers/jwt");
const { Op, Sequelize } = require("sequelize");

class UserController {
  static async addUser(req, res, next) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  static async postlogin(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "EmailEmpty" };
      if (!password) throw { name: "PasswordEmpty" };

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "InvalidLogin" };
      const result = comparePass(password, user.password);
      if (!result) throw { name: "InvalidLogin" };
      const token = createToken({ id: user.id });
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }

  static async getAllUsers(req, res, next) {
    try {
      const { name } = req.query;
      const userCompanyId = req.user.CompanyId;

      const whereConditions = {
        CompanyId: userCompanyId,
      };

      if (name) {
        whereConditions.name = {
          [Op.iLike]: `%${name}%`,
        };
      }

      const users = await User.findAll({
        where: whereConditions,
        include: [{ model: Company, attributes: ["name"] }],
        order: [[Sequelize.col("name"), "ASC"]],
      });

      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        include: [
          { model: Company, attributes: ["name"] },
          { model: Attendance },
        ],
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async getLoggedInUser(req, res, next) {
    try {
      const { id } = req.user;

      const user = await User.findByPk(id, {
        include: [
          { model: Company, attributes: ["name"] },
          { model: Attendance },
          { model: Overtime },
          {
            model: Leave,
            as: "Leaves",
            include: [
              {
                model: User,
                as: "DelegateUser",
                attributes: ["name", "email"],
              },
            ],
          },
        ],
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
