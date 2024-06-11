'use strict';
const {
  Model
} = require('sequelize');
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
  NationalHoliday.init({
    date: DataTypes.DATE,
    holidayName: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NationalHoliday',
  });
  return NationalHoliday;
};