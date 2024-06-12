"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NationalHoliday extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NationalHoliday.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  NationalHoliday.init(
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Date is required" },
        },
      },
      holidayName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Name is required" },
        },
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
      modelName: "NationalHoliday",
    }
  );
  return NationalHoliday;
};
