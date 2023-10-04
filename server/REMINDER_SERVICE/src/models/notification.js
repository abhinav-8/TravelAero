'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notification.init({
    subject: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    content: {
      type:DataTypes.TEXT('long'),
      allowNull:false,
    },
    recipientEmail: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    status: {
      type:DataTypes.ENUM,
      allowNull:false,
      values:['PENDING','SUCCESS','FAILED'],
      defaultValue:'PENDING',
    },
    notificationTime: {
      type:DataTypes.DATE,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};