'use strict';
const {
  Model
} = require('sequelize');
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
      Leave.belongsTo(models.User, { foreignKey: "DelegateUserId" });
    }
  }
  Leave.init({
    from: DataTypes.DATE,
    to: DataTypes.DATE,
    reason: DataTypes.STRING,
    leaveStatus: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    DelegateUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Leave',
  });
  return Leave;
};