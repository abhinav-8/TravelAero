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
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Email format is not valid",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, 32],
            msg: "The password should be at least 8 characters and maximum 32 characters long",
          },
          is: {
            args: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/,
            msg: "The Password must contain at least one uppercase letter, one lowercase letter, one special character and one number",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
