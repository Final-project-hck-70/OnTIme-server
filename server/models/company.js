"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.User, { foreignKey: "CompanyId" });
    }
  }
  Company.init(
    {
      name: DataTypes.STRING,
      totalLeaves: DataTypes.INTEGER,
      longitude: DataTypes.STRING,
      latitude: DataTypes.STRING,
      clockInTime: DataTypes.DATE,
      clockOutTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
