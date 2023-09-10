const { UserRepository } = require("../repositories/index");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const response = await this.userRepository.create(data);
      return response;
    } catch (error) {
      console.log("UserService: Something went wrong at service layer");
      throw { error };
    }
  }

  async destroy(userId) {
    try {
      const response = await this.userRepository.destroy(userId);
      return response;
    } catch (error) {
      console.log("UserService: Something went wrong at service layer");
      throw { error };
    }
  }

  async get(userId) {
    try {
      const response = await this.userRepository.get(userId);
      return response;
    } catch (error) {
      console.log("UserService: Something went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = UserService;