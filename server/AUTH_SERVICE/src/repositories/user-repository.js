const { User, Role } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      const role_customer = await Role.findByPk(2);
      user.addRole(role_customer);
      return user;
    } catch (error) {
      throw { error };
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id","name"],
      });
      return user;
    } catch (error) {
      throw { error };
    }
  }

  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        }
      });
      return user;
    } catch (error) {
        throw {error};
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where:{
          name:"ADMIN"
        }
      });
      return user.hasRole(adminRole);
    } catch (error) {
      throw {error};
    }
  }
}

module.exports = UserRepository;
