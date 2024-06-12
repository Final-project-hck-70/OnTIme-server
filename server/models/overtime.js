"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Overtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Overtime.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  Overtime.init(
    {
      overtimeDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Overtime date is required" },
        },
      },
      overtimeDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Overtime duration is required" },
        },
      },
      overtimeReason: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Reason is required" },
        },
      },
      overtimeStatus: {
        type: DataTypes.STRING,
        defaultValue: "Pending",
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "User ID is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Overtime",
    }
  );
  return Overtime;
};
