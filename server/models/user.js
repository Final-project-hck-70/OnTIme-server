"use strict";
const { Model } = require("sequelize");
const { hashPass } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Company, { foreignKey: "CompanyId" });
      User.hasMany(models.Attendance, { foreignKey: "UserId" });
      User.hasMany(models.Leave, { foreignKey: "UserId" });
      User.hasMany(models.Overtime, { foreignKey: "UserId" });
      User.hasMany(models.NationalHoliday, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "staff",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Email is already in use",
        },
        validate: {
          notNull: {
            msg: "Email required",
          },
          notEmpty: {
            msg: "Email required",
          },
          isEmail: {
            msg: "Email is not valid",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password required",
          },
          notEmpty: "Password required",
          len: {
            args: [5],
            msg: "Password must be at least 5 characters long",
          },
        },
      },
      phoneNumber: DataTypes.INTEGER,
      avaUrl: DataTypes.STRING,
      position: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Position is required",
          },
          notEmpty: {
            msg: "Position is required",
          },
        },
      },
      CompanyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Company ID is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user) => {
    user.password = hashPass(user.password);
  });
  return User;
};
