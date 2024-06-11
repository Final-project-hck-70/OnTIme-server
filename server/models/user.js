"use strict";
const { Model } = require("sequelize");
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
      User.hasMany(models.Leave, { foreignKey: "DelegateUserId" });
      User.hasMany(models.Overtime, { foreignKey: "UserId" });
      User.hasMany(models.NationalHoliday, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      role: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
      avaUrl: DataTypes.STRING,
      position: DataTypes.STRING,
      CompanyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
