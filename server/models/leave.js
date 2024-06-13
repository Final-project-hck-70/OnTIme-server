"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Leave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Leave.belongsTo(models.User, { foreignKey: "UserId" });
      Leave.belongsTo(models.User, {
        foreignKey: "DelegateUserId",
        as: "DelegateUser",
      });
    }
  }
  Leave.init(
    {
      from: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "From date is required" },
        },
      },
      to: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "To date is required" },  
        },
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Reason cannot be empty" },
          notEmpty: { msg: "Reason cannot be empty" },
        },
      },
      leaveStatus: {
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
      DelegateUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "User ID is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Leave",
    }
  );
  return Leave;
};
